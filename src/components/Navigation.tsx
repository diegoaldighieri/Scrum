"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-lg border-b border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="Receiptia Genius"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30 transition-all duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Receiptia
              </h1>
              <p className="text-xs text-cyan-300 dark:text-cyan-300 light:text-cyan-600 font-semibold">GENIUS</p>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors relative group"
            >
              Funzionalità
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("analysis")} 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors relative group"
            >
              Analisi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors relative group"
            >
              Prezzi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <ThemeToggle />
            
            <button 
              onClick={() => scrollToSection("download")} 
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold hover:scale-105"
            >
              Scarica
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 dark:text-gray-300 light:text-gray-700">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-lg border-t border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200 animate-fade-in">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors py-2">
              Funzionalità
            </button>
            <button onClick={() => scrollToSection("analysis")} className="block w-full text-left text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors py-2">
              Analisi
            </button>
            <button onClick={() => scrollToSection("pricing")} className="block w-full text-left text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors py-2">
              Prezzi
            </button>
            <button onClick={() => scrollToSection("faq")} className="block w-full text-left text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors py-2">
              FAQ
            </button>
            <button onClick={() => scrollToSection("download")} className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 w-full px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Scarica
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
