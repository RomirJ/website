import { useState, useRef } from "react";
import { GitPullRequest, Shield, Brain, Zap, FileText, Users, TrendingUp, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const InteractiveFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: "AI Assistant",
      description: "AI assistant with full repository context featuring Standard Analysis, Senior Dev Review, Code Review, Architecture Analysis, and Release Analysis modes.",
      benefits: ["5 specialized analysis modes", "Instant architecture insights", "Expert-level guidance"],
      highlight: "Full codebase intelligence",
      image: "/lovable-uploads/0c0f1248-670d-40e8-8c92-e3e81037eb13.png"
    },
    {
      icon: Zap,
      title: "Regression Testing",
      description: "Predict which parts of your application could break and generate targeted test cases after every merge.",
      benefits: ["80% reduction in QA time", "Prevent production issues", "Smart test generation"],
      highlight: "Predictive testing",
      image: "/lovable-uploads/45556d03-7548-4785-9ff1-3ecd189144e7.png"
    },
    {
      icon: FileText,
      title: "Living Documentation",
      description: "Automatically generated and maintained documentation that evolves with your codebase, including API docs and architecture diagrams.",
      benefits: ["Always up-to-date", "API documentation", "Architecture diagrams"],
      highlight: "Auto-generated docs",
      image: "/lovable-uploads/77ab2fa3-7309-4616-ba8a-f96f3adfa43b.png"
    },
    {
      icon: TrendingUp,
      title: "Executive Reporting",
      description: "Comprehensive reports for leadership with code quality trends, security metrics, and ROI visibility.",
      benefits: ["Executive dashboards", "ROI tracking", "Automated reports"],
      highlight: "Leadership visibility",
      image: "/lovable-uploads/893f8f32-1b52-4eb1-88ac-a5c6f2e0984a.png"
    },
    {
      icon: GitPullRequest,
      title: "PR Analysis",
      description: "Instant, intelligent pull request analysis with contextual feedback on code quality, security, and best practices.",
      benefits: ["Consistent review quality", "Zero waiting time", "Learn from team patterns"],
      highlight: "Every PR reviewed instantly",
      image: "/lovable-uploads/9aa55a16-b492-4755-8e53-549939699d38.png"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Real-time detection of vulnerabilities, exposed secrets, and compliance violations before they reach production.",
      benefits: ["SOC 2, HIPAA compliance", "Zero-day vulnerability alerts", "Custom security rules"],
      highlight: "99.9% security coverage",
      image: "/lovable-uploads/0c0f1248-670d-40e8-8c92-e3e81037eb13.png"
    },
    {
      icon: Users,
      title: "Team Intelligence",
      description: "Monitor engineering health, workflow bottlenecks, and team productivity with burnout prevention and performance insights.",
      benefits: ["Burnout prevention", "Workflow optimization", "Performance insights"],
      highlight: "Engineering analytics",
      image: "/lovable-uploads/45556d03-7548-4785-9ff1-3ecd189144e7.png"
    },
    {
      icon: Clock,
      title: "Real-Time Bug Diagnosis",
      description: "Links production errors to exact commits that introduced them and offers AI-generated code fixes.",
      benefits: ["Error-to-commit tracing", "AI-generated fixes", "Root cause analysis"],
      highlight: "Instant error resolution",
      image: "/lovable-uploads/77ab2fa3-7309-4616-ba8a-f96f3adfa43b.png"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
            Complete Engineering Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Confident Software Delivery
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From automated PR reviews to predictive testing and engineering analytics - 
            Hikaflow provides the complete toolkit for modern software teams.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Horizontal Scrollable Feature Cards */}
          <div className="mb-12 relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            
            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
            
            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-12">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                const isSelected = selectedFeature === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedFeature(index)}
                    className={`cursor-pointer p-2 rounded-xl border transition-all duration-300 min-w-[180px] max-w-[180px] flex-shrink-0 ${
                      isSelected
                        ? 'bg-emerald-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {feature.highlight}
                    </div>
                    <div className="pt-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        <FeatureIcon className="h-5 w-5" />
                      </div>
                      <h3 className={`text-base font-bold mb-2 transition-colors duration-300 ${
                        isSelected ? 'text-emerald-400' : 'text-white'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-xs mb-2 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-slate-300">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-xs">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Image Display */}
          <div className="relative">
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
    </section>
  );
};

export default InteractiveFeatures;