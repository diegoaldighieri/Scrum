"use client";

import { Check, Star, Minus } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Pricing() {
  const { theme } = useTheme();

  const plans = [
    {
      name: "Gratis",
      price: "€0",
      period: "/mese",
      description: "Per iniziare a gestire le tue spese",
      features: [
        "Scansione scontrini limitata (10/mese)",
        "Inserimento manuale illimitato",
        "Intelligenza artificiale base",
        "Report mensili",
        "Supporto email",
      ],
      limitations: [
        "Pubblicità nell'app",
        "Analytics limitate",
      ],
      popular: false,
      cta: "Inizia Gratis",
      ctaAction: () => alert("Inizia subito con il piano Gratis - nessuna carta richiesta!"),
    },
    {
      name: "Pro",
      price: "€9,99",
      period: "/mese",
      description: "Per chi vuole massimizzare il risparmio",
      features: [
        "Scansione scontrini illimitata",
        "AI avanzata con tutti i Pattern Detectors",
        "Analytics e previsioni di spesa",
        "Esportazione dati in CSV/PDF",
        "Supporto clienti prioritario",
        "Zero pubblicità",
        "Notifiche push personalizzate",
        "Obiettivi di risparmio illimitati",
      ],
      popular: true,
      cta: "Prova 14 Giorni Gratis",
      ctaAction: () => alert("🎉 Perfetto! Inizia la tua prova gratuita di 14 giorni del piano Pro - nessuna carta richiesta!"),
    },
    {
      name: "Family",
      price: "€19,99",
      period: "/mese",
      description: "Per gestire le finanze familiari insieme",
      features: [
        "Tutto del piano Pro",
        "Fino a 5 membri della famiglia",
        "Budget condivisi",
        "Obiettivi collaborativi",
        "Parental control",
        "Dashboard famiglia unificata",
        "Report familiari dettagliati",
        "Supporto prioritario dedicato",
      ],
      popular: false,
      cta: "Prova 14 Giorni Gratis",
      ctaAction: () => alert("👨‍👩‍👧‍👦 Ottima scelta! Inizia la tua prova gratuita di 14 giorni del piano Family!"),
    },
  ];

  const handleContactSales = () => {
    alert("Il nostro team sales ti contatterà entro 24 ore per discutere una soluzione personalizzata per la tua azienda!");
  };

  return (
      <section id="pricing" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Piani per ogni esigenza
            </h2>
            <p className={`text-xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Scegli il piano più adatto a te. Tutti i piani includono 14 giorni di prova gratuita senza vincoli.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, i) => (
                <div
                    key={i}
                    className={`relative p-8 rounded-2xl transition-all duration-300 ${
                        plan.popular
                            ? `bg-linear-to-b from-primary/10 ${theme === 'dark' ? 'to-slate-900/50' : 'to-white'} border-2 border-primary shadow-xl shadow-primary/20 lg:scale-105`
                            : `${theme === 'dark' ? 'bg-slate-900/50' : 'bg-white shadow-lg'} border ${theme === 'dark' ? 'border-primary/10 hover:border-primary/30' : 'border-gray-200 hover:border-primary/30'}`
                    }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-primary text-slate-950 font-semibold text-sm rounded-full flex items-center space-x-1 shadow-lg shadow-primary/40">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Più Popolare</span>
                      </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>{plan.name}</h3>
                    <p className={`text-sm mb-6 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{plan.description}</p>
                    <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>{plan.price}</span>
                      <span className={`ml-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className={`text-sm ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>{feature}</span>
                        </li>
                    ))}
                    {plan.limitations && plan.limitations.map((limitation, j) => (
                        <li key={`limit-${j}`} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-gray-600/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="w-3 h-3 text-gray-500" />
                          </div>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                      onClick={plan.ctaAction}
                      className={`w-full px-6 py-4 font-semibold rounded-lg transition-all duration-300 ${
                          plan.popular
                              ? "bg-primary hover:bg-primary-dark text-slate-950 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
                              : `${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 border border-primary/20 hover:border-primary/40 text-white' : 'bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-primary text-slate-900'}`
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`text-center p-8 backdrop-blur-sm border rounded-xl transition-all ${
              theme === 'dark'
                  ? 'bg-slate-900/30 border-primary/10 hover:border-primary/20'
                  : 'bg-gray-50 border-gray-200 hover:border-primary/30'
          }`}>
            <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Hai bisogno di un piano personalizzato per la tua azienda?
            </h3>
            <p className={`mb-6 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Contattaci per soluzioni enterprise con fatturazione dedicata, onboarding personalizzato e SLA garantiti.
            </p>
            <button
                onClick={handleContactSales}
                className={`px-8 py-3 border font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 border-primary/20 hover:border-primary/40 text-white'
                        : 'bg-white hover:bg-gray-50 border-gray-300 hover:border-primary text-slate-900'
                }`}
            >
              Contatta il Team Sales
            </button>
          </div>
        </div>
      </section>
  );
}