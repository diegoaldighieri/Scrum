# 🚀 Quick Start - Receiptia Genius

## Setup in 5 Minuti

### 1️⃣ Prerequisiti
```bash
# Node.js 18+ richiesto
node --version

# npm o yarn
npm --version
```

### 2️⃣ Installazione
```bash
# Naviga nella cartella del progetto
cd receiptia-genius

# Installa le dipendenze
npm install
```

### 3️⃣ Sviluppo
```bash
# Avvia il server di sviluppo
npm run dev

# Apri il browser su
# http://localhost:3000
```

### 4️⃣ Build
```bash
# Crea la build di produzione
npm run build

# Testa la build
npm start
```

### 5️⃣ Deploy

#### Vercel (1-Click Deploy)
1. Push il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Deploy automatico! 🎉

#### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

## 🎯 Cosa Funziona

### ✅ Navigation
- Scroll smooth verso tutte le sezioni
- Menu mobile completamente funzionante
- CTA "Inizia Gratis" e "Accedi"

### ✅ Hero
- Bottone "Inizia Gratis" → Alert informativo
- Bottone "Guarda Demo" → Modal video
- Stats cards animate

### ✅ Features
- 5 Pattern Detectors con hover effects
- CTA "Scopri Tutto" funzionante

### ✅ Pricing
- 3 piani con CTA individuali
- Bottone "Contatta Sales" funzionante

### ✅ FAQ
- Accordion completamente interattivo
- CTA Supporto e Help Center funzionanti

### ✅ Footer
- Tutti i link con feedback
- Social media links pronti

## 🔧 Personalizzazione Rapida

### Cambiare il Colore Primario
```css
/* src/app/globals.css */
:root {
  --primary: #38D594; /* Il tuo colore qui */
}
```

### Modificare il Testo
Tutti i componenti in `src/components/` hanno il testo hardcoded.
Modifica direttamente nei file `.tsx`.

### Aggiungere Nuove Sezioni
1. Crea `src/components/NuovaSezione.tsx`
2. Importa in `src/app/page.tsx`
3. Aggiungi al layout

## 📱 Test Responsive

### Desktop
```
Chrome DevTools → Responsive Mode
- Desktop: 1920x1080
- Laptop: 1440x900
- Tablet: 768x1024
```

### Mobile
```
- iPhone 14 Pro: 393x852
- Samsung Galaxy: 360x800
```

## 🐛 Troubleshooting

### Errore "Module not found"
```bash
rm -rf node_modules
npm install
```

### Port 3000 già in uso
```bash
npm run dev -- -p 3001
```

### Build fallisce
```bash
npm run build -- --debug
```

## 🎨 Customization Checklist

- [ ] Colori (globals.css + tailwind.config.ts)
- [ ] Logo (sostituire icona Receipt)
- [ ] Contenuti testuali
- [ ] Immagini (aggiungi in /public)
- [ ] Link social media reali
- [ ] Email e telefono reali
- [ ] Google Analytics ID
- [ ] Favicon

## 📦 Dipendenze Principali

```json
{
  "react": "^18.3.1",
  "next": "^14.2.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.263.1"
}
```

## 🔗 Link Utili

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deploy](https://vercel.com)

## 💡 Pro Tips

1. **Hot Reload**: Salva i file e vedi i cambiamenti istantaneamente
2. **TypeScript**: Gli errori vengono mostrati in tempo reale
3. **Tailwind**: Usa intellisense per le classi CSS
4. **Components**: Ogni sezione è un componente separato

## 🚀 Prossimi Passi

1. Sostituisci gli `alert()` con vere funzionalità
2. Connetti un backend/API
3. Aggiungi Google Analytics
4. Implementa form di contatto
5. Aggiungi immagini reali
6. Setup SEO completo
7. Test di performance
8. Deploy in produzione!

---

**Buon coding! 🎉**

Per domande: [support@receiptia.com](mailto:support@receiptia.com)
