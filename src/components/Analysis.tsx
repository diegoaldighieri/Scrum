"use client";

import { Zap, BarChart3, Check, Brain } from "lucide-react";

export default function Analysis() {
  const patterns = [
    {
      name: "Spesa Impulsiva",
      description: "Rileva acquisti sopra €50 dopo le 22:00",
      action: "Ti avvisa prima di confermare l'acquisto",
      metric: "Risparmio medio: €120/mese"
    },
    {
      name: "Abbonamento Dimenticato",
      description: "Identifica addebiti ricorrenti per servizi non utilizzati",
      action: "Chiede se vuoi ancora il servizio",
      metric: "Recupero medio: €35/mese"
    },
    {
      name: "Trend Settimanale",
      description: "Analizza i picchi di spesa ricorrenti",
      action: "Suggerisce strategie di pianificazione",
      metric: "Ottimizzazione: 15-25%"
    }
  ];

  return (
    <section id="analysis" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
              🧠 Pattern Detectors AI
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Analisi delle <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">abitudini di spesa</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Algoritmi intelligenti che trovano schemi nei tuoi dati e ti aiutano a prendere decisioni migliori
          </p>
        </div>

        <div className="space-y-6">
          {patterns.map((pattern, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">{pattern.name}</h3>
                  <p className="text-gray-400">{pattern.description}</p>
                </div>
                <div className="border-l border-blue-500/30 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400">AZIONE</span>
                  </div>
                  <p className="text-white">{pattern.action}</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">RISULTATO</span>
                  </div>
                  <p className="text-2xl font-bold text-emerald-400">{pattern.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Come funziona l&apos;analisi?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-500/20 rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-400">Raccolta Dati:</span>
                    <span className="text-gray-300"> Fotografi i tuoi scontrini e l&apos;AI estrae automaticamente le informazioni</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-500/20 rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-400">Analisi Pattern:</span>
                    <span className="text-gray-300"> Gli algoritmi identificano abitudini, anomalie e opportunità di risparmio</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-500/20 rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-400">Consigli Personalizzati:</span>
                    <span className="text-gray-300"> Ricevi notifiche intelligenti e suggerimenti basati sui tuoi dati reali</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-500/20 rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-400">Apprendimento Continuo:</span>
                    <span className="text-gray-300"> Più usi l&apos;app, più l&apos;AI diventa precisa nelle sue previsioni</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/30">
              <div className="text-center mb-4">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-xl font-bold">Tecnologia AI Avanzata</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Machine Learning</span>
                  <span className="text-cyan-400 font-semibold">✓ Attivo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Computer Vision</span>
                  <span className="text-cyan-400 font-semibold">✓ Attivo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Predictive Analytics</span>
                  <span className="text-cyan-400 font-semibold">✓ Attivo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Natural Language Processing</span>
                  <span className="text-cyan-400 font-semibold">✓ Attivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
