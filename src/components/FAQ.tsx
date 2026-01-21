"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "I miei dati sono al sicuro?",
      answer: "I tuoi dati sono protetti con crittografia end-to-end e usati solo per generare i tuoi report personali. Puoi esportarli, modificarli o eliminarli in qualsiasi momento dalle Impostazioni. Non vendiamo i tuoi dati a terzi.",
    },
    {
      question: "E se l'AI sbaglia un'analisi?",
      answer: "Puoi segnalare l'errore con un tap usando il pulsante 'Segnala un problema'. Il sistema imparerà dai tuoi feedback e un operatore umano verificherà il caso entro 24 ore per correggere l'analisi.",
    },
    {
      question: "Come posso personalizzare i consigli?",
      answer: "Nella sezione Preferenze puoi escludere categorie di spesa, impostare obiettivi personalizzati, definire il tuo budget mensile e indicare le tue priorità finanziarie. L'AI adatterà i consigli in base alle tue impostazioni.",
    },
    {
      question: "Cosa significa 'Badge di affidabilità'?",
      answer: "Ogni consiglio mostra quanto l'AI è sicura della sua analisi: 🟢 Verde = dati solidi e affidabili, 🟡 Giallo = verifica consigliata, 🔴 Rosso = pochi dati disponibili. Così sai sempre quando fidarti completamente o fare le tue verifiche.",
    },
    {
      question: "Posso parlare con una persona reale?",
      answer: "Assolutamente sì! Nella chat è sempre presente il pulsante 'Parla con un operatore'. Un membro del nostro team ti risponderà entro 10 minuti durante l'orario di servizio (9:00-20:00). Per urgenze fuori orario, usa l'email con risposta garantita entro 24h.",
    },
    {
      question: "Come viene categorizzata la spesa?",
      answer: "L'AI analizza automaticamente la descrizione dello scontrino e lo assegna a una categoria (es. Ristoranti, Trasporti, Hobby). Se la categorizzazione è sbagliata, puoi correggerla manualmente e l'AI imparerà per le prossime volte.",
    },
    {
      question: "Quali sono i tempi di risposta del supporto?",
      answer: "Garantiamo: Chat AI in meno di 2 minuti, Operatore umano in meno di 10 minuti durante l'orario di servizio (9:00-20:00), Email con risposta entro 24 ore.",
    },
    {
      question: "Posso provare gratuitamente prima di sottoscrivere?",
      answer: "Sì! Tutti i piani Pro e Family includono 14 giorni di prova gratuita senza vincoli. Non è richiesta carta di credito per iniziare. Il piano Gratis è disponibile per sempre senza limiti di tempo.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Domande Frequenti
          </h2>
          <p className="text-xl text-gray-400">
            Tutto quello che devi sapere su Receiptia Genius
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-900/50 backdrop-blur-sm border border-[#38D594]/10 rounded-xl overflow-hidden hover:border-[#38D594]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#38D594] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-sm border border-[#38D594]/10 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-3">
            Non hai trovato la risposta che cercavi?
          </h3>
          <p className="text-gray-400 mb-6">
            Il nostro team di supporto è sempre disponibile per aiutarti
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-[#38D594] hover:bg-emerald-500 text-slate-950 font-semibold rounded-lg transition-all duration-300">
              Contatta il Supporto
            </button>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-[#38D594]/20 text-white font-semibold rounded-lg transition-all duration-300">
              Visita il Centro Assistenza
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
