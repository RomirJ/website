
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, CheckCircle, Rocket, Clock, Search } from "lucide-react";
import { withBase } from "@/lib/paths";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center min-h-screen justify-center py-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 text-emerald-400 text-xl font-medium">
            <CheckCircle className="h-6 w-6 mr-3" />
            Trusted by 500+ Teams
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your On-Demand
              <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent leading-tight py-2">
                AI Engineer
              </span>
              for Confident Releases
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              AI-powered assistant for fast-moving teams. Ship quickly without compromising quality.
            </p>
          </div>

          {/* New KPI Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-4xl w-full">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="h-5 w-5 text-emerald-400" />
                <div className="text-emerald-400 font-bold text-base">2x Faster Releases</div>
              </div>
              <p className="text-slate-300 text-sm">Ship more often with full confidence</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                <div className="text-emerald-400 font-bold text-base">Onboard to Ship in 30 Min</div>
              </div>
              <p className="text-slate-300 text-sm">New devs contribute on Day 1</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Search className="h-5 w-5 text-emerald-400" />
                <div className="text-emerald-400 font-bold text-base">All Issues Caught Pre-Merge</div>
              </div>
              <p className="text-slate-300 text-sm">Bugs, security, and complexity flagged early</p>
            </div>
          </div>

          {/* Existing Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl w-full">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-2xl mb-1">80%</div>
              <p className="text-slate-300 text-sm">Faster QA</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-2xl mb-1">5 min</div>
              <p className="text-slate-300 text-sm">Setup</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 h-14 text-lg font-semibold group transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:scale-105 px-8" onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}>
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start 30 Day Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400 h-14 text-lg font-semibold group transition-all duration-300 hover:scale-105 px-8" onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}>
            <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Demo
            </Button>
          </div>

          <p className="text-slate-400 text-base">
            No credit card required • 5 min setup • See results immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
