import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import Footer from "./components/footer";
import IdeaSection from "./components/idea-section";
import RulesSection from "./components/rules-section";
import CriteriaSection from "./components/criteria-section";
import PartnerSection from "./components/partner-section";
import FAQSection from "./components/faq-section";
import PrizeSection from "./components/prize-section";
import TimelineSection from "./components/timeline-section";

export default function Home() {
  return (
    <div className="bg-secondary1 min-h-full overflow-y-scroll">
      <Navbar />
      <Separator className="bg-gray-800" />
      <IdeaSection />
      <Separator className="bg-gray-800" />
      <RulesSection />
      <Separator className="bg-gray-800" />
      <CriteriaSection />
      <Separator className="bg-gray-800" />
      <FAQSection />
      <Separator className="bg-gray-800" />
      <TimelineSection />
      <Separator className="bg-gray-800" />
      <PrizeSection />
      <Separator className="bg-gray-800" />
      <PartnerSection />
      <Separator className="bg-gray-800" />
      <Footer />
    </div>
  );
}
