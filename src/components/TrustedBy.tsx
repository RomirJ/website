import { CheckCircle, Clock, Shield, Users, Zap, Target } from "lucide-react";

const TrustedBy = () => {
  const companies = [
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Azure_Logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Windows", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Microsoft_Windows_2012_logo.svg" },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "80% Faster QA",
      description: "AI-powered testing accelerates your release cycle"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5 min Setup",
      description: "Get started instantly with zero configuration"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "8.9 Impact Score",
      description: "Measurable improvement in your development workflow"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Trusted By Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted By
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Engineers from leading companies rely on our AI-powered automation
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="w-8 h-8 object-contain filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-lg font-semibold text-white">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="inline-flex p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 transition-colors mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;