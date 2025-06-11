
import { TrendingUp, Users, Clock, Shield } from "lucide-react";

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
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/30 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Engineering Teams
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Delivering Results
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how Hikaflow transforms development workflows and accelerates software delivery 
            without compromising on quality or security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-200">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
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
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              "Hikaflow transformed how our team ships code"
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed italic">
              "We went from spending days on manual code reviews and testing to shipping multiple times a day 
              with complete confidence. The AI catches issues we would have missed, and new team members 
              are productive from day one."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Engineering Lead</div>
                <div className="text-slate-600 text-sm">Fast-Growing SaaS Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
