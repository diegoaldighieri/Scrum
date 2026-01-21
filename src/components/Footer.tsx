"use client";

import { Receipt, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkText: string) => {
    e.preventDefault();
    alert(`Navigazione verso: ${linkText}`);
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: string) => {
    e.preventDefault();
    alert(`Visitando il nostro profilo ${platform}!`);
  };

  return (
    <footer className="relative py-16 px-6 border-t border-primary/10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Receipt className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Receiptia</div>
                <div className="text-xs text-primary font-semibold">GENIUS</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              L'intelligenza artificiale al servizio delle tue finanze personali. Analizza, ottimizza e risparmia con Receiptia Genius.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:support@receiptia.com" 
                  className="hover:text-primary transition-colors"
                >
                  support@receiptia.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+39800123456" 
                  className="hover:text-primary transition-colors"
                >
                  +39 800 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
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
                      onClick={(e) => handleLinkClick(e, item)}
                      className="text-gray-400 hover:text-primary transition-colors text-sm block"
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
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm order-2 md:order-1 text-center md:text-left">
              © {currentYear} Receiptia by{" "}
              <a 
                href="https://mecapptronics.com" 
                className="text-primary hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Mecapptronics Srl
              </a>
              . Tutti i diritti riservati.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 order-1 md:order-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => handleSocialClick(e, social.label)}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-primary/20 border border-primary/10 hover:border-primary/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {["Privacy Policy", "Termini di Servizio", "Cookie Policy", "GDPR"].map((item, index, array) => (
              <div key={item} className="flex items-center gap-6">
                <a 
                  href="#" 
                  onClick={(e) => handleLinkClick(e, item)}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
                {index < array.length - 1 && <span>•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
