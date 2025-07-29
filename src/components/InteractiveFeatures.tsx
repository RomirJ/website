import { useState } from "react";
import { Rocket, Clock, Search, Zap, Settings } from "lucide-react";

const InteractiveFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Rocket,
      title: "2x Faster Releases",
      description: "Ship more often with full confidence",
      details: "Automated testing and quality assurance ensures your releases are always production-ready, allowing teams to deploy multiple times per day without fear of breaking changes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Clock,
      title: "Onboard to Ship in 30 Min",
      description: "New devs contribute on Day 1",
      details: "Comprehensive onboarding automation and intelligent code assistance gets new developers productive immediately, with full context of your codebase and workflows.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Search,
      title: "All Issues Caught Pre-Merge",
      description: "Bugs, security, and complexity flagged early",
      details: "Advanced static analysis and AI-powered code review catches potential issues before they enter your main branch, preventing production incidents.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: "80% Faster QA",
      description: "Automated testing and quality assurance",
      details: "Intelligent test generation and automated quality checks reduce manual QA time while improving coverage and reliability.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Settings,
      title: "5 min Setup",
      description: "Quick integration with existing workflows",
      details: "Simple OAuth connection with your repositories gets you up and running in minutes, with no configuration or installation required.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the
            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Hikaflow Advantage
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered platform transforms your development workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Boxes */}
            <div className="space-y-4 order-2 lg:order-1">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                const isSelected = selectedFeature === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedFeature(index)}
                    className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-emerald-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        <FeatureIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                          isSelected ? 'text-emerald-400' : 'text-white'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-slate-300 text-sm mb-2">
                          {feature.description}
                        </p>
                        {isSelected && (
                          <p className="text-slate-400 text-sm leading-relaxed animate-fade-in">
                            {feature.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-500">
                <img
                  key={selectedFeature}
                  src={features[selectedFeature].image}
                  alt={features[selectedFeature].title}
                  className="w-full h-80 object-cover rounded-lg shadow-2xl opacity-0 animate-fade-in"
                  style={{ animation: 'fade-in 0.5s ease-in-out forwards' }}
                />
                <div className="absolute top-8 left-8 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {features[selectedFeature].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;