"use client";

import { Download, Brain, PiggyBank, Bell, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "€200+", label: "Risparmio medio mensile" },
    { value: "10K+", label: "Utenti attivi" },
    { value: "95%", label: "Accuratezza AI" },
    { value: "4.8★", label: "Rating utenti" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30">
                ✨ Lo Spotify Wrapped delle tue spese
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
              Spendi <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">meglio</span>,<br />
              vivi meglio
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              L&apos;app che non si limita ad archiviare scontrini, ma analizza le tue abitudini di spesa, 
              ti dà consigli personalizzati e ti aiuta a raggiungere i tuoi obiettivi finanziari.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection("download")} className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Scarica Gratis
              </button>
              <button onClick={() => scrollToSection("features")} className="border border-cyan-500/50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Scopri di più
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cyan-900/50 via-blue-900/50 to-emerald-900/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-cyan-500/30">
                    <div className="w-10 h-10 relative">
                      <Image 
                        src="/logo.png" 
                        alt="Genius"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Genius Dashboard</h3>
                      <p className="text-sm text-gray-400">Analisi gennaio 2026</p>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <PiggyBank className="w-6 h-6 text-emerald-400" />
                      <span className="text-sm text-emerald-300 font-semibold">RISPARMIO DEL MESE</span>
                    </div>
                    <div className="text-4xl font-bold text-emerald-400">€243.50</div>
                    <p className="text-sm text-gray-300 mt-2">+18% rispetto al mese scorso! 🎉</p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Spese Impulsive Evitate</span>
                        <span className="text-cyan-400 font-bold">4</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: "80%"}}></div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Abbonamenti Ottimizzati</span>
                        <span className="text-blue-400 font-bold">2</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{width: "60%"}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-4 text-center">
                      <Bell className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-2xl font-bold text-cyan-400">8</div>
                      <div className="text-xs text-gray-400">Alert ricevuti</div>
                    </div>
                    <div className="flex-1 bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-4 text-center">
                      <Star className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                      <div className="text-2xl font-bold text-emerald-400">12</div>
                      <div className="text-xs text-gray-400">Achievement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
