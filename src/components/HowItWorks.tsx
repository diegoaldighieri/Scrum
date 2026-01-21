"use client";

import { Camera, Brain, Target, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Scansiona gli Scontrini",
      description: "Fotografa i tuoi scontrini o caricali manualmente. L'OCR intelligente estrae automaticamente tutte le informazioni.",
      color: "text-blue-400",
      borderColor: "border-blue-400",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "L'AI Analizza i Dati",
      description: "I nostri algoritmi identificano pattern, abitudini di spesa e opportunità di risparmio nei tuoi acquisti.",
      color: "text-purple-400",
      borderColor: "border-purple-400",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Ricevi Consigli Personalizzati",
      description: "Ottieni insight actionable basati sulle tue abitudini reali, non su consigli generici.",
      color: "text-amber-400",
      borderColor: "border-amber-400",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Risparmia e Raggiungi gli Obiettivi",
      description: "Monitora i progressi, celebra i traguardi e costruisci abitudini finanziarie sostenibili.",
      color: "text-primary",
      borderColor: "border-primary",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Come funziona
            <span className="text-primary"> Receiptia Genius</span>
          </h2>
          <p className="text-xl text-gray-400">
            Quattro semplici passaggi per trasformare i tuoi scontrini in insight di valore.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line - hidden on last item */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-primary/10 border-2 ${step.borderColor} rounded-full ${step.color} font-bold text-lg mb-4 hover:scale-110 transition-transform`}>
                  {i + 1}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center ${step.color} hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Example Output */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 md:p-12 hover:border-primary/20 transition-all">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">
                Esempio di Insight Generato
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-slate-800/50 border border-primary/20 rounded-lg hover:border-primary/40 transition-all hover:scale-105">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <p className="text-white font-semibold mb-1">Alert: Abbonamento Dimenticato</p>
                      <p className="text-gray-400 text-sm">Pagamento ricorrente di €14,99 rilevato per "Servizio XYZ". Lo stai ancora utilizzando?</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 border border-amber-500/20 rounded-lg hover:border-amber-500/40 transition-all hover:scale-105">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <p className="text-white font-semibold mb-1">Attenzione: Budget a Rischio</p>
                      <p className="text-gray-400 text-sm">Al ritmo attuale, supererai il budget di €150 entro fine mese. Consigliamo di ridurre le spese non essenziali.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all hover:scale-105">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <div>
                      <p className="text-white font-semibold mb-1">Insight: Pattern di Spesa</p>
                      <p className="text-gray-400 text-sm">Tendi a spendere il 40% in più il venerdì sera. Considera di pianificare gli acquisti in anticipo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-400 mb-2">Risparmio Totale</div>
                  <div className="text-5xl font-bold text-primary">€847</div>
                  <div className="text-sm text-gray-500 mt-1">Negli ultimi 6 mesi</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                    <span className="text-gray-400 text-sm">Abbonamenti eliminati</span>
                    <span className="text-primary font-semibold">€312</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                    <span className="text-gray-400 text-sm">Acquisti evitati</span>
                    <span className="text-primary font-semibold">€285</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                    <span className="text-gray-400 text-sm">Ottimizzazioni varie</span>
                    <span className="text-primary font-semibold">€250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
