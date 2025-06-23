
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MessageSquare, Shield, Brain, GitPullRequest, Settings, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive overview of your repository health with real-time metrics, issue tracking, and quality trends.",
      image: "/lovable-uploads/a92ccc88-ac3d-4b26-b022-f536a5914359.png",
      features: ["PR frequency tracking", "Code quality metrics", "Issue severity distribution"]
    },
    {
      icon: MessageSquare,
      title: "AI-Powered PR Reviews",
      description: "Intelligent pull request analysis with contextual comments and automated code quality checks.",
      image: "/lovable-uploads/77ab2fa3-7309-4616-ba8a-f96f3adfa43b.png",
      features: ["Automated PR comments", "Code issue detection", "Real-time feedback"]
    },
    {
      icon: GitPullRequest,
      title: "Impact Analysis",
      description: "Predict potential breakages and generate targeted test cases based on code changes and dependencies.",
      image: "/lovable-uploads/45556d03-7548-4785-9ff1-3ecd189144e7.png",
      features: ["Risk assessment scoring", "Flow impact tracking", "Automated test generation"]
    },
    {
      icon: Settings,
      title: "Customizable Security Settings",
      description: "Configure which security issues and code quality checks Hikaflow should flag for your team.",
      image: "/lovable-uploads/893f8f32-1b52-4eb1-88ac-a5c6f2e0984a.png",
      features: ["Custom rule configuration", "Team-specific settings", "Compliance enforcement"]
    },
    {
      icon: Shield,
      title: "Security & Quality Reports",
      description: "Detailed code analysis reports covering security vulnerabilities, code quality metrics, and compliance.",
      image: "/lovable-uploads/35750031-4430-4d12-ad55-ff1323ad9707.png",
      features: ["Security scoring", "Quality metrics", "Compliance tracking"]
    },
    {
      icon: Brain,
      title: "Project Assistant",
      description: "AI assistant with full codebase context, answering technical questions and providing guidance.",
      image: "/lovable-uploads/3419483b-ef4a-46ca-bc0f-e42bf2ca9a18.png",
      features: ["Contextual Q&A", "Code explanations", "Multi-language support"]
    },
    {
      icon: FileText,
      title: "Living Documentation",
      description: "Automatically generated and maintained documentation that evolves with your codebase, keeping your team aligned.",
      image: "/lovable-uploads/c847fa1b-9644-47f3-81d8-4739428ae4f2.png",
      features: ["Auto-generated docs", "Real-time updates", "Team collaboration"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const CurrentIcon = features[currentIndex].icon;

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-500">
            See Hikaflow in Action
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent text-2xl md:text-3xl">
              Interactive Features
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our powerful interface and comprehensive analytics.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 lg:order-1">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <CurrentIcon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white hover:text-teal-300 transition-colors duration-300">
                      {features[currentIndex].title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-base mb-6 leading-relaxed">
                    {features[currentIndex].description}
                  </p>
                  <ul className="space-y-2">
                    {features[currentIndex].features.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-300 hover:text-teal-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0 animate-pulse"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
              <img 
                key={currentIndex}
                src={features[currentIndex].image} 
                alt={features[currentIndex].title}
                className="relative w-full rounded-lg shadow-2xl border border-slate-700 hover:shadow-teal-500/10 transition-all duration-500 opacity-0 animate-fade-in"
                style={{ animation: 'fade-in 0.5s ease-in-out forwards' }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-teal-400 transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-teal-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-teal-400 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const getIconLabel = (title: string) => {
                if (title === "Project Assistant") return "Assistant";
                if (title === "Living Documentation") return "Documentation";
                return title.split(' ')[0];
              };
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`p-2 rounded-lg border transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-teal-400 bg-teal-500/10'
                      : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                  }`}
                >
                  <FeatureIcon className={`h-4 w-4 mx-auto ${
                    index === currentIndex ? 'text-teal-400' : 'text-slate-400'
                  }`} />
                  <p className={`text-xs mt-1 ${
                    index === currentIndex ? 'text-teal-300' : 'text-slate-500'
                  }`}>
                    {getIconLabel(feature.title)}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm max-w-xl mx-auto hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-3 hover:text-teal-300 transition-colors duration-300">
              Ready to Experience Hikaflow?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Connect your repository in minutes and start getting intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-500/25 hover:scale-105"
                onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
              >
                Try Hikaflow Free
              </Button>
              <Button 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
                onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
