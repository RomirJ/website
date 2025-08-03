import { CheckCircle, Clock, Shield, Users, Zap, Target } from "lucide-react";

const TrustedBy = () => {
  const companies = [
    { name: "AWS", logo: "🚀" },
    { name: "Azure", logo: "☁️" },
    { name: "Apple", logo: "🍎" },
    { name: "Zendesk", logo: "🎯" },
    { name: "Microsoft", logo: "🔷" },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Deployment",
      description: "Deploy with confidence in minutes, not hours"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Zero Critical Bugs",
      description: "AI catches every issue before it reaches production"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Productivity Boost",
      description: "Focus on innovation while AI handles the mundane"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Automation",
      description: "End-to-end process automation that just works"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Instant Onboarding",
      description: "New team members productive from day one"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Every release meets the highest standards"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Trusted By Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted By
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Engineers from leading companies rely on our AI-powered automation
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300"
            >
              <span className="text-2xl">{company.logo}</span>
              <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;