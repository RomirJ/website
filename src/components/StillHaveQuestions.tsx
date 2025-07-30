const StillHaveQuestions = () => {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-500 hover:border-emerald-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Get personalized answers and see how Hikaflow works with your specific codebase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
                onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
              >
                Try Hikaflow Free
              </button>
              <button 
                className="border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StillHaveQuestions;