
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIModesSection from "@/components/AIModesSection";
import ProductDemo from "@/components/ProductDemo";
import Statistics from "@/components/Statistics";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="ai-modes">
        <AIModesSection />
      </div>
      <div id="demo">
        <ProductDemo />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="integration">
        <Integration />
      </div>
      <div id="cta">
        <CTA />
      </div>
    </div>
  );
};

export default Index;
