"use client";

import { ArrowRight, Sparkles, TrendingDown, Play, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { theme } = useTheme();

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


            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Non spendi tanto.
              <br />
              <span className="text-primary">Sprechi senza saperlo.</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } max-w-3xl mx-auto leading-relaxed`}>
              Receiptia Genius analizza le tue abitudini di spesa e ti aiuta a risparmiare con consigli intelligenti e personalizzati.
            </p>

            {/* Secondary tagline */}
            <div className={`flex items-center justify-center space-x-2 ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <TrendingDown className="w-5 h-5 text-primary" />
              <p className="text-lg">Il Wrapped delle tue spese, tutto l'anno</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                  onClick={handleStartTrial}
                  className="group px-8 py-4 bg-primary hover:bg-primary-dark text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 flex items-center space-x-2"
              >
                <span>Inizia Gratis per 14 Giorni</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                  onClick={handleWatchDemo}
                  className={`group px-8 py-4 ${
                      theme === 'dark'
                          ? 'bg-slate-800/80 hover:bg-slate-800 border-primary/20 hover:border-primary/40 text-white'
                          : 'bg-white hover:bg-gray-50 border-primary/30 hover:border-primary/50 text-slate-900'
                  } border font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg`}
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Guarda la Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`pt-12 flex flex-wrap items-center justify-center gap-8 text-sm ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
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
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className={`absolute top-1/4 left-10 w-72 h-72 ${
            theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
        } rounded-full blur-3xl opacity-50 animate-float`}></div>
        <div className={`absolute bottom-1/4 right-10 w-72 h-72 ${
            theme === 'dark' ? 'bg-emerald-500/20' : 'bg-emerald-500/10'
        } rounded-full blur-3xl opacity-50 animate-float`} style={{ animationDelay: '1.5s' }}></div>

        {/* Video Modal */}
        {isVideoModalOpen && (
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setIsVideoModalOpen(false)}
            >
              <div className={`relative max-w-4xl w-full ${
                  theme === 'dark' ? 'bg-slate-900' : 'bg-white'
              } rounded-2xl overflow-hidden`} onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className={`absolute top-4 right-4 z-10 w-10 h-10 ${
                        theme === 'dark'
                            ? 'bg-slate-800 hover:bg-slate-700'
                            : 'bg-gray-200 hover:bg-gray-300'
                    } rounded-full flex items-center justify-center ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                    } transition-colors`}
                >
                  <X className="w-6 h-6" />
                </button>
                <div className={`aspect-video ${
                    theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
                } flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} text-xl mb-2`}>
                      Demo Video
                    </p>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      Il video demo sarà disponibile a breve!
                    </p>
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  );
}