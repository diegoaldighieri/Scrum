"use client";

import { Receipt, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const links = {
    Prodotto: ["Funzionalità", "Piani e Prezzi", "Sicurezza", "API"],
    Risorse: ["Centro Assistenza", "Blog", "Guide", "Webinar"],
    Azienda: ["Chi Siamo", "Carriere", "Press Kit", "Partnership"],
    Legale: ["Privacy Policy", "Termini di Servizio", "Cookie Policy", "GDPR"],
  };

  const socials = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-[#38D594]/10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#38D594] to-emerald-600 rounded-xl flex items-center justify-center">
                <Receipt className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Receiptia</div>
                <div className="text-xs text-[#38D594] font-semibold">GENIUS</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              L'intelligenza artificiale al servizio delle tue finanze personali. Analizza, ottimizza e risparmia con Receiptia Genius.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#38D594]" />
                <a href="mailto:support@receiptia.com" className="hover:text-[#38D594] transition-colors">
                  support@receiptia.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#38D594]" />
                <span>+39 328 872 9119</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#38D594]" />
                <span>Vicenza, Italia</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#38D594] transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#38D594]/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm order-2 md:order-1">
              © 2026 Receiptia by <a href="https://mecapptronics.com" className="text-[#38D594] hover:underline" target="_blank" rel="noopener noreferrer">Mecapptronics Srl</a>. Tutti i diritti riservati.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 order-1 md:order-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-[#38D594]/20 border border-[#38D594]/10 hover:border-[#38D594]/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#38D594] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#38D594] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#38D594] transition-colors">
              Termini di Servizio
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#38D594] transition-colors">
              Cookie Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#38D594] transition-colors">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
