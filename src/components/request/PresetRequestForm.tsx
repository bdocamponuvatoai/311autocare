"use client";

import { useSearchParams } from "next/navigation";

import { isRequestTopicId } from "@/content/request";

import { RequestForm } from "./RequestForm";

/**
 * Preselects the service topic from `?service=` (e.g. /request/?service=brakes).
 * Must be rendered inside <Suspense>: search params only exist in the browser
 * for a statically exported page.
 */
export function PresetRequestForm() {
  const param = useSearchParams().get("service");
  const initialTopic = isRequestTopicId(param) ? param : undefined;
  // Remount when the preset changes so the uncontrolled radios pick it up.
  return (
    <RequestForm key={initialTopic ?? "none"} initialTopic={initialTopic} />
  );
}
