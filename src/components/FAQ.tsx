"use client";

import { useState } from "react";
import { ChevronDown, Shield } from "lucide-react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "I miei dati sono al sicuro?",
      answer: "Assolutamente sì. Tutti i tuoi dati sono criptati end-to-end e restano sul tuo dispositivo. Utilizziamo protocolli di sicurezza bancari e non condividiamo mai le tue informazioni con terze parti. La tua privacy è la nostra priorità."
    },
    {
      question: "Come funziona l'intelligenza artificiale di Genius?",
      answer: "Genius utilizza algoritmi di machine learning avanzati chiamati 'Pattern Detectors' che analizzano i tuoi scontrini nel tempo. Identificano abitudini di spesa, rilevano anomalie e suggeriscono opportunità di risparmio basate su modelli comportamentali reali."
    },
    {
      question: "E se l'AI sbaglia un consiglio?",
      answer: "Puoi segnalare ogni consiglio con un semplice tap. Il sistema imparerà dalle tue correzioni e diventerà sempre più preciso nel tempo. Hai sempre il controllo completo sui suggerimenti che ricevi."
    },
    {
      question: "Quanto costa Receiptia Genius?",
      answer: "Receiptia ha un piano gratuito con funzionalità base. Genius è disponibile con il piano Pro a €4.99/mese o €49.99/anno. Include analisi AI illimitata, consigli personalizzati e notifiche intelligenti. Prova gratuita di 30 giorni senza vincoli."
    },
    {
      question: "Su quali dispositivi funziona?",
      answer: "Receiptia Genius è disponibile su iOS (iPhone e iPad) e Android. Supportiamo anche la sincronizzazione cross-device, così puoi accedere ai tuoi dati da qualsiasi dispositivo."
    },
    {
      question: "Come posso iniziare?",
      answer: "Scarica l'app dallo store del tuo dispositivo, crea un account in 30 secondi, e inizia a fotografare i tuoi scontrini. Genius si attiverà automaticamente dopo i primi 5 scontrini caricati e inizierà l'analisi."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Domande <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">frequenti</span>
          </h2>
          <p className="text-xl text-gray-400">
            Tutto quello che devi sapere su Receiptia Genius
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cyan-500/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} 
                />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 text-gray-400 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 text-center">
          <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">La tua privacy è sacra</h3>
          <p className="text-gray-400 mb-4">
            Utilizziamo crittografia end-to-end e protocolli di sicurezza bancari. 
            I tuoi dati non vengono mai condivisi con terze parti.
          </p>
          <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
            Leggi la Privacy Policy →
          </button>
        </div>
      </div>
    </section>
  );
}
