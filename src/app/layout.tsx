"use client";

import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <head>
            <title>Receiptia Genius - Spendi meglio, vivi meglio</title>
            <meta name="description" content="Il tuo coach finanziario tascabile. Analizza le tue abitudini di spesa con AI e risparmia fino a €200 al mese." />
            <meta name="keywords" content="finanza personale, risparmio, budget, AI, scontrini" />
            <meta name="author" content="Mecapptronics Srl" />
            <meta property="og:title" content="Receiptia Genius - Spendi meglio, vivi meglio" />
            <meta property="og:description" content="Analizza le tue abitudini di spesa con AI e risparmia fino a €200 al mese." />
            <meta property="og:type" content="website" />
        </head>
        <body className="antialiased">
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}