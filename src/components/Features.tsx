"use client";

import { Bell, ShoppingCart, TrendingUp, Copy, BarChart3, ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Bell className="w-7 h-7" />,
      title: "Alert Abbonamenti Fantasma",
      description: "Individua pagamenti ricorrenti dimenticati come SaaS, palestre e riviste. Ti avvisiamo quando rilevi un abbonamento che potresti non utilizzare più.",
      logic: "Analizza importi fissi mensili per almeno 3 mesi consecutivi",
      color: "from-red-500/20 to-orange-500/20",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400",
    },
    {
      icon: <ShoppingCart className="w-7 h-7" />,
      title: "Shopping Impulse Trigger",
      description: "Monitora la tua propensione agli acquisti non necessari in base a orario e giorno della settimana. Ricevi un alert quando stai per fare acquisti impulsivi.",
      logic: "Rileva pattern di spesa in fasce orarie specifiche",
      color: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Predittore di Budget Residuo",
      description: "Stima se arriverai a fine mese rispettando il budget impostato. Proiezioni in tempo reale basate sul tuo ritmo di spesa attuale.",
      logic: "Calcola la proiezione mensile dal ritmo giornaliero",
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: <Copy className="w-7 h-7" />,
      title: "Subscription Cannibal",
      description: "Identifica servizi sovrapposti che offrono le stesse funzionalità. Scopri dove stai pagando due volte per lo stesso tipo di servizio.",
      logic: "Confronta categorie di servizi attivi simultaneamente",
      color: "from-amber-500/20 to-yellow-500/20",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Inflation Personal Index",
      description: "Calcola l'inflazione reale sul tuo carrello della spesa personale, non sul paniere nazionale generico. Scopri quali prodotti pesano di più sul tuo portafoglio.",
      logic: "Confronta i prezzi anno su anno sui tuoi acquisti reali",
      color: "from-emerald-500/20 to-green-500/20",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
  ];

  const handleLearnMore = () => {
    alert("Scopri tutte le funzionalità avanzate di Receiptia Genius!");
  };

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligenza Artificiale al servizio
            <br />
            <span className="text-primary">del tuo portafoglio</span>
          </h2>
          <p className="text-xl text-gray-400">
            Pattern Detectors avanzati che analizzano le tue spese per identificare opportunità di risparmio nascoste.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 bg-slate-900/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="pt-4 border-t border-primary/10">
                <p className="text-sm text-gray-500 italic">
                  💡 {feature.logic}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-emerald-500/10 backdrop-blur-sm border border-primary/20 rounded-xl flex flex-col items-center justify-center text-center hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-3">E molto altro</h3>
            <p className="text-gray-400 mb-6">
              Oltre 15 algoritmi di analisi per aiutarti a prendere decisioni finanziarie migliori ogni giorno.
            </p>
            <button 
              onClick={handleLearnMore}
              className="group px-6 py-3 bg-primary hover:bg-primary-dark text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center space-x-2"
            >
              <span>Scopri Tutte le Funzionalità</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
