
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import Statistics from "@/components/Statistics";
import FAQSection from "@/components/FAQSection";
import ContactUs from "@/components/ContactUs";
import StillHaveQuestions from "@/components/StillHaveQuestions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedCompanies />
      <div id="demo">
        <InteractiveFeatures />
      </div>
      <Statistics />
      <StillHaveQuestions />
      <div id="contact">
        <ContactUs />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
