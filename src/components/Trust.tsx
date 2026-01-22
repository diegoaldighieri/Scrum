"use client";

import { Shield, Users, Award, Lock } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Trust() {
  const { theme } = useTheme();

  const trustBadges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sicurezza Garantita",
      description: "Crittografia end-to-end e conformità GDPR per proteggere i tuoi dati finanziari.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "50.000+ Utenti Attivi",
      description: "Migliaia di persone già risparmiano con Receiptia Genius ogni giorno.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rating 4.8/5",
      description: "Valutato come Best App for Personal Finance 2024 su App Store e Google Play.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy First",
      description: "I tuoi dati non vengono mai venduti a terze parti. Mai.",
    },
  ];

  const testimonials = [
    {
      name: "Marco R.",
      role: "Freelance Designer",
      image: "/avatar1.jpg",
      text: "Ho scoperto che spendevo €180 al mese in abbonamenti che non usavo più. Receiptia me li ha evidenziati tutti in una settimana!",
      rating: 5,
    },
    {
      name: "Sofia M.",
      role: "Madre di 2 figli",
      image: "/avatar2.jpg",
      text: "Gestire il budget familiare era un incubo. Ora so esattamente dove vanno i nostri soldi e abbiamo già risparmiato €500 in 3 mesi!",
      rating: 5,
    },
    {
      name: "Luca T.",
      role: "Studente Universitario",
      image: "/avatar3.jpg",
      text: "Perfetto per chi ha budget limitati. Le notifiche mi avvisano quando sto per sforare e mi suggeriscono alternative più economiche.",
      rating: 5,
    },
  ];

  const logos = [
    { name: "TechCrunch", src: "/logo-techcrunch.png" },
    { name: "Forbes", src: "/logo-forbes.png" },
    { name: "Wired", src: "/logo-wired.png" },
    { name: "The Next Web", src: "/logo-tnw.png" },
  ];

  return (
      <section className={`relative py-24 px-6 ${
          theme === 'dark' ? 'bg-slate-900/30' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Fidato da migliaia di utenti
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              La sicurezza e la privacy dei tuoi dati sono la nostra priorità assoluta.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {trustBadges.map((badge, i) => (
                <div
                    key={i}
                    className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                            ? 'bg-slate-900/50 border-primary/10 hover:border-primary/30'
                            : 'bg-gray-50 border-gray-200 hover:border-primary/30 shadow-md'
                    }`}
                >
                  <div className="text-primary mb-4">{badge.icon}</div>
                  <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {badge.title}
                  </h3>
                  <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {badge.description}
                  </p>
                </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h3 className={`text-3xl font-bold text-center mb-12 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Cosa dicono i nostri utenti
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                  <div
                      key={i}
                      className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                          theme === 'dark'
                              ? 'bg-slate-900/50 border-primary/10 hover:border-primary/30'
                              : 'bg-white border-gray-200 hover:border-primary/30 shadow-lg'
                      }`}
                  >
                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                          <svg
                              key={j}
                              className="w-5 h-5 text-amber-400 fill-current"
                              viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className={`mb-6 italic ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                      }`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className={`font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {testimonial.name}
                        </div>
                        <div className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Press Coverage */}
          <div className={`text-center p-12 rounded-xl border ${
              theme === 'dark'
                  ? 'bg-slate-900/30 border-primary/10'
                  : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Visto su
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {logos.map((logo, i) => (
                  <div
                      key={i}
                      className={`text-2xl font-bold ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      } hover:text-primary transition-colors`}
                  >
                    {logo.name}
                  </div>
              ))}
            </div>
          </div>

          {/* Security Certification */}
          <div className={`mt-12 p-8 rounded-xl border text-center ${
              theme === 'dark'
                  ? 'bg-slate-900/50 border-primary/10'
                  : 'bg-white border-gray-200 shadow-md'
          }`}>
            <div className="flex justify-center space-x-8 items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                GDPR Compliant
              </span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-primary" />
                <span className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                SSL Encrypted
              </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                ISO 27001
              </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}