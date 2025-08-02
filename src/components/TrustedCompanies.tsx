import { useState, useEffect } from "react";

const TrustedCompanies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const companies = [
    {
      name: "Tech Company 1",
      logo: "/lovable-uploads/689fe609-d028-42bc-89ba-16e25e070284.png"
    },
    {
      name: "Tech Company 2", 
      logo: "/lovable-uploads/80a5197d-5241-4412-a786-6848e7e50302.png"
    },
    {
      name: "Analytics Platform",
      logo: "/lovable-uploads/689fe609-d028-42bc-89ba-16e25e070284.png"
    },
    {
      name: "AI Solutions",
      logo: "/lovable-uploads/80a5197d-5241-4412-a786-6848e7e50302.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-6">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex items-center justify-center px-8"
                >
                  <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-emerald-400 scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;