# Receiptia Genius - Landing Page

## 🚀 Panoramica

Sito web moderno e responsive per Receiptia Genius, un'app di gestione finanziaria basata su AI che aiuta gli utenti a ottimizzare le loro spese e risparmiare denaro.

## ✨ Funzionalità Principali

### ✅ Problemi Risolti
- **Navigazione funzionante**: Link smooth scroll con offset corretto
- **Bottoni interattivi**: Tutti i CTA hanno azioni definite con alert informativi
- **Menu mobile**: Funziona correttamente con chiusura automatica
- **FAQ accordion**: Espansione/compressione fluida
- **Modal video**: Demo video con overlay funzionante
- **Animazioni**: Transizioni smooth e hover effects
- **Accessibility**: Focus states e ARIA labels
- **TypeScript**: Tipizzazione corretta per tutti i props

### 🎨 Miglioramenti Visivi
- Hover effects su tutti gli elementi interattivi
- Animazioni pulse e float per elementi decorativi
- Scale effects sui card hover
- Gradient backgrounds animati
- Shadow effects dinamici
- Transizioni fluide su tutti i componenti


### 📱 Responsive Design
- Mobile-first approach
- Breakpoints ottimizzati per tablet e desktop
- Menu mobile con animazioni
- Layout grids adattivi

## 🛠️ Tecnologie Utilizzate

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Lucide React** - Icone moderne
- **CSS Animations** - Animazioni custom

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia la versione di produzione
npm start
```

Il sito sarà disponibile su `http://localhost:3000`

## 📁 Struttura del Progetto

```
receiptia-genius/
├── src/
│   ├── app/
│   │   ├── globals.css       # Stili globali e animazioni
│   │   ├── layout.tsx         # Layout principale
│   │   └── page.tsx           # Home page
│   └── components/
│       ├── Navigation.tsx     # Header con menu
│       ├── Hero.tsx           # Sezione hero
│       ├── Features.tsx       # Funzionalità AI
│       ├── HowItWorks.tsx     # Come funziona
│       ├── Pricing.tsx        # Piani e prezzi
│       ├── Trust.tsx          # Sicurezza e fiducia
│       ├── FAQ.tsx            # Domande frequenti
│       ├── CTA.tsx            # Call to action
│       └── Footer.tsx         # Footer
├── public/                    # Asset statici
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎯 Componenti Principali

### Navigation
- Menu responsive con hamburger mobile
- Smooth scroll verso le sezioni
- Sticky header con blur effect
- CTA buttons prominenti

### Hero
- Headline impattante
- CTA buttons con azioni
- Stats cards
- Modal video demo
- Animazioni gradient

### Features
- 5 Pattern Detectors AI
- Card hover effects
- Icon animations
- CTA per scoprire di più

### HowItWorks
- 4 step process
- Connector lines tra gli step
- Esempio di insight generato
- Dashboard mockup

### Pricing
- 3 piani (Gratis, Pro, Family)
- Badge "Più Popolare"
- Feature lists con icone
- CTA per ogni piano
- Sezione enterprise

### Trust
- Badge di sicurezza
- Trust features
- Privacy statement
- Tempi di risposta garantiti

### FAQ
- Accordion interattivo
- 8 domande comuni
- CTA supporto e help center

### CTA
- Final call to action
- Trust indicators
- Gradient background animato

### Footer
- Brand info e contatti
- Link organizzati per categoria
- Social media links
- Legal links

## 🎨 Palette Colori

- **Primary**: `#38D594` (Verde smeraldo)
- **Primary Dark**: `#2bb57d`
- **Emerald**: `#10b981`
- **Slate 950**: `#020617`
- **Slate 900**: `#0f172a`
- **Slate 800**: `#1e293b`

## ⚡ Performance

- Lazy loading delle immagini
- Code splitting automatico (Next.js)
- CSS ottimizzato con Tailwind
- Animazioni GPU-accelerated
- Font system ottimizzati

## 🔧 Personalizzazione

### Modificare i Colori
Edita `tailwind.config.ts` e `globals.css` per cambiare la palette.

### Modificare i Contenuti
Tutti i testi sono hardcoded nei componenti per facilità di editing.

### Aggiungere Nuove Sezioni
Crea un nuovo componente in `src/components/` e importalo in `page.tsx`.

## 📱 Browser Supportati

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deploy

### Vercel (Raccomandato)
```bash
# Push su GitHub
git push origin main

# Deploy automatico con Vercel
# Collega il repo su vercel.com
```

### Altri Provider
Il progetto è compatibile con qualsiasi hosting che supporti Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Note di Sviluppo

- Gli alert() sono placeholder per le vere funzionalità
- Sostituisci gli alert con chiamate API reali
- Il video demo è un placeholder
- Aggiungi analytics (Google Analytics, Plausible, etc.)
- Implementa form di contatto funzionanti
- Connetti i social media links

## 🤝 Contribuire

Per contribuire al progetto:
1. Fork del repository
2. Crea un branch per la tua feature
3. Commit delle modifiche
4. Push al branch
5. Apri una Pull Request

## 📄 Licenza

© 2026 Mecapptronics Srl. Tutti i diritti riservati.

## 📧 Supporto

Per domande o supporto:
- Email: support@receiptia.com
- Tel: +39 800 123 456

---

**Fatto con ❤️ da Mecapptronics**
