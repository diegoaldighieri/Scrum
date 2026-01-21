"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#38D594]/20 via-slate-900/80 to-emerald-900/20 backdrop-blur-sm border border-[#38D594]/30 rounded-3xl p-12 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#38D594]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-[#38D594]/10 backdrop-blur-sm border border-[#38D594]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#38D594]" />
              <span className="text-[#38D594] font-semibold text-sm">Inizia oggi stesso</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Pronto a trasformare il modo in cui
              <br />
              <span className="text-[#38D594]">gestisci le tue spese?</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unisciti a migliaia di utenti che stanno già risparmiando in media €200 al mese con Receiptia Genius.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="group px-10 py-4 bg-[#38D594] hover:bg-emerald-500 text-slate-950 font-bold text-lg rounded-lg transition-all duration-300 shadow-xl shadow-[#38D594]/30 hover:shadow-[#38D594]/50 flex items-center space-x-2">
                <span>Inizia la Prova Gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-slate-800/80 hover:bg-slate-800 border border-[#38D594]/30 text-white font-bold text-lg rounded-lg transition-all duration-300">
                Scopri di Più
              </button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#38D594] rounded-full"></div>
                <span>14 giorni gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#38D594] rounded-full"></div>
                <span>Nessuna carta richiesta</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#38D594] rounded-full"></div>
                <span>Cancella quando vuoi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
