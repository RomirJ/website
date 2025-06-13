
import { TrendingUp, Users, Clock, Shield, Zap, GitPullRequest } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "80%",
      label: "Reduction in QA Time",
      description: "Teams cut manual testing cycles dramatically with predictive impact analysis"
    },
    {
      icon: Clock,
      number: "5 min",
      label: "Average Setup Time",
      description: "From connection to first AI review - no complex configuration needed"
    },
    {
      icon: Users,
      number: "90%",
      label: "Faster Onboarding",
      description: "New developers become productive in minutes, not months"
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Security Coverage",
      description: "Comprehensive vulnerability detection across your entire codebase"
    },
    {
      icon: GitPullRequest,
      number: "24/7",
      label: "AI Code Reviews",
      description: "Instant, consistent pull request analysis without human bottlenecks"
    },
    {
      icon: Zap,
      number: "500+",
      label: "Teams Trust Hikaflow",
      description: "Engineering teams worldwide rely on Hikaflow for confident releases"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/30 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-emerald-700 text-sm font-medium mb-6">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Engineering Teams
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Delivering Results
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how Hikaflow transforms development workflows and accelerates software delivery 
            without compromising on quality or security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-200">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {stat.label}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              "Hikaflow eliminated our deployment anxiety"
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed italic">
              "We went from nerve-wracking Friday deployments to confident daily releases. The AI catches critical issues we would have missed, and our team velocity has doubled while maintaining zero production incidents."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Sarah Chen</div>
                <div className="text-slate-600 text-sm">VP Engineering, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
