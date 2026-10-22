import { Eyebrow } from "@/components/ui/Eyebrow";
import { formatStep } from "@/lib/format";

const steps = [
  {
    title: "Tell us what’s going on.",
    text: "Choose a service topic and share your vehicle details. Not sure what’s wrong? Describe what you’ve noticed.",
  },
  {
    title: "Start the conversation.",
    text: "Review your request, then open it in your email app. Prefer to talk? Call the shop directly.",
  },
  {
    title: "Confirm the plan.",
    text: "Discuss the work, pricing and timing with the shop. A request becomes an appointment only after confirmation.",
  },
];

/** "How it works" steps; the `#process` anchor is linked from the main nav. */
export function ProcessSection() {
  return (
    <section className="process container" id="process">
      <div className="section-heading">
        <div>
          <Eyebrow>03 / A SIMPLE WAY TO START</Eyebrow>
          <h2>
            Less guesswork.
            <br />
            <em>A clear next step.</em>
          </h2>
        </div>
        <p>
          A few details. A real conversation.
          <br />
          Let’s start with your vehicle.
        </p>
      </div>
      <div className="process-grid">
        {steps.map((step, index) => (
          <article key={step.title}>
            <span>{formatStep(index)}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
