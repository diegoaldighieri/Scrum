"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

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
  };

  return (
      <nav className={`fixed w-full z-50 backdrop-blur-xl ${
          theme === 'dark'
              ? 'bg-slate-900/30 border-b border-primary/20'
              : 'bg-white/80 border-b border-primary/20'
      } shadow-lg transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
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
                <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Receiptia
                </div>
                <div className="text-xs text-primary font-semibold">GENIUS</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, "#features")}
                  className={`${
                      theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-600 hover:text-primary'
                  } transition-colors font-medium`}
              >
                Funzionalità
              </a>
              <a
                  href="#how-it-works"
                  onClick={(e) => handleLinkClick(e, "#how-it-works")}
                  className={`${
                      theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-600 hover:text-primary'
                  } transition-colors font-medium`}
              >
                Come funziona
              </a>
              <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, "#pricing")}
                  className={`${
                      theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-600 hover:text-primary'
                  } transition-colors font-medium`}
              >
                Piani
              </a>
              <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className={`${
                      theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-600 hover:text-primary'
                  } transition-colors font-medium`}
              >
                FAQ
              </a>
            </div>

            {/* CTA Buttons + Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                  onClick={toggleTheme}
                  className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                          : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                  }`}
                  aria-label={theme === 'dark' ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                  onClick={() => alert("Funzionalità di login in arrivo!")}
                  className={`px-6 py-2.5 ${
                      theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'
                  } transition-colors font-medium`}
              >
                Accedi
              </button>
              <button
                  onClick={() => alert("Inizia la tua prova gratuita di 14 giorni!")}
                  className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
              >
                Inizia gratis
              </button>
            </div>

            {/* Mobile menu button + Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all ${
                      theme === 'dark'
                          ? 'bg-slate-800 text-yellow-400'
                          : 'bg-gray-100 text-slate-700'
                  }`}
                  aria-label={theme === 'dark' ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 ${
                      theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-600 hover:text-primary'
                  } transition-colors`}
                  aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className={`px-6 py-4 space-y-3 backdrop-blur-xl ${
              theme === 'dark'
                  ? 'bg-slate-900/30 border-t border-primary/10'
                  : 'bg-white/90 border-t border-primary/10'
          }`}>
            <a
                href="#features"
                onClick={(e) => handleLinkClick(e, "#features")}
                className={`block px-4 py-2 ${
                    theme === 'dark'
                        ? 'text-gray-300 hover:text-primary hover:bg-primary/5'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                } rounded-lg transition-colors`}
            >
              Funzionalità
            </a>
            <a
                href="#how-it-works"
                onClick={(e) => handleLinkClick(e, "#how-it-works")}
                className={`block px-4 py-2 ${
                    theme === 'dark'
                        ? 'text-gray-300 hover:text-primary hover:bg-primary/5'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                } rounded-lg transition-colors`}
            >
              Come funziona
            </a>
            <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "#pricing")}
                className={`block px-4 py-2 ${
                    theme === 'dark'
                        ? 'text-gray-300 hover:text-primary hover:bg-primary/5'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                } rounded-lg transition-colors`}
            >
              Piani
            </a>
            <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className={`block px-4 py-2 ${
                    theme === 'dark'
                        ? 'text-gray-300 hover:text-primary hover:bg-primary/5'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                } rounded-lg transition-colors`}
            >
              FAQ
            </a>
            <div className="pt-4 space-y-2 border-t border-primary/10">
              <button
                  onClick={() => {
                    setIsOpen(false);
                    alert("Funzionalità di login in arrivo!");
                  }}
                  className={`w-full px-6 py-2.5 ${
                      theme === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-slate-800'
                          : 'text-gray-600 hover:text-slate-900 hover:bg-gray-100'
                  } rounded-lg transition-colors font-medium text-center`}
              >
                Accedi
              </button>
              <button
                  onClick={() => {
                    setIsOpen(false);
                    alert("Inizia la tua prova gratuita di 14 giorni!");
                  }}
                  className="w-full px-6 py-2.5 bg-primary hover:bg-primary/90 text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Inizia gratis
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}