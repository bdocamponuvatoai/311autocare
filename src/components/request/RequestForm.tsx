"use client";

import { Fragment, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import {
  requestSteps,
  requestTopics,
  type RequestTopicId,
} from "@/content/request";
import { formatStep } from "@/lib/format";
import { summarizeRequest, type RequestSummary } from "@/lib/service-request";

const LAST_STEP = requestSteps.length - 1;

type CopyState = { status: string; showFallback: boolean };
const initialCopyState: CopyState = { status: "", showFallback: false };

/**
 * Three-step enquiry builder: topic → vehicle and contact details → review.
 * Steps stay mounted (only hidden) so entered values survive going back.
 */
export function RequestForm({
  initialTopic,
}: {
  initialTopic?: RequestTopicId;
}) {
  const [step, setStep] = useState(0);
  const [summary, setSummary] = useState<RequestSummary | null>(null);
  const [copy, setCopy] = useState(initialCopyState);
  const formRef = useRef<HTMLFormElement>(null);
  const fallbackRef = useRef<HTMLTextAreaElement>(null);

  const stepElement = (index: number) =>
    formRef.current?.querySelector<HTMLElement>(`[data-step="${index}"]`);

  function goTo(next: number) {
    // Render the new step synchronously so its heading can receive focus.
    flushSync(() => setStep(next));
    stepElement(next)?.querySelector("h2")?.focus({ preventScroll: true });
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    formRef.current?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    });
  }

  function currentStepIsValid() {
    const fields = stepElement(step)?.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    for (const field of fields ?? []) {
      if (!field.checkValidity()) {
        field.reportValidity();
        field.focus();
        return false;
      }
    }
    return true;
  }

  function handleNext() {
    if (!currentStepIsValid() || !formRef.current) return;
    if (step === LAST_STEP - 1) {
      setSummary(summarizeRequest(new FormData(formRef.current)));
      setCopy(initialCopyState);
    }
    goTo(Math.min(step + 1, LAST_STEP));
  }

  const handleBack = () => goTo(Math.max(step - 1, 0));

  async function handleCopy() {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary.text);
      setCopy({
        status: `Request copied. Paste it into an email to ${siteConfig.email}.`,
        showFallback: false,
      });
    } catch {
      // Clipboard access can be blocked; let the visitor copy it manually.
      flushSync(() =>
        setCopy({
          status:
            "Select and copy the request below, then paste it into your email.",
          showFallback: true,
        }),
      );
      fallbackRef.current?.focus();
      fallbackRef.current?.select();
    }
  }

  // CSS also relies on data-step to style the review step.
  const stepProps = (index: number) => ({
    className: "request-step",
    "data-step": index,
    hidden: step !== index,
  });

  return (
    <>
      <ol className="request-progress" aria-label="Request progress">
        {requestSteps.map((label, index) => (
          <li key={label} aria-current={index === step ? "step" : undefined}>
            <span>{formatStep(index)}</span>
            {label}
          </li>
        ))}
      </ol>
      <form
        id="request-form"
        ref={formRef}
        noValidate
        onSubmit={(event) => event.preventDefault()}
      >
        <section {...stepProps(0)}>
          <p className="eyebrow">STEP 01 / YOUR STARTING POINT</p>
          <h2 tabIndex={-1}>What brings you in?</h2>
          <p>Choose the closest fit. You can explain the details next.</p>
          <fieldset className="service-choices">
            <legend className="sr-only">Service topic</legend>
            {requestTopics.map((topic) => (
              <label key={topic.id}>
                <input
                  type="radio"
                  name="service"
                  value={topic.id}
                  defaultChecked={topic.id === initialTopic}
                  required
                />
                <span>
                  <Icon name={topic.icon} />
                  <b>{topic.name}</b>
                  <i />
                </span>
              </label>
            ))}
          </fieldset>
          <div className="request-actions">
            <small>Service scope is confirmed by the shop.</small>
            <button type="button" className="button" onClick={handleNext}>
              Continue <Icon />
            </button>
          </div>
        </section>

        <section {...stepProps(1)}>
          <p className="eyebrow">STEP 02 / A FEW HELPFUL DETAILS</p>
          <h2 tabIndex={-1}>Let’s get to know your vehicle.</h2>
          <p>
            Fields marked * are required. Your details are not saved or sent by
            this website.
          </p>
          <div className="field-grid vehicle-fields">
            <label>
              Year *
              <input
                name="year"
                inputMode="numeric"
                pattern="[0-9]{4}"
                minLength={4}
                maxLength={4}
                placeholder="e.g. 2018"
                required
              />
            </label>
            <label>
              Make *
              <input
                name="make"
                maxLength={50}
                placeholder="e.g. Toyota"
                required
              />
            </label>
            <label>
              Model *
              <input
                name="model"
                maxLength={60}
                placeholder="e.g. Camry"
                required
              />
            </label>
          </div>
          <label className="field">
            Approximate mileage
            <input
              name="mileage"
              inputMode="numeric"
              maxLength={12}
              placeholder="e.g. 85000"
            />
          </label>
          <label className="field">
            What would you like us to look at? *
            <textarea
              name="concern"
              rows={4}
              maxLength={1200}
              placeholder="Tell us what you’ve noticed or the work you’re looking for…"
              required
            />
          </label>
          <div className="field-grid">
            <label>
              Your name *
              <input name="name" autoComplete="name" maxLength={100} required />
            </label>
            <label>
              Reply email *
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={150}
                required
              />
            </label>
          </div>
          <label className="field">
            Phone number (optional)
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              placeholder="A number the shop can reach you on"
            />
          </label>
          <div className="request-actions">
            <button type="button" className="back-button" onClick={handleBack}>
              ← Back
            </button>
            <button type="button" className="button" onClick={handleNext}>
              Review my request <Icon />
            </button>
          </div>
        </section>

        <section {...stepProps(2)}>
          <p className="eyebrow">STEP 03 / REVIEW & CONNECT</p>
          <h2 tabIndex={-1}>Ready for a conversation.</h2>
          <p>
            Check your details below. The next button opens an email draft for
            you to review and send.
          </p>
          <dl id="request-review">
            {summary?.rows.map(([label, value]) => (
              <Fragment key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </Fragment>
            ))}
          </dl>
          <p className="email-note">
            Nothing has been sent. Appointment timing, pricing and service
            availability must be confirmed by 311 Auto Care.
          </p>
          <a
            className="button"
            id="email-request"
            href={summary?.mailtoHref ?? `mailto:${siteConfig.email}`}
          >
            Open email draft <Icon name="up" />
          </a>
          <button type="button" className="copy-button" onClick={handleCopy}>
            Copy request text
          </button>
          <p id="copy-status" role="status">
            {copy.status}
          </p>
          <textarea
            id="copy-fallback"
            ref={fallbackRef}
            aria-label="Your request text to copy"
            value={summary?.text ?? ""}
            readOnly
            hidden={!copy.showFallback}
          />
          <div className="request-actions">
            <button type="button" className="back-button" onClick={handleBack}>
              ← Edit my details
            </button>
            <a className="text-link" href={siteConfig.phone.href}>
              Call instead <Icon name="phone" />
            </a>
          </div>
        </section>
      </form>
    </>
  );
}
