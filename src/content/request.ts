import type { IconName } from "@/components/ui/Icon";

import { services, type ServiceId } from "./services";

/** Service topics a visitor can pick in the request form (`?service=` values). */
export type RequestTopicId = ServiceId | "other";

export const requestTopics: ReadonlyArray<{
  id: RequestTopicId;
  name: string;
  icon: IconName;
}> = [
  ...services.map(({ id, name, icon }) => ({ id, name, icon })),
  { id: "other", name: "Something else / not sure yet", icon: "phone" },
];

export function isRequestTopicId(
  value: string | null | undefined,
): value is RequestTopicId {
  return requestTopics.some((topic) => topic.id === value);
}

export const requestPath = (topic?: RequestTopicId) =>
  topic ? `/request/?service=${topic}` : "/request/";

export const requestSteps = [
  "Your service",
  "Your details",
  "Review & connect",
] as const;
