"use client";

import { Shield, Lock, UserCheck, Award, ThumbsUp, Clock } from "lucide-react";

export default function Trust() {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Crittografia End-to-End",
      color: "text-primary",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      label: "GDPR Compliant",
      color: "text-blue-400",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      label: "Dati Mai Venduti",
      color: "text-emerald-400",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Certificato ISO 27001",
      color: "text-amber-400",
    },
  ];

  const trustFeatures = [
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Sistema di Feedback Integrato",
      description: "Ogni insight generato dall'AI può essere valutato. Il tuo feedback migliora costantemente l'accuratezza dei consigli.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Badge di Affidabilità",
      description: "Ogni consiglio mostra un indicatore di confidenza: 🟢 Verde (alta affidabilità), 🟡 Giallo (verifica consigliata), 🔴 Rosso (pochi dati).",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Supporto Umano Sempre Disponibile",
      description: "L'AI può sbagliare. Per questo ogni segnalazione viene verificata da un operatore entro 24 ore. Chat con operatore disponibile 9:00-20:00.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La tua fiducia è
            <span className="text-primary"> la nostra priorità</span>
          </h2>
          <p className="text-xl text-gray-400">
            Sicurezza dei dati, trasparenza e controllo totale sui tuoi insight finanziari.
          </p>
        </div>

        {/* Security Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="p-6 bg-slate-900/50 backdrop-blur-sm border border-primary/10 rounded-xl text-center hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className={`flex justify-center mb-3 ${badge.color}`}>
                {badge.icon}
              </div>
              <p className="text-gray-300 text-sm font-medium">{badge.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trustFeatures.map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-slate-900/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Privacy Statement */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Il tuo controllo, sempre
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Esporta i tuoi dati</span> in qualsiasi momento in formato CSV o PDF
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Modifica o elimina</span> qualsiasi transazione o categoria assegnata
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Cancellazione account</span> immediata con rimozione completa dei dati
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Zero vendita dati</span> a terze parti, garantito per contratto
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-slate-950/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                <h4 className="text-xl font-bold text-white mb-2">Privacy by Design</h4>
                <p className="text-gray-400 text-sm">
                  I tuoi dati finanziari restano sul tuo dispositivo. L'elaborazione AI avviene in modo sicuro e crittografato.
                </p>
              </div>
              <div className="pt-6 border-t border-primary/10">
                <p className="text-gray-500 text-xs text-center">
                  Certificazioni: GDPR, ISO 27001, SOC 2 Type II
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Promise */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition-all">
            <UserCheck className="w-5 h-5 text-primary" />
            <span className="text-gray-300 font-medium">
              <span className="text-primary font-semibold">Tempi di risposta garantiti:</span> Chat AI &lt;2 min • Operatore &lt;10 min • Email &lt;24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
