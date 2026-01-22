"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const footerLinks = {
    product: [
      { name: "Funzionalità", href: "#features" },
      { name: "Come funziona", href: "#how-it-works" },
      { name: "Piani e Prezzi", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "Chi siamo", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carriere", href: "#" },
      { name: "Contatti", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Termini di Servizio", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
    resources: [
      { name: "Centro Assistenza", href: "#" },
      { name: "Guide e Tutorial", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "Status", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
      <footer className={`relative border-t ${
          theme === 'dark'
              ? 'bg-slate-950 border-primary/10'
              : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                      src="/logo.png"
                      alt="Receiptia Genius"
                      width={40}
                      height={40}
                      className="object-contain"
                  />
                </div>
                <div>
                  <div className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    Receiptia
                  </div>
                  <div className="text-xs text-primary font-semibold">GENIUS</div>
                </div>
              </div>
              <p className={`mb-6 max-w-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Il tuo coach finanziario tascabile. Analizza le tue abitudini di spesa con AI e risparmia fino a €200 al mese.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        aria-label={social.label}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            theme === 'dark'
                                ? 'bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-primary'
                                : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-primary border border-gray-200'
                        }`}
                    >
                      {social.icon}
                    </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className={`font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Prodotto
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                    <li key={i}>
                      <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className={`transition-colors ${
                              theme === 'dark'
                                  ? 'text-gray-400 hover:text-primary'
                                  : 'text-gray-600 hover:text-primary'
                          }`}
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className={`font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Azienda
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                    <li key={i}>
                      <a
                          href={link.href}
                          className={`transition-colors ${
                              theme === 'dark'
                                  ? 'text-gray-400 hover:text-primary'
                                  : 'text-gray-600 hover:text-primary'
                          }`}
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className={`font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Legale
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, i) => (
                    <li key={i}>
                      <a
                          href={link.href}
                          className={`transition-colors ${
                              theme === 'dark'
                                  ? 'text-gray-400 hover:text-primary'
                                  : 'text-gray-600 hover:text-primary'
                          }`}
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className={`font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Risorse
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, i) => (
                    <li key={i}>
                      <a
                          href={link.href}
                          className={`transition-colors ${
                              theme === 'dark'
                                  ? 'text-gray-400 hover:text-primary'
                                  : 'text-gray-600 hover:text-primary'
                          }`}
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={`border-t border-b py-8 mb-8 ${
              theme === 'dark' ? 'border-primary/10' : 'border-gray-200'
          }`}>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className={`text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Resta aggiornato
              </h3>
              <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Ricevi consigli finanziari, novità sul prodotto e offerte esclusive
              </p>
              <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Grazie per esserti iscritto! Riceverai presto la nostra newsletter.");
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="relative flex-1">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <input
                      type="email"
                      placeholder="La tua email"
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                          theme === 'dark'
                              ? 'bg-slate-900 border-primary/20 text-white placeholder-gray-500'
                              : 'bg-white border-gray-300 text-slate-900 placeholder-gray-400'
                      }`}
                  />
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 whitespace-nowrap"
                >
                  Iscriviti
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              © {new Date().getFullYear()} Mecapptronics Srl. Tutti i diritti riservati.
            </p>
            <div className="flex items-center space-x-6">
              <a
                  href="#"
                  className={`text-sm transition-colors ${
                      theme === 'dark'
                          ? 'text-gray-500 hover:text-primary'
                          : 'text-gray-600 hover:text-primary'
                  }`}
              >
                P.IVA 12345678901
              </a>
              <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}>
              •
            </span>
              <a
                  href="#"
                  className={`text-sm transition-colors ${
                      theme === 'dark'
                          ? 'text-gray-500 hover:text-primary'
                          : 'text-gray-600 hover:text-primary'
                  }`}
              >
                Made with ❤️ in Italy
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}