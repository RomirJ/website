
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, CheckCircle } from "lucide-react";
import { withBase } from "@/lib/paths";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center min-h-screen py-12">
          {/* Left Column - Content (smaller, 2/5 width) */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-2 text-emerald-400 text-xs font-medium animate-pulse">
              <CheckCircle className="h-3 w-3 mr-2" />
              Trusted by 500+ Teams
            </div>

            {/* Main Headline */}
            <div className="animate-fade-in [animation-delay:200ms]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Your On-Demand
                <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent animate-pulse leading-relaxed py-1 text-4xl md:text-5xl">
                  AI Engineer
                </span>
                for Confident Releases
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                AI-powered assistant for fast-moving teams. Ship quickly without compromising quality.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 animate-fade-in [animation-delay:400ms]">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-base mb-1">80%</div>
                <p className="text-slate-300 text-xs">Faster QA</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-base mb-1">5 min</div>
                <p className="text-slate-300 text-xs">Setup</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 h-12 text-base font-semibold group transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:scale-105" onClick={() => window.open('https://app.hikaflow.com/', '_blank')}>
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Try Free Now
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400 h-12 text-base font-semibold group transition-all duration-300 hover:scale-105" onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}>
                <Calendar className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Book Demo
              </Button>
            </div>

            <p className="text-slate-400 text-xs animate-fade-in [animation-delay:800ms]">
              No credit card required • 5 min setup • See results immediately
            </p>
          </div>

          {/* Right Column - Dashboard Image (larger, 3/5 width, positioned higher) */}
          <div className="lg:col-span-3 relative animate-fade-in [animation-delay:400ms] -mt-16 lg:-mt-24">
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105">
              <img src={withBase("lovable-uploads/e910e95d-3ed7-4a18-a018-c315f42aeacb.png")} alt="Hikaflow Impact Analysis Dashboard" className="w-full rounded-2xl shadow-2xl" />
              <div className="absolute top-12 right-12 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce">
                Live Dashboard
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 hover:scale-110 transition-transform duration-300">
              <div className="text-emerald-400 font-bold text-xl">51</div>
              <div className="text-slate-300 text-xs">Critical Flows</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 hover:scale-110 transition-transform duration-300">
              <div className="text-emerald-400 font-bold text-xl">8.9</div>
              <div className="text-slate-300 text-xs">Impact Score</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-slate-400 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
