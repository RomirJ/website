
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GitPullRequest, Shield, Brain, Zap, FileText, Users, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const features = [
    {
      icon: Brain,
      title: "AI Assistant",
      description: "AI assistant with full repository context featuring Standard Analysis, Senior Dev Review, Code Review, Architecture Analysis, and Release Analysis modes.",
      benefits: ["5 specialized analysis modes", "Instant architecture insights", "Expert-level guidance"],
      highlight: "Full codebase intelligence"
    },
    {
      icon: Zap,
      title: "Regression Testing",
      description: "Predict which parts of your application could break and generate targeted test cases after every merge.",
      benefits: ["80% reduction in QA time", "Prevent production issues", "Smart test generation"],
      highlight: "Predictive testing"
    },
    {
      icon: FileText,
      title: "Living Documentation",
      description: "Automatically generated and maintained documentation that evolves with your codebase, including API docs and architecture diagrams.",
      benefits: ["Always up-to-date", "API documentation", "Architecture diagrams"],
      highlight: "Auto-generated docs"
    },
    {
      icon: TrendingUp,
      title: "Executive Reporting",
      description: "Comprehensive reports for leadership with code quality trends, security metrics, and ROI visibility.",
      benefits: ["Executive dashboards", "ROI tracking", "Automated reports"],
      highlight: "Leadership visibility"
    },
    {
      icon: GitPullRequest,
      title: "PR Analysis",
      description: "Instant, intelligent pull request analysis with contextual feedback on code quality, security, and best practices.",
      benefits: ["Consistent review quality", "Zero waiting time", "Learn from team patterns"],
      highlight: "Every PR reviewed instantly"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Real-time detection of vulnerabilities, exposed secrets, and compliance violations before they reach production.",
      benefits: ["SOC 2, HIPAA compliance", "Zero-day vulnerability alerts", "Custom security rules"],
      highlight: "99.9% security coverage"
    },
    {
      icon: Users,
      title: "Team Intelligence",
      description: "Monitor engineering health, workflow bottlenecks, and team productivity with burnout prevention and performance insights.",
      benefits: ["Burnout prevention", "Workflow optimization", "Performance insights"],
      highlight: "Engineering analytics"
    },
    {
      icon: Clock,
      title: "Real-Time Bug Diagnosis",
      description: "Links production errors to exact commits that introduced them and offers AI-generated code fixes.",
      benefits: ["Error-to-commit tracing", "AI-generated fixes", "Root cause analysis"],
      highlight: "Instant error resolution"
    }
  ];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const totalSlides = Math.ceil(features.length / 3);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300 animate-pulse">
            Complete Engineering Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-500">
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

        <div className="max-w-6xl mx-auto">
          <Carousel
            ref={emblaRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full group hover:shadow-xl transition-all duration-500 border-slate-700 hover:border-emerald-500/30 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-bl-lg text-xs font-medium transition-all duration-300 group-hover:bg-green-600">
                      {feature.highlight}
                    </div>
                    <CardHeader className="pb-4 pt-12">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-xs">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-emerald-400" />
            <CarouselNext className="border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-emerald-400" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 3) === index
                    ? 'bg-emerald-500 scale-110'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in [animation-delay:800ms]">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto hover:scale-105 transition-transform duration-500 hover:border-emerald-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Development Workflow?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Join 500+ engineering teams who trust Hikaflow to maintain code quality 
              while accelerating their release cycles and preventing production issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
                onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
              >
                Try Hikaflow Free
              </button>
              <button 
                className="border border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-emerald-500/30 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
