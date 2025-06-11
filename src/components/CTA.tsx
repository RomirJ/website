
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Ship with
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Complete Confidence?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Join modern software teams using Hikaflow to eliminate delays, automate reviews, 
            and ship faster without compromising quality.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">✓</div>
              <p className="text-slate-300">Eliminate onboarding delays</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">✓</div>
              <p className="text-slate-300">Automate high-quality reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">✓</div>
              <p className="text-slate-300">Finalize releases faster</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white border-0 h-16 px-8 text-lg font-semibold group transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Book a Demo Call
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white h-16 px-8 text-lg font-semibold group transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Demo Videos
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Or visit our website to try for free</p>
            <Button 
              variant="link" 
              className="text-teal-400 hover:text-teal-300 text-lg group"
              onClick={() => window.open('https://hikaflow.com', '_blank')}
            >
              hikaflow.com
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
