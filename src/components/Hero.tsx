
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Hikaflow</h1>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your On-Demand
              <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                AI Engineer
              </span>
              for Confident Releases
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Deeply integrated AI-powered assistant for fast-moving software teams. 
              Ship quickly without compromising on quality, documentation, or efficiency.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white border-0 h-14 text-lg font-semibold group transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/company/hikaflow', '_blank')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white h-14 text-lg font-semibold group transition-all duration-300"
              onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Meeting
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowRight className="h-6 w-6 text-slate-400 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
