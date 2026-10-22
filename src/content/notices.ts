import type { RequestTopicId } from "./request";

/** Options for the homepage "Start with what you notice" finder. */
export type Notice = {
  id: "light" | "sound" | "routine" | "other";
  option: string;
  label: string;
  title: string;
  description: string;
  tags: readonly string[];
  topic: RequestTopicId;
};

export const notices: readonly Notice[] = [
  {
    id: "light",
    option: "A dashboard light",
    label: "LET’S START WITH THE DETAILS",
    title: "Tell us about the light.",
    description:
      "Which symbol do you see? When did it first appear? Share whether you’ve noticed a change in the way the vehicle runs, too.",
    tags: ["Warning symbol", "When it appeared", "Vehicle details"],
    topic: "diagnostics",
  },
  {
    id: "sound",
    option: "A new sound or feeling",
    label: "YOU KNOW YOUR EVERYDAY DRIVE",
    title: "What sounds or feels different?",
    description:
      "Describe the sound or feeling in your own words. Does it happen when starting, stopping, turning or at a particular speed? That context helps start the conversation.",
    tags: ["What you notice", "When it happens", "Recent changes"],
    topic: "other",
  },
  {
    id: "routine",
    option: "Time for routine care",
    label: "LOOKING AFTER THE MILES AHEAD",
    title: "Let’s talk about upkeep.",
    description:
      "Share the work you have in mind, your current mileage and any recent service. The shop will confirm service availability and discuss the next step.",
    tags: ["Current mileage", "Last service", "Work requested"],
    topic: "maintenance",
  },
  {
    id: "other",
    option: "Something else",
    label: "NO TECHNICAL TERMS REQUIRED",
    title: "Your words are a good start.",
    description:
      "Tell us what brought you here. A question, a repair you’re considering, or a concern you can’t quite describe. Start with what you know about your vehicle.",
    tags: ["Your question", "Vehicle details", "How to reach you"],
    topic: "other",
  },
];
