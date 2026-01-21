"use client";

import { ArrowRight, Sparkles, TrendingDown, Play, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleStartTrial = () => {
    alert("🎉 Fantastico! Ti reindirizzeremo alla pagina di registrazione per iniziare la tua prova gratuita di 14 giorni!");
  };

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true);
  };

  return (
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 transition-colors">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Powered by artificial intelligence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Non spendi tanto.
              <br />
              <span className="text-primary">Sprechi senza saperlo.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Receiptia Genius analizza le tue abitudini di spesa e ti aiuta a risparmiare con consigli intelligenti e personalizzati.
            </p>

            {/* Secondary tagline */}
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <TrendingDown className="w-5 h-5 text-primary" />
              <p className="text-lg">Il Wrapped delle tue spese, tutto l'anno</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                  onClick={handleStartTrial}
                  className="group px-8 py-4 bg-primary hover:bg-primary/90 text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 flex items-center space-x-2"
              >
                <span>Inizia gratis per 14 giorni</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                  onClick={handleWatchDemo}
                  className="group px-8 py-4 bg-slate-800/80 hover:bg-slate-800 border border-primary/20 hover:border-primary/40 text-white font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Guarda la demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Crittografia end-to-end</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span>Dati privati e sicuri</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <span>Nessuna carta richiesta</span>
              </div>
            </div>

            {/* Stats */}
            <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">€200</div>
                <div className="text-sm text-gray-400">Risparmio medio mensile</div>
              </div>
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-gray-400">Accuratezza AI</div>
              </div>
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-gray-400">Utenti attivi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>

        {/* Video Modal */}
        {isVideoModalOpen && (
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setIsVideoModalOpen(false)}
            >
              <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="aspect-video bg-slate-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-white text-xl mb-2">Demo video</p>
                    <p className="text-gray-400">Il video demo sarà disponibile a breve!</p>
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  );
}