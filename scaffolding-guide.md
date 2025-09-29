# 🚀 GRILL'Z - Guide de Scaffolding & Setup

## ⚡ INITIALISATION RAPIDE (5 minutes)

### Commandes d'initialisation
```bash
# 1. Créer le projet Vite + React
npm create vite@latest grillz-website -- --template react-ts

# 2. Naviguer dans le dossier
cd grillz-website

# 3. Installer les dépendances
npm install

# 4. Installer les packages additionnels
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react
npm install @types/node

# 5. Initialiser Tailwind
npx tailwindcss init -p
```

---

## 📁 STRUCTURE DE PROJET COMPLÈTE

### Arborescence finale
```
grillz-website/
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 📁 logo/
│   │   │   ├── grillz-logo.svg
│   │   │   ├── grillz-flame.svg
│   │   │   └── grillz-full.png
│   │   ├── 📁 burgers/
│   │   │   ├── atlas-royal.jpg
│   │   │   ├── marrakech-classic.jpg
│   │   │   ├── sahara-spicy.jpg
│   │   │   └── [... autres burgers]
│   │   ├── 📁 gallery/
│   │   │   ├── restaurant-1.jpg
│   │   │   ├── team-action.jpg
│   │   │   └── grill-flames.jpg
│   │   └── 📁 icons/
│   │       ├── whatsapp.svg
│   │       └── moroccan-pattern.svg
│   ├── 📁 videos/
│   │   └── hero-background.mp4
│   ├── favicon.ico
│   └── robots.txt
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── 📁 sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── 📁 ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── MenuCard.tsx
│   │       └── Carousel.tsx
│   ├── 📁 styles/
│   │   ├── index.css
│   │   ├── components.css
│   │   └── animations.css
│   ├── 📁 utils/
│   │   ├── whatsapp.ts
│   │   ├── animations.ts
│   │   └── constants.ts
│   ├── 📁 data/
│   │   ├── burgers.ts
│   │   ├── gallery.ts
│   │   └── restaurant-info.ts
│   ├── 📁 hooks/
│   │   ├── useWhatsApp.ts
│   │   ├── useScrollReveal.ts
│   │   └── useImageLazy.ts
│   ├── 📁 types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── 📁 docs/
│   ├── DESIGN.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── README.md
```

---

## ⚙️ CONFIGURATIONS ESSENTIELLES

### 1. Tailwind Config (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grillz': {
          black: '#1a1a1a',
          grey: '#4a4a4a', 
          orange: '#d97706',
          yellow: '#f59e0b'
        },
        'morocco': {
          terracotta: '#cd7f32',
          ochre: '#cc7722',
          red: '#8b0000',
          gold: '#ffd700'
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['Roboto', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'serif']
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite'
      },
      backgroundImage: {
        'zellige': "url('data:image/svg+xml,...')",
        'moroccan-pattern': "url('/images/icons/moroccan-pattern.svg')",
        'hero-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #d97706 100%)'
      }
    },
  },
  plugins: [],
}
```

### 2. Vite Config (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@data': resolve(__dirname, 'src/data'),
      '@types': resolve(__dirname, 'src/types'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
```

### 3. TypeScript Config (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@data/*": ["src/data/*"],
      "@types/*": ["src/types/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 📦 PACKAGE.JSON SETUP

### Scripts optimisés
```json
{
  "name": "grillz-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "analyze": "npx vite-bundle-analyzer",
    "deploy:vercel": "vercel --prod",
    "deploy:netlify": "netlify deploy --prod --dir=dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.5",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@typescript-eslint/eslint-plugin": "^6.10.0",
    "@typescript-eslint/parser": "^6.10.0",
    "@vitejs/plugin-react": "^4.1.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.2.2",
    "vite": "^5.0.0"
  }
}
```

---

## 🎨 FICHIERS CSS DE BASE

### 1. CSS Principal (`src/styles/index.css`)
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Variables CSS personnalisées */
:root {
  --grillz-black: #1a1a1a;
  --grillz-grey: #4a4a4a;
  --grillz-orange: #d97706;
  --grillz-yellow: #f59e0b;
  
  --morocco-terracotta: #cd7f32;
  --morocco-ochre: #cc7722;
  --morocco-red: #8b0000;
  --morocco-gold: #ffd700;
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', system-ui, sans-serif;
  line-height: 1.6;
  color: var(--grillz-black);
  background-color: #ffffff;
}

/* Utility classes */
.text-gradient {
  background: linear-gradient(135deg, var(--grillz-orange), var(--grillz-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.container-grillz {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section-padding {
  @apply py-16 lg:py-24;
}
```

### 2. Animations CSS (`src/styles/animations.css`)
```css
/* Keyframes personnalisées */
@keyframes flame {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.05) rotate(1deg); }
  50% { transform: scale(1.1) rotate(-1deg); }
  75% { transform: scale(1.05) rotate(0.5deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSoft {
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.8;
    transform: scale(1.02);
  }
}

@keyframes zelllige-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Classes d'animation */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(217, 119, 6, 0.15);
}
```

---

## 🗂️ FICHIERS DE DONNÉES TYPES

### 1. Types TypeScript (`src/types/index.ts`)
```typescript
export interface Burger {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'signature' | 'classic' | 'vegan'
  ingredients: string[]
  allergens?: string[]
  spicyLevel?: 1 | 2 | 3
  moroccanFusion: boolean
  popular?: boolean
}

export interface GalleryItem {
  id: string
  image: string
  alt: string
  category: 'food' | 'ambiance' | 'team'
  caption?: string
}

export interface RestaurantInfo {
  name: string
  slogan: string
  description: string
  address: string
  phone: string
  whatsapp: string
  hours: {
    [key: string]: string
  }
  socialMedia: {
    instagram?: string
    facebook?: string
    tiktok?: string
  }
}

export interface WhatsAppMessage {
  burger: Burger
  customerMessage?: string
}
```

### 2. Données Burgers (`src/data/burgers.ts`)
```typescript
import { Burger } from '@types'

export const burgers: Burger[] = [
  {
    id: 'atlas-royal',
    name: 'Atlas Royal',
    description: 'Notre signature ! Steak de bœuf, merguez artisanale, épices berbères, oignons caramélisés au miel',
    price: 85,
    image: '/images/burgers/atlas-royal.jpg',
    category: 'signature',
    ingredients: ['Pain brioche artisanal', 'Steak de bœuf 180g', 'Merguez épicée', 'Ras el hanout', 'Oignons au miel'],
    spicyLevel: 2,
    moroccanFusion: true,
    popular: true
  },
  {
    id: 'marrakech-classic',
    name: 'Marrakech Classic',
    description: 'Le classique revisité ! Bœuf grillé, fromage de chèvre, tomates confites, basilic frais',
    price: 65,
    image: '/images/burgers/marrakech-classic.jpg',
    category: 'classic',
    ingredients: ['Pain sesame', 'Bœuf grillé 150g', 'Fromage de chèvre', 'Tomates confites', 'Basilic'],
    spicyLevel: 1,
    moroccanFusion: false
  },
  // ... autres burgers
]
```

---

## 🚀 COMMANDES DE DÉVELOPPEMENT

### Workflow quotidien
```bash
# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

# Analyser le bundle
npm run analyze

# Lint du code
npm run lint
```

### Setup initial complet (script bash)
```bash
#!/bin/bash
# setup-grillz.sh

echo "🔥 Initialisation GRILL'Z Website..."

# Créer le projet
npm create vite@latest grillz-website -- --template react-ts
cd grillz-website

# Installer les dépendances
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react @types/node

# Initialiser Tailwind
npx tailwindcss init -p

# Créer la structure de dossiers
mkdir -p src/{components/{layout,sections,ui},styles,utils,data,hooks,types}
mkdir -p public/images/{logo,burgers,gallery,icons}
mkdir -p public/videos
mkdir -p docs

echo "✅ Projet GRILL'Z initialisé avec succès !"
echo "📁 Structure créée, dépendances installées"
echo "🚀 Prochaines étapes :"
echo "   1. Configurer Tailwind (colors, fonts)"
echo "   2. Créer les composants de base"
echo "   3. Intégrer les données"
echo "   4. Développer les sections"

# Lancer le serveur de dev
npm run dev
```

---

## 🔧 CONFIGURATION DÉPLOIEMENT

### Vercel (`vercel.json`)
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options", 
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Netlify (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

---

*Guide de Scaffolding GRILL'Z - Setup Developer X10 🚀*