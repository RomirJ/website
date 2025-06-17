
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductDemo from "@/components/ProductDemo";
import CollapsibleSections from "@/components/CollapsibleSections";
import CTA from "@/components/CTA";
import ContactUs from "@/components/ContactUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="demo">
        <ProductDemo />
      </div>
      <div id="features">
        <CollapsibleSections />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default Index;
