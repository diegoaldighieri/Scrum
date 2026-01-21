"use client";

import { Brain, TrendingUp, Bell, Star } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Pattern Detectors AI",
      description: "Algoritmi intelligenti che analizzano le tue abitudini di spesa e individuano schemi nascosti",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consigli Personalizzati",
      description: "Suggerimenti su misura per aiutarti a risparmiare e raggiungere i tuoi obiettivi finanziari",
      color: "from-blue-500 to-emerald-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Notifiche Intelligenti",
      description: "Ti avvisiamo quando stai per fare spese impulsive o dimenticare abbonamenti inutilizzati",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Achievement & Premi",
      description: "Vieni premiato quando fai scelte intelligenti e raggiungi traguardi di risparmio",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Il tuo <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">coach finanziario</span> tascabile
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Intelligenza artificiale avanzata per trasformare i tuoi scontrini in insight preziosi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
            >
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 group-hover:shadow-lg transition-shadow`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
