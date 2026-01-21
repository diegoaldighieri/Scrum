import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Receiptia Genius - Spendi meglio, vivi meglio",
  description: "Il tuo coach finanziario tascabile. Analizza le tue abitudini di spesa con AI e risparmia fino a €200 al mese.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
