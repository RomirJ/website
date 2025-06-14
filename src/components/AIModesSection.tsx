
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, UserCheck, Search, Building, GitBranch } from "lucide-react";

const AIModesSection = () => {
  const modes = [
    {
      icon: Search,
      title: "Standard Analysis",
      description: "Understand implementation details, logic, or code flows",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UserCheck,
      title: "Senior Developer Review",
      description: "Receive best-practice insights and performance guidance",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Code Review Mode",
      description: "Audit code quality, security risks, and maintainability issues",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Building,
      title: "Architecture Analysis",
      description: "Explore system design, dependencies, and scalability",
      color: "from-green-500 to-green-600"
    },
    {
      icon: GitBranch,
      title: "Release Analysis",
      description: "Understand change history and assess release risk",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="ai-modes" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-500">
            5 Intelligent AI Modes
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Tailored to Your Needs
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Unlike general-purpose AI tools, Hikaflow operates with full project context 
            and adapts to your team's specific requirements across multiple specialized modes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-emerald-500/30 bg-slate-800/50 backdrop-blur-sm animate-fade-in hover:scale-105" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${mode.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <mode.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {mode.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {mode.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
            <span className="text-slate-300">Result:</span>
            <span className="font-semibold text-white">New hires become productive within minutes, resolving critical bugs and generating reports with full project context</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModesSection;
