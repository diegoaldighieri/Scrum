"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function FAQ() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Come funziona la scansione degli scontrini?",
      answer: "Basta fotografare lo scontrino con la fotocamera del tuo smartphone. La nostra tecnologia OCR avanzata estrae automaticamente tutte le informazioni: data, negozio, importo totale e singoli articoli. Se alcuni dati non vengono rilevati correttamente, puoi modificarli manualmente con pochi tap.",
    },
    {
      question: "I miei dati sono al sicuro?",
      answer: "Assolutamente sì. Utilizziamo crittografia end-to-end per proteggere tutti i tuoi dati. Siamo conformi al GDPR e non condividiamo mai le tue informazioni con terze parti. I tuoi dati finanziari sono archiviati su server sicuri con certificazione ISO 27001.",
    },
    {
      question: "Posso cancellare il mio account in qualsiasi momento?",
      answer: "Sì, puoi cancellare il tuo account in qualsiasi momento dalle impostazioni dell'app. Tutti i tuoi dati verranno eliminati permanentemente dai nostri server entro 30 giorni. Se hai un abbonamento attivo, verrà automaticamente cancellato senza penali.",
    },
    {
      question: "Come funziona la prova gratuita?",
      answer: "Tutti i piani Pro e Family includono 14 giorni di prova gratuita. Non è richiesta carta di credito per iniziare. Dopo il periodo di prova, puoi scegliere se continuare con l'abbonamento o rimanere sul piano gratuito. Non ci sono costi nascosti o addebiti automatici sorpresa.",
    },
    {
      question: "Posso usare Receiptia su più dispositivi?",
      answer: "Sì! Il tuo account si sincronizza automaticamente su tutti i tuoi dispositivi: smartphone iOS e Android, tablet e web. Tutti i dati vengono sincronizzati in tempo reale, così puoi iniziare su un dispositivo e continuare su un altro senza problemi.",
    },
    {
      question: "Quali tipi di scontrini posso scansionare?",
      answer: "Receiptia supporta praticamente tutti i tipi di scontrini: supermercati, ristoranti, negozi online (screenshot o PDF), abbonamenti, bollette e molto altro. Se uno scontrino non viene riconosciuto correttamente, puoi sempre inserire i dati manualmente.",
    },
    {
      question: "Come funzionano gli insight dell'AI?",
      answer: "La nostra intelligenza artificiale analizza i tuoi pattern di spesa nel tempo e identifica opportunità di risparmio. Ad esempio, può rilevare abbonamenti dimenticati, spese ricorrenti anomale, picchi di spesa in determinati giorni o categorie, e suggerirti alternative più economiche. Più usi l'app, più gli insight diventano precisi e personalizzati.",
    },
    {
      question: "Posso esportare i miei dati?",
      answer: "Sì, con il piano Pro e Family puoi esportare tutti i tuoi dati in formato CSV o PDF. Questo è utile per la contabilità personale, dichiarazioni fiscali o semplicemente per avere un backup dei tuoi dati. L'esportazione include tutte le transazioni, categorie e report personalizzati.",
    },
    {
      question: "Cosa succede se cambio piano?",
      answer: "Puoi passare a un piano superiore in qualsiasi momento e l'upgrade sarà immediato. Se passi a un piano inferiore, il downgrade avverrà al termine del periodo di fatturazione corrente. Non perderai mai i tuoi dati storici, ma alcune funzionalità premium potrebbero non essere più disponibili.",
    },
    {
      question: "Offrite supporto in italiano?",
      answer: "Sì! L'intera app è disponibile in italiano, così come il nostro team di supporto clienti. Puoi contattarci via email, chat in-app o sui nostri canali social. Gli utenti Pro e Family hanno accesso al supporto prioritario con tempi di risposta garantiti.",
    },
  ];

  return (
      <section id="faq" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Domande frequenti
            </h2>
            <p className={`text-xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Tutto quello che devi sapere su Receiptia Genius
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        theme === 'dark'
                            ? 'bg-slate-900/50 border-primary/10 hover:border-primary/30'
                            : 'bg-white border-gray-200 hover:border-primary/30 shadow-md'
                    }`}
                >
                  <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                          openIndex === i
                              ? theme === 'dark' ? 'bg-primary/5' : 'bg-primary/5'
                              : ''
                      }`}
                  >
                    <h3 className={`text-lg font-semibold pr-8 ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.question}
                    </h3>
                    <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                            openIndex === i ? 'rotate-180' : ''
                        } ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}
                    />
                  </button>
                  <div
                      className={`transition-all duration-300 ease-in-out ${
                          openIndex === i
                              ? 'max-h-96 opacity-100'
                              : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                  >
                    <div className={`p-6 pt-0 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className={`mt-12 p-8 rounded-xl border text-center ${
              theme === 'dark'
                  ? 'bg-slate-900/30 border-primary/10'
                  : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Hai altre domande?
            </h3>
            <p className={`mb-6 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Il nostro team di supporto è sempre pronto ad aiutarti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                  onClick={() => alert("Apri la chat di supporto in-app o scrivici a support@receiptia.com")}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
              >
                Contatta il Supporto
              </button>
              <button
                  onClick={() => alert("Visita il nostro Centro Assistenza completo con guide e tutorial")}
                  className={`px-8 py-3 border font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                      theme === 'dark'
                          ? 'bg-slate-800 hover:bg-slate-700 border-primary/20 hover:border-primary/40 text-white'
                          : 'bg-white hover:bg-gray-50 border-gray-300 hover:border-primary text-slate-900'
                  }`}
              >
                Centro Assistenza
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}