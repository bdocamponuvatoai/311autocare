"use client";

import { useRef, useState, type KeyboardEvent } from "react";

import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { notices } from "@/content/notices";
import { requestPath } from "@/content/request";
import { formatStep } from "@/lib/format";

const PANEL_ID = "finder-panel";
const tabId = (id: string) => `notice-${id}`;

/** Tablist that suggests what to mention, based on what the driver notices. */
export function NoticeFinder() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = notices[selectedIndex];

  // Arrow/Home/End keys move selection and focus (WAI-ARIA tabs pattern).
  const onKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = notices.length - 1;
    const targets: Partial<Record<string, number>> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowDown: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const next = targets[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setSelectedIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="finder">
      <div
        className="finder-options"
        role="tablist"
        aria-label="What you notice"
      >
        {notices.map((notice, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={notice.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={tabId(notice.id)}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={PANEL_ID}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span>{formatStep(index)}</span>
              {`${notice.option} `}
              <Icon />
            </button>
          );
        })}
      </div>
      <div
        className="finder-panel"
        id={PANEL_ID}
        role="tabpanel"
        aria-labelledby={tabId(selected.id)}
        tabIndex={0}
      >
        <span className="finder-label">{selected.label}</span>
        <h3>{selected.title}</h3>
        <p>{selected.description}</p>
        <div className="finder-tags">
          {selected.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <TextLink href={requestPath(selected.topic)}>Start my request</TextLink>
        <small>
          This helps prepare your enquiry; it is not an online diagnosis.
        </small>
      </div>
    </div>
  );
}
