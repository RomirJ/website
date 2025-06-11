
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, GitBranch, Zap, ArrowRight } from "lucide-react";

const Integration = () => {
  const steps = [
    {
      icon: Github,
      title: "Connect Your Repository",
      description: "Link your GitHub or Bitbucket account to Hikaflow in seconds. No complex setup or configuration required.",
      details: "Secure OAuth integration with read-only access to your repositories"
    },
    {
      icon: GitBranch,
      title: "Select Your Repos",
      description: "Choose which repositories you want Hikaflow to monitor and analyze. You maintain full control over access.",
      details: "Fine-grained permissions let you control exactly what Hikaflow can see"
    },
    {
      icon: Zap,
      title: "Instant AI Analysis",
      description: "Hikaflow immediately scans your codebase and begins providing intelligent insights on every new pull request.",
      details: "Complete codebase analysis typically completes within minutes"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/30 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Started in
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Under 5 Minutes
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hikaflow integrates seamlessly with your existing workflow. Connect your repositories 
            and start getting AI-powered insights immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-white border-slate-200 hover:border-teal-200 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-teal-600 font-medium">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-teal-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              No Installation. No Configuration. Just Results.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Once connected, Hikaflow automatically analyzes every pull request, providing instant feedback 
              and insights. Your team can continue using their existing tools and workflows.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 border border-teal-100">
                <h4 className="font-semibold text-slate-900 mb-2">GitHub Integration</h4>
                <p className="text-sm text-slate-600">Seamless PR comments and status checks</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-100">
                <h4 className="font-semibold text-slate-900 mb-2">Bitbucket Support</h4>
                <p className="text-sm text-slate-600">Full compatibility with Bitbucket workflows</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-100">
                <h4 className="font-semibold text-slate-900 mb-2">Repository Upload</h4>
                <p className="text-sm text-slate-600">Analyze any codebase without Git integration</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-500/25"
                onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
              >
                Start Free Trial
              </button>
              <button 
                className="border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
