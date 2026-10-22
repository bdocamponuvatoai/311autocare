import { CareSection } from "@/components/home/CareSection";
import { FinderSection } from "@/components/home/FinderSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LocalSection } from "@/components/home/LocalSection";
import { QuickStrip } from "@/components/home/QuickStrip";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickStrip />
      <ServicesOverview />
      <CareSection />
      <FinderSection />
      <ProcessSection />
      <LocalSection />
      <FaqSection />
      <ClosingCta />
    </>
  );
}
