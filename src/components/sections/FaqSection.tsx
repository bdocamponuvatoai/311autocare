import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { siteConfig } from "@/config/site";
import { faqs } from "@/content/faq";

export function FaqSection() {
  return (
    <section className="faq-section container">
      <div>
        <Eyebrow>A FEW GOOD QUESTIONS</Eyebrow>
        <h2>
          Before you
          <br />
          <em>head our way.</em>
        </h2>
        <TextLink href={siteConfig.phone.href}>Talk to the shop</TextLink>
      </div>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <span />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
