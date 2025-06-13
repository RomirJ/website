
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MessageSquare, Shield, Brain, GitPullRequest, Settings, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDemo = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive overview of your repository health with real-time metrics, issue tracking, and quality trends.",
      image: "/lovable-uploads/a92ccc88-ac3d-4b26-b022-f536a5914359.png",
      features: ["PR frequency tracking", "Code quality metrics", "Issue severity distribution"]
    },
    {
      icon: MessageSquare,
      title: "AI-Powered PR Reviews",
      description: "Intelligent pull request analysis with contextual comments and automated code quality checks.",
      image: "/lovable-uploads/77ab2fa3-7309-4616-ba8a-f96f3adfa43b.png",
      features: ["Automated PR comments", "Code issue detection", "Real-time feedback"]
    },
    {
      icon: GitPullRequest,
      title: "Impact Analysis",
      description: "Predict potential breakages and generate targeted test cases based on code changes and dependencies.",
      image: "/lovable-uploads/45556d03-7548-4785-9ff1-3ecd189144e7.png",
      features: ["Risk assessment scoring", "Flow impact tracking", "Automated test generation"]
    },
    {
      icon: Shield,
      title: "Security & Quality Reports",
      description: "Detailed code analysis reports covering security vulnerabilities, code quality metrics, and compliance.",
      image: "/lovable-uploads/35750031-4430-4d12-ad55-ff1323ad9707.png",
      features: ["Security scoring", "Quality metrics", "Compliance tracking"]
    },
    {
      icon: Brain,
      title: "Project Assistant",
      description: "AI assistant with full codebase context, answering technical questions and providing guidance.",
      image: "/lovable-uploads/3419483b-ef4a-46ca-bc0f-e42bf2ca9a18.png",
      features: ["Contextual Q&A", "Code explanations", "Multi-language support"]
    },
    {
      icon: Settings,
      title: "Customizable Security Settings",
      description: "Configure which security issues and code quality checks Hikaflow should flag for your team.",
      image: "/lovable-uploads/bade8b73-380b-4272-86d3-2cf66be78466.png",
      features: ["Custom rule configuration", "Team-specific settings", "Compliance enforcement"]
    },
    {
      icon: FileText,
      title: "Living Documentation",
      description: "Automatically generated and maintained documentation that evolves with your codebase, keeping your team aligned.",
      image: "/lovable-uploads/c847fa1b-9644-47f3-81d8-4739428ae4f2.png",
      features: ["Auto-generated docs", "Real-time updates", "Team collaboration"]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-500">
            See Hikaflow in Action
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Real Dashboard Screenshots
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get a glimpse of Hikaflow's powerful interface and comprehensive analytics that help teams ship better code faster.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in hover:scale-105 transition-transform duration-500`} style={{animationDelay: `${index * 200}ms`}}>
              <div className="flex-1">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white hover:text-teal-300 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300 hover:text-teal-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0 animate-pulse"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="relative w-full rounded-lg shadow-2xl border border-slate-700 hover:shadow-teal-500/10 transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto hover:scale-105 transition-transform duration-500">
            <h3 className="text-3xl font-bold text-white mb-4 hover:text-teal-300 transition-colors duration-300">
              Ready to Experience Hikaflow?
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Connect your repository in minutes and start getting intelligent insights into your codebase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-500/25 hover:scale-105 h-12"
                onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
              >
                Try Hikaflow Free
              </Button>
              <Button 
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-500/25 hover:scale-105 h-12"
                onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
              >
                Watch Demo Video
              </Button>
              <Button 
                variant="outline"
                className="border border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 h-12"
                onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
