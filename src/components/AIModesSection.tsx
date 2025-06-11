
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            5 Intelligent AI Modes
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Tailored to Your Needs
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unlike general-purpose AI tools, Hikaflow operates with full project context 
            and adapts to your team's specific requirements across multiple specialized modes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${mode.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <mode.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  {mode.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {mode.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-50 rounded-full px-6 py-3">
            <span className="text-slate-600">Result:</span>
            <span className="font-semibold text-slate-900">New hires become productive within minutes, resolving critical bugs and generating reports with full project context</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModesSection;
