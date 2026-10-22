import { siteConfig } from "@/config/site";
import { requestTopics } from "@/content/request";

export type RequestSummary = {
  rows: ReadonlyArray<readonly [label: string, value: string]>;
  /** Plain-text enquiry, used for the email body and the copy button. */
  text: string;
  /** Pre-filled `mailto:` link addressed to the shop. */
  mailtoHref: string;
};

const field = (data: FormData, name: string) => String(data.get(name) ?? "");

/**
 * Turns the request form's values into a reviewable summary and email draft.
 * Nothing is sent anywhere: the visitor chooses whether to email it.
 */
export function summarizeRequest(data: FormData): RequestSummary {
  const topic = requestTopics.find((t) => t.id === field(data, "service"));
  const year = field(data, "year");
  const make = field(data, "make").trim();
  const model = field(data, "model").trim();

  const rows = [
    ["Service", topic?.name ?? ""],
    ["Vehicle", [year, make, model].join(" ")],
    ["Mileage", field(data, "mileage").trim() || "Not provided"],
    ["Concern", field(data, "concern").trim()],
    ["Name", field(data, "name").trim()],
    ["Email", field(data, "email").trim()],
    ["Phone", field(data, "phone").trim() || "Not provided"],
  ] as const;

  const text = [
    `Service enquiry for ${siteConfig.legalName}`,
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "Please contact me to discuss service availability, pricing and timing. This is an enquiry, not a confirmed appointment.",
  ].join("\n\n");

  const subject = `Service enquiry — ${year} ${make} ${model}`;
  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  return { rows, text, mailtoHref };
}
