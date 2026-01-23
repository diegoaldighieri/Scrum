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
      <section>

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