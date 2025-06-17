
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Features from "./Features";
import AIModesSection from "./AIModesSection";
import Statistics from "./Statistics";
import Integration from "./Integration";

const CollapsibleSections = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    {
      id: "features",
      title: "Core Features",
      subtitle: "Discover what makes Hikaflow powerful",
      component: <Features />
    },
    {
      id: "ai-modes",
      title: "AI Capabilities",
      subtitle: "Explore our intelligent automation",
      component: <AIModesSection />
    },
    {
      id: "statistics",
      title: "Performance Metrics",
      subtitle: "See the impact in numbers",
      component: <Statistics />
    },
    {
      id: "integration",
      title: "Seamless Integration",
      subtitle: "Connect with your existing tools",
      component: <Integration />
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Hikaflow's Capabilities
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Click to expand sections and learn more about our features
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.id);
            
            return (
              <div key={section.id} className="border border-slate-700 rounded-xl bg-slate-800/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-emerald-500/30">
                <Button
                  variant="ghost"
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {section.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {section.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 text-sm font-medium">
                      {isOpen ? 'Collapse' : 'Expand'}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-emerald-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-emerald-400 transition-transform duration-300" />
                    )}
                  </div>
                </Button>
                
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-slate-700/50">
                    {section.component}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Access Buttons */}
        <div className="mt-12 text-center">
          <div className="inline-flex space-x-2 bg-slate-800/50 rounded-full p-2 border border-slate-700">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={openSections.includes(section.id) ? "default" : "ghost"}
                size="sm"
                onClick={() => toggleSection(section.id)}
                className={`rounded-full transition-all duration-300 ${
                  openSections.includes(section.id)
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-300 hover:text-emerald-400'
                }`}
              >
                {section.title.split(' ')[0]}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSections;
