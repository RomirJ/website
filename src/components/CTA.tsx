
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play, CheckCircle, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/f88f9ca8-439a-47e0-9636-fd54f124efe5.png" 
              alt="Hikaflow Logo" 
              className="h-12 w-auto opacity-90"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            Join 500+ Teams Shipping with Confidence
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Ship with
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Complete Confidence?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Stop worrying about breaking production. Start shipping multiple times a day 
            with AI-powered confidence and zero deployment anxiety.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/30 transition-all">
              <div className="text-3xl font-bold text-emerald-400 mb-2">80%</div>
              <div className="text-slate-300">Reduction in QA Time</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/30 transition-all">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5 min</div>
              <div className="text-slate-300">Setup Time</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/30 transition-all">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-300">AI Code Reviews</div>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
              <span>Instant PR reviews with full context</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
              <span>Predictive impact analysis</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
              <span>Real-time security scanning</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
              <span>Auto-generated documentation</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
              <span>5-mode AI codebase assistant</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
              <span>Engineering health monitoring</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 h-16 text-lg font-semibold group transition-all duration-300 shadow-xl shadow-emerald-500/25"
              onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Free Trial Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white h-16 text-lg font-semibold group transition-all duration-300"
              onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Personal Demo
            </Button>
          </div>

          <p className="text-slate-400 text-sm">
            No credit card required • Connect GitHub/Bitbucket in 5 minutes • See results immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
