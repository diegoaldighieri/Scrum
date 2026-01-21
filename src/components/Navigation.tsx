"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/90 backdrop-blur-lg border-b border-cyan-500/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.png" 
                alt="Receiptia Genius"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Receiptia</h1>
              <p className="text-xs text-cyan-300 font-semibold">GENIUS</p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="hover:text-cyan-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("features")} className="hover:text-cyan-400 transition-colors">Funzionalità</button>
            <button onClick={() => scrollToSection("analysis")} className="hover:text-cyan-400 transition-colors">Analisi</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-cyan-400 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection("download")} className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold">
              Scarica
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left hover:text-cyan-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left hover:text-cyan-400 transition-colors">Funzionalità</button>
            <button onClick={() => scrollToSection("analysis")} className="block w-full text-left hover:text-cyan-400 transition-colors">Analisi</button>
            <button onClick={() => scrollToSection("faq")} className="block w-full text-left hover:text-cyan-400 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection("download")} className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 w-full px-6 py-2 rounded-full font-semibold">
              Scarica
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
