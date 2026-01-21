"use client";

import { Check, X, Zap, Users, Crown, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      period: "per sempre",
      description: "Perfetto per iniziare a gestire le tue spese",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      features: [
        { text: "Scansione scontrini limitata", included: true },
        { text: "Inserimento manuale illimitato", included: true },
        { text: "Intelligenza artificiale base", included: true },
        { text: "Dashboard essenziale", included: true },
        { text: "Pubblicità nell'app", included: true, isAd: true },
        { text: "Analytics avanzate", included: false },
        { text: "Esportazione dati", included: false },
        { text: "Supporto prioritario", included: false },
      ],
      cta: "Inizia Gratis",
      popular: false,
    },
    {
      name: "Pro",
      price: "4.99",
      period: "/mese",
      description: "Per chi vuole il massimo controllo delle proprie finanze",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 via-blue-500 to-blue-600",
      features: [
        { text: "Scansione scontrini illimitata", included: true },
        { text: "AI avanzata con Pattern Detectors", included: true },
        { text: "Analytics e insights dettagliati", included: true },
        { text: "Previsioni di spesa intelligenti", included: true },
        { text: "Esportazione dati (PDF, Excel, CSV)", included: true },
        { text: "Supporto clienti prioritario", included: true },
        { text: "Zero pubblicità", included: true },
        { text: "Notifiche push personalizzate", included: true },
      ],
      cta: "Prova 30 giorni gratis",
      popular: true,
    },
    {
      name: "Plus",
      price: "7.99",
      period: "/mese",
      description: "Tutte le funzionalità Pro con vantaggi extra",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-500 via-purple-600 to-indigo-600",
      features: [
        { text: "Tutto del piano Pro", included: true },
        { text: "Backup automatico nel cloud", included: true },
        { text: "Sincronizzazione multi-device", included: true },
        { text: "Categorie personalizzate illimitate", included: true },
        { text: "Report mensili automatici via email", included: true },
        { text: "Accesso anticipato a nuove funzionalità", included: true },
        { text: "Supporto dedicato 24/7", included: true },
        { text: "Consulenza finanziaria AI trimestrale", included: true },
      ],
      cta: "Prova 30 giorni gratis",
      popular: false,
    },
    {
      name: "Family",
      price: "9.99",
      period: "/mese",
      description: "Perfetto per famiglie fino a 5 persone",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 via-teal-500 to-green-600",
      features: [
        { text: "Tutto del piano Pro", included: true },
        { text: "Fino a 5 profili utente", included: true },
        { text: "Budget condivisi e obiettivi familiari", included: true },
        { text: "Dashboard famiglia unificata", included: true },
        { text: "Parental control e limitazioni", included: true },
        { text: "Notifiche di spesa per tutti i membri", included: true },
        { text: "Report consolidati famiglia", included: true },
        { text: "Gestione allowance figli", included: true },
      ],
      cta: "Prova 30 giorni gratis",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30">
              💎 Piani e Prezzi
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Scegli il piano <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">perfetto</span> per te
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Tutti i piani includono 30 giorni di prova gratuita. Nessuna carta di credito richiesta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative group ${
                plan.popular ? 'lg:scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Più Popolare
                  </span>
                </div>
              )}
              
              <div className={`relative h-full bg-slate-900/50 dark:bg-slate-900/50 light:bg-white backdrop-blur-lg rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                  : 'border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200'
              } hover:border-cyan-500/50 transition-all duration-300 hover-lift overflow-hidden`}>
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {plan.icon}
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold mb-2 dark:text-white light:text-gray-900">{plan.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        €{plan.price}
                      </span>
                      <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    {plan.name !== "Gratis" && (
                      <p className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-500 mt-1">
                        Annulla quando vuoi
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105'
                      : 'bg-slate-800/50 dark:bg-slate-800/50 light:bg-gray-100 text-white dark:text-white light:text-gray-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>

                  {/* Features list */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
                      Cosa include:
                    </p>
                    {plan.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className={`flex items-start gap-3 ${
                          !feature.included ? 'opacity-50' : ''
                        }`}
                      >
                        {feature.included ? (
                          <div className={`rounded-full p-1 mt-0.5 ${
                            feature.isAd 
                              ? 'bg-orange-500/20' 
                              : 'bg-cyan-500/20'
                          }`}>
                            {feature.isAd ? (
                              <span className="text-orange-400 text-xs">⚠️</span>
                            ) : (
                              <Check className="w-4 h-4 text-cyan-400" />
                            )}
                          </div>
                        ) : (
                          <div className="rounded-full p-1 mt-0.5 bg-gray-500/20">
                            <X className="w-4 h-4 text-gray-500" />
                          </div>
                        )}
                        <span className={`text-sm ${
                          feature.included 
                            ? 'text-gray-300 dark:text-gray-300 light:text-gray-700' 
                            : 'text-gray-500 dark:text-gray-500 light:text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-900/50 dark:bg-slate-900/50 light:bg-white backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200">
            <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">
              🎓 Sconto Studenti & Nonprofit
            </h3>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4">
              Studenti universitari e organizzazioni nonprofit ricevono il 50% di sconto su tutti i piani a pagamento.
            </p>
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Verifica la tua idoneità →
            </button>
          </div>
        </div>

        {/* FAQ Pricing */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white light:text-gray-900">
            Domande frequenti sui piani
          </h3>
          <div className="space-y-4">
            <div className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200">
              <h4 className="font-semibold mb-2 dark:text-white light:text-gray-900">
                Posso cambiare piano in qualsiasi momento?
              </h4>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                Sì! Puoi passare a un piano superiore o inferiore in qualsiasi momento. I cambiamenti vengono applicati immediatamente e l&apos;importo viene ricalcolato in modo proporzionale.
              </p>
            </div>
            <div className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200">
              <h4 className="font-semibold mb-2 dark:text-white light:text-gray-900">
                Come funziona il piano Family?
              </h4>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                Il piano Family permette di aggiungere fino a 5 membri della famiglia. Ogni membro ha il proprio profilo, ma potete condividere budget e obiettivi comuni. Il proprietario dell&apos;account ha il controllo completo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
