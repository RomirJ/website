
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
      <div className="bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              "Hikaflow transformed our entire development workflow"
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              "With over 24 years in tech and 10+ years leading engineering teams, I've seen many tools come and go. Hikaflow is different - it actually delivers on its promises. Our team velocity increased dramatically while maintaining zero production incidents. The AI insights are incredibly accurate and the living documentation feature alone saves us hours every week."
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/689fe609-d028-42bc-89ba-16e25e070284.png" 
                  alt="Azhar Hussain"
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500/30"
                />
                <div className="text-left">
                  <p className="text-white font-semibold">Azhar Hussain</p>
                  <p className="text-slate-400 text-sm">CTO, ChargeUp</p>
                </div>
              </div>
              <img 
                src="/lovable-uploads/80a5197d-5241-4412-a786-6848e7e50302.png" 
                alt="ChargeUp Logo"
                className="h-8 opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
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
