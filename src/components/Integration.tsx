
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, GitBranch, Database, MessageSquare, Scan, Settings } from "lucide-react";

const Integration = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How Hikaflow Works
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Simple 3-Step Integration
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect your repository once, and Hikaflow automatically analyzes every pull request while providing continuous insights into your codebase health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white text-center">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Connect Repository
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Link your GitHub or Bitbucket account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Secure OAuth integration with your existing development workflow
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white text-center">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Initial Analysis
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Complete codebase scan and setup
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Scan className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-slate-600">
                Hikaflow analyzes your entire repository for security, quality, and architectural insights
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white text-center">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Continuous Monitoring
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Automated PR analysis and insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-slate-600">
                Every new pull request triggers automatic analysis with intelligent comments and insights
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Two Ways to Analyze Your Code</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <GitBranch className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Continuous Integration</h4>
                    <p className="text-slate-300">Connect your GitHub/Bitbucket repository for automatic analysis of every pull request with real-time feedback and comments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Repository Analysis</h4>
                    <p className="text-slate-300">Upload any repository directly to Hikaflow for comprehensive security, quality, and documentation audits - perfect for legacy or external code.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-3">
                  <Settings className="h-5 w-5 text-teal-400" />
                  <span className="font-semibold">Zero Configuration</span>
                </div>
                <p className="text-slate-300 text-sm">No forced process changes or complex setup required</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">Instant Feedback</span>
                </div>
                <p className="text-slate-300 text-sm">Real-time analysis and comments on every pull request</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
