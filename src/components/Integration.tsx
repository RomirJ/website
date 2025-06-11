
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, GitBranch, Upload, MessageSquare } from "lucide-react";

const Integration = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Seamless Integration
            <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Zero Configuration Overhead
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Works automatically with your existing workflow. No forced process changes. Just connect and go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GitBranch className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                GitHub & Bitbucket
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Automatic PR scanning and intelligent comments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Smart PR Comments</p>
                  <p className="text-sm text-slate-600">Contextual feedback on code quality, security, and best practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GitBranch className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Real-time Analysis</p>
                  <p className="text-sm text-slate-600">Every pull request analyzed instantly upon creation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Repository Upload
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Manual upload for legacy and external code
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Upload className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Drag & Drop</p>
                  <p className="text-sm text-slate-600">Upload ZIP files or point to public repositories</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Full Code Audit</p>
                  <p className="text-sm text-slate-600">Complete security, quality, and documentation analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Integration;
