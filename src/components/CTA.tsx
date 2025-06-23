
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 text-emerald-400 text-sm font-medium mb-8 animate-pulse">
            <Shield className="w-4 h-4 mr-2" />
            Ready to Ship with Complete Confidence?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Stop worrying about breaking production.
            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mt-2">
              Start shipping multiple times a day with AI-powered confidence
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who've eliminated deployment anxiety and accelerated their release cycles without compromising on quality or security.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
            >
              Try Hikaflow Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-emerald-500/30 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
            >
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Setup</h3>
              <p className="text-slate-400 text-sm">Connect your repos and get AI reviews in under 5 minutes</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bank-Grade Security</h3>
              <p className="text-slate-400 text-sm">SOC 2 compliant with enterprise-grade data protection</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Team-First Design</h3>
              <p className="text-slate-400 text-sm">Built for collaboration with zero learning curve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
