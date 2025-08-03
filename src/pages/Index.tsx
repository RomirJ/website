
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProductDemo from "@/components/ProductDemo";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Integration from "@/components/Integration";
import CollapsibleSections from "@/components/CollapsibleSections";
import CTA from "@/components/CTA";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
      <div id="demo">
        <ProductDemo />
      </div>
      <div id="features">
        <Features />
      </div>
      <Statistics />
      <Integration />
      <div id="capabilities">
        <CollapsibleSections />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
