import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, CheckCircle } from "lucide-react";
const Hero = () => {
  return <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20 rounded-none">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium animate-pulse">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 500+ Engineering Teams
            </div>

            {/* Main Headline */}
            <div className="animate-fade-in [animation-delay:200ms]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your On-Demand
                <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent animate-pulse leading-relaxed py-2 text-6xl">
                  AI Engineer
                </span>
                for Confident Releases
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Deeply integrated AI-powered assistant for fast-moving software teams. 
                Ship quickly without compromising on quality, documentation, or efficiency.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fade-in [animation-delay:400ms]">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-lg mb-1">80%</div>
                <p className="text-slate-300 text-sm">Faster QA Cycles</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-lg mb-1">5 min</div>
                <p className="text-slate-300 text-sm">Setup Time</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/30 hover:scale-105 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-lg mb-1">24/7</div>
                <p className="text-slate-300 text-sm">AI Reviews</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 h-16 text-lg font-semibold group transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:scale-105" onClick={() => window.open('https://app.hikaflow.com/', '_blank')}>
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Try Hikaflow Free
              </Button>
              <Button size="lg" variant="outline" className="border-slate-500 bg-slate-800/30 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-400 h-16 text-lg font-semibold group transition-all duration-300 hover:scale-105" onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}>
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400 h-16 text-lg font-semibold group transition-all duration-300 hover:scale-105" onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}>
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book Personal Demo
              </Button>
            </div>

            <p className="text-slate-400 text-sm animate-fade-in [animation-delay:800ms]">
              No credit card required • Connect in under 5 minutes • See results immediately
            </p>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="relative animate-fade-in [animation-delay:400ms]">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-2xl blur-2xl animate-pulse"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105">
              <img src="/lovable-uploads/e910e95d-3ed7-4a18-a018-c315f42aeacb.png" alt="Hikaflow Impact Analysis Dashboard" className="w-full rounded-xl shadow-2xl" />
              <div className="absolute top-8 right-8 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Live Dashboard
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 hover:scale-110 transition-transform duration-300">
              <div className="text-emerald-400 font-bold text-2xl">51</div>
              <div className="text-slate-300 text-sm">Critical Flows Analyzed</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 hover:scale-110 transition-transform duration-300">
              <div className="text-emerald-400 font-bold text-2xl">8.9</div>
              <div className="text-slate-300 text-sm">Avg Impact Score</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-slate-400 rotate-90" />
        </div>
      </div>
    </section>;
};
export default Hero;