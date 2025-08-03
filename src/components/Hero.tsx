
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, CheckCircle, Rocket, Clock, Search } from "lucide-react";
import { withBase } from "@/lib/paths";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-8">
          {/* Centered Content */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-3 text-emerald-400 text-lg font-medium">
              <CheckCircle className="h-5 w-5 mr-2" />
              Trusted by 500+ Teams
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent leading-relaxed py-1 text-4xl md:text-5xl">
                  On-Demand AI Engineer
                </span>
                for Confident Releases!
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                We help Engineering Leaders replace manual, time-consuming, and risky processes with e2e AI-powered automation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 h-12 text-base font-semibold group transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:scale-105" onClick={() => window.location.href = '/waitlist'}>
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Join Waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400 h-12 text-base font-semibold group transition-all duration-300 hover:scale-105" onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}>
                <Calendar className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Try One Month For Free
              </Button>
            </div>

            <p className="text-slate-400 text-xs">
              No credit card required • 5 min setup • See results immediately
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowRight className="h-6 w-6 text-slate-400 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
