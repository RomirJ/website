
import { TrendingUp, Users, Shield, Zap, GitPullRequest } from "lucide-react";

const Statistics = () => {
  const stats = [
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
      icon: Zap,
      number: "24/7",
      label: "AI Assistance",
      description: "Instant, consistent support without human bottlenecks"
    },
    {
      icon: TrendingUp,
      number: "500+",
      label: "Teams Trust Hikaflow",
      description: "Engineering teams worldwide rely on Hikaflow for confident releases"
    }
  ];

  return (
    <section id="statistics" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300 animate-pulse">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-500 leading-tight">
            Trusted by Engineering Teams
            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent leading-tight">
              Delivering Results
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See how Hikaflow transforms development workflows and accelerates software delivery 
            without compromising on quality or security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center animate-fade-in hover:scale-105 transition-transform duration-500" style={{animationDelay: `${index * 100}ms`}}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-emerald-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-3">
                  {stat.label}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-3xl mx-auto hover:scale-105 transition-transform duration-500 hover:border-emerald-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              "Hikaflow transformed our entire development workflow"
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed italic text-lg">
              "With over 24 years in tech and 10+ years leading engineering teams, I've seen many tools come and go. Hikaflow is different - it actually delivers on its promises. Our team velocity increased dramatically while maintaining zero production incidents. The AI insights are incredibly accurate and the living documentation feature alone saves us hours every week."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700 p-1 hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/a455191c-386f-4369-9022-eb5e588c83ad.png" 
                    alt="Azhar Hussain" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">Azhar Hussain</div>
                  <div className="text-slate-300 text-sm">CTO, ChargeUp</div>
                </div>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/0c0f1248-670d-40e8-8c92-e3e81037eb13.png" 
                  alt="ChargeUp Logo" 
                  className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
