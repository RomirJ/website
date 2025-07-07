
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { withBase } from "@/lib/paths";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "demo" },
    { label: "Capabilities", id: "features" },
    { label: "Contact Us", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={withBase("lovable-uploads/f88f9ca8-439a-47e0-9636-fd54f124efe5.png")} 
              alt="Hikaflow Logo" 
              className="h-16 w-auto hover:scale-105 transition-transform duration-300 animate-fade-in"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group animate-fade-in hover:scale-105"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${menuItems.length * 100}ms`}}
            >
              Try Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all duration-300 rounded-lg hover:scale-105"
                style={{animationDelay: `${index * 50}ms`}}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
