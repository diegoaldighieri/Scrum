"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            theme === 'dark'
                ? 'bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white'
                : 'bg-linear-to-br from-white via-gray-50 to-white text-slate-900'
        }`}>
            {/* Subtle background gradient */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className={`absolute top-0 right-0 w-200 h-200 ${
                    theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
                } rounded-full blur-3xl animate-pulse-slow`}></div>
                <div className={`absolute bottom-0 left-0 w-150 h-150 ${
                    theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
                } rounded-full blur-3xl animate-pulse-slow`} style={{ animationDelay: '1s' }}></div>
            </div>

            <Navigation />
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <Trust />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
}