
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, FileText, BarChart3, GitPullRequest, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Assistant with Full Context",
      description: "Your embedded senior engineer that understands your entire codebase. Get instant answers with 5 intelligent modes: Standard Analysis, Senior Developer Review, Code Review, Architecture Analysis, and Release Analysis.",
      highlight: "5 Intelligent Modes"
    },
    {
      icon: GitPullRequest,
      title: "Impact Analysis & Regression Testing",
      description: "After every merge, identify which parts are likely to break and generate precise test cases. Reduce manual QA cycles by up to 80% and finalize releases in minutes.",
      highlight: "80% QA Reduction"
    },
    {
      icon: FileText,
      title: "Intelligent Documentation",
      description: "Automatically generate contextual documentation for complex logic, APIs, and business flows. Keep documentation always up-to-date without manual effort.",
      highlight: "Always Current"
    },
    {
      icon: Shield,
      title: "Security & Quality Audits",
      description: "Comprehensive codebase scanning for vulnerabilities, code smells, and complexity issues. Upload any repository for full audits following industry standards.",
      highlight: "Full Security Scan"
    },
    {
      icon: BarChart3,
      title: "Engineering Intelligence",
      description: "Visual workflow mapping, real-time insights into review latency, churn, and team health. Stay informed without micromanagement.",
      highlight: "Team Health Monitoring"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Works automatically with GitHub and Bitbucket PRs. Every pull request gets scanned with intelligent comments. No configuration overhead.",
      highlight: "Zero Setup"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything Your Team Needs to
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Ship with Confidence
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From impact-based regression testing to living documentation and expert-level code guidance, 
            Hikaflow helps you deliver software with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full">
                    <span className="text-sm font-medium text-teal-700">{feature.highlight}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
