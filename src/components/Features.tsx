
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitPullRequest, Shield, Brain, Zap, FileText, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GitPullRequest,
      title: "AI-Powered PR Reviews",
      description: "Instant, intelligent pull request analysis with contextual feedback on code quality, security, and best practices.",
      benefits: ["Consistent review quality", "Zero waiting time", "Learn from team patterns"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Real-time detection of vulnerabilities, exposed secrets, and compliance violations before they reach production.",
      benefits: ["SOC 2, HIPAA compliance", "Zero-day vulnerability alerts", "Custom security rules"]
    },
    {
      icon: Brain,
      title: "Codebase Intelligence",
      description: "AI assistant with full repository context that answers technical questions and guides development decisions.",
      benefits: ["5 specialized analysis modes", "Instant architecture insights", "Expert-level guidance"]
    },
    {
      icon: Zap,
      title: "Impact Analysis",
      description: "Predict which parts of your application could break and generate targeted test cases after every merge.",
      benefits: ["80% reduction in QA time", "Prevent production issues", "Smart test generation"]
    },
    {
      icon: FileText,
      title: "Living Documentation",
      description: "Automatically generated and maintained documentation that evolves with your codebase.",
      benefits: ["Always up-to-date", "API documentation", "Architecture diagrams"]
    },
    {
      icon: Users,
      title: "Team Intelligence",
      description: "Monitor engineering health, workflow bottlenecks, and team productivity without micromanagement.",
      benefits: ["Burnout prevention", "Workflow optimization", "Performance insights"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Confident Software Delivery
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hikaflow integrates seamlessly into your existing workflow, providing intelligent automation 
            and insights that help your team ship better code faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-teal-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Development Workflow?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Join forward-thinking engineering teams who trust Hikaflow to maintain code quality 
              while accelerating their release cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button 
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-500/25"
                onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
              >
                See It In Action
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
