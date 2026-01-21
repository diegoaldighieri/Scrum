"use client";

import { useState } from "react";
import { Menu, X, Receipt } from "lucide-react";

export default function Navigation({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-[#38D594]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#38D594] to-emerald-600 rounded-xl flex items-center justify-center">
              <Receipt className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Receiptia</div>
              <div className="text-xs text-[#38D594] font-semibold">GENIUS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-[#38D594] transition-colors font-medium">
              Funzionalità
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-[#38D594] transition-colors font-medium">
              Come Funziona
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-[#38D594] transition-colors font-medium">
              Piani
            </a>
            <a href="#faq" className="text-gray-300 hover:text-[#38D594] transition-colors font-medium">
              FAQ
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2.5 text-gray-300 hover:text-white transition-colors font-medium">
              Accedi
            </button>
            <button className="px-6 py-2.5 bg-[#38D594] hover:bg-emerald-500 text-slate-950 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#38D594]/20">
              Inizia Gratis
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#38D594]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 backdrop-blur-xl bg-slate-950/90 border-t border-[#38D594]/10">
          <a
            href="#features"
            className="block px-4 py-2 text-gray-300 hover:text-[#38D594] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Funzionalità
          </a>
          <a
            href="#how-it-works"
            className="block px-4 py-2 text-gray-300 hover:text-[#38D594] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Come Funziona
          </a>
          <a
            href="#pricing"
            className="block px-4 py-2 text-gray-300 hover:text-[#38D594] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Piani
          </a>
          <a
            href="#faq"
            className="block px-4 py-2 text-gray-300 hover:text-[#38D594] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-4 space-y-2">
            <button className="w-full px-6 py-2.5 text-gray-300 hover:text-white transition-colors font-medium text-center">
              Accedi
            </button>
            <button className="w-full px-6 py-2.5 bg-[#38D594] hover:bg-emerald-500 text-slate-950 font-semibold rounded-lg transition-all duration-300">
              Inizia Gratis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
