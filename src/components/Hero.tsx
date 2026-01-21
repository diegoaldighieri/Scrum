"use client";

import { ArrowRight, Sparkles, TrendingDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2 bg-[#38D594]/10 backdrop-blur-sm border border-[#38D594]/20 rounded-full">
            <Sparkles className="w-4 h-4 text-[#38D594]" />
            <span className="text-[#38D594] font-semibold text-sm">Powered by Artificial Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Non spendi tanto.
            <br />
            <span className="text-[#38D594]">Sprechi senza saperlo.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Receiptia Genius analizza le tue abitudini di spesa e ti aiuta a risparmiare con consigli intelligenti e personalizzati.
          </p>

          {/* Secondary tagline */}
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <TrendingDown className="w-5 h-5 text-[#38D594]" />
            <p className="text-lg">Il Wrapped delle tue spese, tutto l'anno</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="group px-8 py-4 bg-[#38D594] hover:bg-emerald-500 text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#38D594]/25 flex items-center space-x-2">
              <span>Inizia Gratis per 14 Giorni</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/80 hover:bg-slate-800 border border-[#38D594]/20 hover:border-[#38D594]/40 text-white font-semibold rounded-lg transition-all duration-300">
              Guarda la Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#38D594] rounded-full"></div>
              <span>Crittografia end-to-end</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#38D594] rounded-full"></div>
              <span>Dati privati e sicuri</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#38D594] rounded-full"></div>
              <span>Nessuna carta richiesta</span>
            </div>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#38D594] mb-2">200€</div>
              <div className="text-sm text-gray-400">Risparmio medio mensile</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#38D594] mb-2">95%</div>
              <div className="text-sm text-gray-400">Accuratezza AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#38D594] mb-2">10K+</div>
              <div className="text-sm text-gray-400">Utenti attivi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#38D594]/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
}
