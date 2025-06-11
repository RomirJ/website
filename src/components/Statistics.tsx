
import { TrendingUp, Clock, Users, CheckCircle } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "80%",
      label: "QA Cycle Reduction",
      description: "Less manual testing needed"
    },
    {
      icon: Clock,
      number: "Minutes",
      label: "Not Days",
      description: "Release finalization time"
    },
    {
      icon: Users,
      number: "Minutes",
      label: "Onboarding Time",
      description: "For new hires to contribute"
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "PR Coverage",
      description: "Automated review analysis"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Measurable Impact on
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Your Team's Velocity
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See the difference Hikaflow makes in your development workflow with concrete metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-teal-400 mb-2">
                {stat.label}
              </div>
              <div className="text-slate-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
