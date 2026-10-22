import type { StaticImageData } from "next/image";

import brakesImage from "@/assets/images/brakes.webp";
import diagnosticsImage from "@/assets/images/diagnostics.webp";
import maintenanceImage from "@/assets/images/maintenance.webp";
import type { IconName } from "@/components/ui/Icon";

export type ServiceId = "diagnostics" | "brakes" | "maintenance";

export type Service = {
  id: ServiceId;
  number: string;
  name: string;
  shortName: string;
  icon: IconName;
  eyebrow: string;
  /** Detail-page headline, one entry per line. */
  headline: readonly [string, string];
  description: string;
  image: StaticImageData;
  imageAlt: string;
  topics: readonly string[];
  helpfulDetails: readonly string[];
  body: string;
};

export const services: readonly Service[] = [
  {
    id: "diagnostics",
    number: "01",
    name: "Diagnostics & driveability",
    shortName: "Diagnostics",
    icon: "bolt",
    eyebrow: "WHEN SOMETHING FEELS DIFFERENT",
    headline: ["A warning light.", "A starting point."],
    description:
      "A dashboard light, a rough idle, or a change in the way your car runs. Start with what you’ve noticed.",
    image: diagnosticsImage,
    imageAlt:
      "Illustrative technician using a diagnostic tablet beside an open engine bay",
    topics: [
      "Dashboard warning lights",
      "Changes in engine performance",
      "Starting or electrical concerns",
    ],
    helpfulDetails: [
      "Which warning light is on, and when it appeared",
      "Whether the issue is constant or comes and goes",
      "Your vehicle year, make, model and mileage",
    ],
    body: "You don’t need to know the name of a part to start a conversation. Describe what has changed and when it happens. Those details help the shop discuss an appropriate next step for your vehicle.",
  },
  {
    id: "brakes",
    number: "02",
    name: "Brakes & stopping",
    shortName: "Brakes",
    icon: "wheel",
    eyebrow: "FOR THE STOPS ALONG THE WAY",
    headline: ["Every drive", "has its stops."],
    description:
      "A new sound or a change in braking feel? Tell us what’s happening and discuss an inspection with the shop.",
    image: brakesImage,
    imageAlt:
      "Illustrative close-up of a mechanic inspecting a brake rotor with the wheel removed",
    topics: [
      "Brake noise or vibration",
      "Changes in pedal feel",
      "Brake inspection enquiries",
    ],
    helpfulDetails: [
      "When you notice the sound or change in feel",
      "Any recent repairs or service history",
      "Your vehicle year, make, model and mileage",
    ],
    body: "A clear description is a useful first step. Let the shop know what you’re noticing, when it started, and whether anything has recently changed. Confirm inspection availability directly with 311 Auto Care.",
  },
  {
    id: "maintenance",
    number: "03",
    name: "Maintenance & upkeep",
    shortName: "Maintenance",
    icon: "gear",
    eyebrow: "LOOKING AFTER THE EVERYDAY",
    headline: ["The little things.", "The miles ahead."],
    description:
      "An oil service, a maintenance question, or a vehicle you want to look after. Let’s talk about what’s next.",
    image: maintenanceImage,
    imageAlt:
      "Illustrative mechanic carefully pouring engine oil through a funnel",
    topics: [
      "Oil and fluid service enquiries",
      "Routine maintenance questions",
      "Upcoming vehicle care",
    ],
    helpfulDetails: [
      "The last service date and approximate mileage",
      "Any available maintenance records",
      "The work you would like to discuss",
    ],
    body: "A little context makes a better service conversation. Share your mileage, recent maintenance and the work you have in mind. The shop can confirm which services are available and discuss scheduling.",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export const servicePath = (id: ServiceId) => `/services/${id}/`;
