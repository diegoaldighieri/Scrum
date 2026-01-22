"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function CTA() {
  const { theme } = useTheme();

  const handleStartTrial = () => {
    alert("🎉 Perfetto! Ti reindirizzeremo alla pagina di registrazione per iniziare la tua prova gratuita di 14 giorni. Nessuna carta richiesta!");
  };

  const handleLearnMore = () => {
    const featuresSection = document.querySelector("#features");
    if (featuresSection) {
      const offset = 80;
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`relative overflow-hidden ${
              theme === 'dark'
                  ? 'bg-linear-to-br from-primary/20 via-slate-900/80 to-emerald-900/20 border-primary/30 hover:border-primary/50'
                  : 'bg-linear-to-br from-primary/10 via-white to-emerald-500/10 border-primary/30 hover:border-primary/50 shadow-2xl'
          } backdrop-blur-sm border rounded-3xl p-12 md:p-16 transition-all`}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center space-y-8">
              <div className={`inline-flex items-center space-x-2 px-5 py-2 ${
                  theme === 'dark'
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-primary/5 border-primary/40'
              } backdrop-blur-sm border rounded-full mb-6 hover:bg-primary/20 transition-colors`}>
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Inizia oggi stesso</span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Pronto a trasformare il modo in cui
                <br />
                <span className="text-primary">gestisci le tue spese?</span>
              </h2>

              <p className={`text-xl max-w-2xl mx-auto ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Unisciti a migliaia di utenti che stanno già risparmiando in media €200 al mese con Receiptia Genius.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                    onClick={handleStartTrial}
                    className="group px-10 py-4 bg-primary hover:bg-emerald-500 text-slate-950 font-bold text-lg rounded-lg transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50 flex items-center space-x-2 hover:scale-105"
                >
                  <span>Inizia la Prova Gratuita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={handleLearnMore}
                    className={`px-10 py-4 ${
                        theme === 'dark'
                            ? 'bg-slate-800/80 hover:bg-slate-800 border-primary/30 hover:border-primary/50 text-white'
                            : 'bg-white hover:bg-gray-50 border-primary/40 hover:border-primary/60 text-slate-900 shadow-lg'
                    } border font-bold text-lg rounded-lg transition-all duration-300`}
                >
                  Scopri di Più
                </button>
              </div>

              <div className={`pt-8 flex flex-wrap items-center justify-center gap-6 text-sm ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>14 giorni gratis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span>Nessuna carta richiesta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <span>Cancella quando vuoi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}