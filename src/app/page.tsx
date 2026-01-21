"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Analysis from "@/components/Analysis";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 light:from-gray-50 light:via-blue-50 light:to-gray-50 text-white dark:text-white light:text-gray-900 overflow-x-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      </div>

      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Features />
      <Analysis />
      <Pricing />
      <FAQ />
      <Download />
      <Footer />
    </div>
  );
}
