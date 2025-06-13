
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitPullRequest, Shield, Brain, Zap, FileText, Users, TrendingUp, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GitPullRequest,
      title: "AI-Powered PR Reviews",
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
      icon: Brain,
      title: "5-Mode AI Assistant",
      description: "AI assistant with full repository context featuring Standard Analysis, Senior Dev Review, Code Review, Architecture Analysis, and Release Analysis modes.",
      benefits: ["5 specialized analysis modes", "Instant architecture insights", "Expert-level guidance"],
      highlight: "Full codebase intelligence"
    },
    {
      icon: Zap,
      title: "Impact Analysis",
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
      icon: Users,
      title: "Team Intelligence",
      description: "Monitor engineering health, workflow bottlenecks, and team productivity with burnout prevention and performance insights.",
      benefits: ["Burnout prevention", "Workflow optimization", "Performance insights"],
      highlight: "Engineering analytics"
    },
    {
      icon: TrendingUp,
      title: "Executive Reporting",
      description: "Comprehensive reports for leadership with code quality trends, security metrics, and ROI visibility.",
      benefits: ["Executive dashboards", "ROI tracking", "Automated reports"],
      highlight: "Leadership visibility"
    },
    {
      icon: Clock,
      title: "Real-Time Bug Diagnosis",
      description: "Links production errors to exact commits that introduced them and offers AI-generated code fixes.",
      benefits: ["Error-to-commit tracing", "AI-generated fixes", "Root cause analysis"],
      highlight: "Instant error resolution"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-emerald-700 text-sm font-medium mb-6">
            Complete Engineering Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Confident Software Delivery
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From automated PR reviews to predictive testing and engineering analytics - 
            Hikaflow provides the complete toolkit for modern software teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-emerald-200 bg-white/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 rounded-bl-lg text-xs font-medium">
                {feature.highlight}
              </div>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Development Workflow?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Join 500+ engineering teams who trust Hikaflow to maintain code quality 
              while accelerating their release cycles and preventing production issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25"
                onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
              >
                Start Free Trial
              </button>
              <button 
                className="border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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
