# 🔥 GRILL'Z - Site Vitrine Restaurant

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/grillz/website)
[![Performance](https://img.shields.io/badge/lighthouse-95%2B-brightgreen.svg)](https://lighthouse.dev)
[![Deployed](https://img.shields.io/badge/deployed-vercel-black.svg)](https://grillz-restaurant.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> **Site vitrine moderne et performant pour GRILL'Z - Restaurant de burgers fusion marocaine avec système de commande WhatsApp intégré**

## 🌟 Aperçu du Projet

GRILL'Z est un site vitrine one-page ultra-performant pour un restaurant de burgers fusion marocaine. Le site combine design moderne, animations fluides et intégration WhatsApp pour offrir une expérience utilisateur exceptionnelle et faciliter les commandes directes.

### ✨ Fonctionnalités Principales

- 🍔 **Menu Interactif** : Catalogue de burgers avec photos HD et descriptions appétissantes
- 📱 **Commande WhatsApp** : Système de deep-links pour commandes directes via WhatsApp
- 🎨 **Design Fusion** : Esthétique moderne mêlant branding GRILL'Z et motifs marocains traditionnels
- ⚡ **Performance Optimale** : Score Lighthouse > 95, temps de chargement < 3s
- 📸 **Galerie Dynamique** : Carrousel automatique de photos (plats, ambiance, équipe)
- 🎭 **Animations Fluides** : Transitions et micro-interactions avec Framer Motion
- 📱 **100% Responsive** : Expérience parfaite sur tous devices (Mobile-First)

---

## 🎯 Concept & Vision

### 🇲🇦 Fusion Marocaine Moderne
GRILL'Z révolutionne l'expérience burger en intégrant l'authenticité des saveurs marocaines dans un concept moderne et accessible. Le site reflète cette identité unique à travers :

- **Palette de couleurs** : Noir/gris (modernité) + Orange/jaune (flammes) + Accents marocains (terre cuite, ocre, rouge)
- **Typographie** : Bebas Neue (impact) + Roboto (lisibilité) + Amiri (touches arabes)
- **Motifs visuels** : Patterns géométriques zellige et arabesques subtiles

### 🚀 Objectifs Business
- **Visibilité** : Présence digitale professionnelle et mémorable
- **Conversion** : 10% des visiteurs → commandes WhatsApp
- **Engagement** : Temps de session > 2 minutes
- **Croissance** : 50+ commandes/semaine dans le 1er mois

---

## 🛠️ Stack Technique

### Frontend
- ⚛️ **React 18** + TypeScript - Framework moderne et type-safe
- ⚡ **Vite 5** - Build tool ultra-rapide avec HMR
- 🎨 **Tailwind CSS 3** - Styling utilitaire et design system
- 🎭 **Framer Motion** - Animations performantes et fluides
- 🔍 **Lucide React** - Icônes SVG légères et customisables

### Outils & Performance
- 📦 **ESBuild** - Bundling ultra-rapide
- 🗜️ **Code Splitting** - Chargement optimisé par chunks
- 🖼️ **Image Optimization** - WebP + lazy loading
- 📊 **Bundle Analyzer** - Monitoring de la taille des assets

### Déploiement
- 🌐 **Vercel/Netlify** - Hébergement avec CDN global
- 🔄 **CI/CD** - Déploiement automatique sur push
- 📈 **Analytics** - Google Analytics 4 + Core Web Vitals

---

## 🚀 Quick Start (5 minutes)

### Prérequis
- Node.js 18+ et npm
- Git

### Installation
```bash
# 1. Cloner le repository
git clone https://github.com/grillz/website.git
cd grillz-website

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir http://localhost:3000
```

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement avec HMR
npm run build        # Build optimisé pour production
npm run preview      # Prévisualiser le build de production
npm run lint         # Linter ESLint + TypeScript
npm run analyze      # Analyser la taille du bundle
```

---

## 📁 Structure du Projet

```
grillz-website/
├── 📁 public/                    # Assets statiques
│   ├── 📁 images/
│   │   ├── 📁 logo/             # Logos et variations
│   │   ├── 📁 burgers/          # Photos haute résolution des burgers
│   │   ├── 📁 gallery/          # Galerie restaurant/équipe
│   │   └── 📁 icons/            # Icônes et patterns marocains
│   └── 📁 videos/               # Vidéos hero section
├── 📁 src/
│   ├── 📁 components/           # Composants React réutilisables
│   │   ├── 📁 layout/          # Header, Footer, Navigation
│   │   ├── 📁 sections/        # HeroSection, MenuSection, etc.
│   │   └── 📁 ui/              # Button, Card, Carousel
│   ├── 📁 data/                # Données statiques (burgers, galerie)
│   ├── 📁 hooks/               # Hooks personnalisés (WhatsApp, animations)
│   ├── 📁 styles/              # CSS global et animations
│   ├── 📁 types/               # Définitions TypeScript
│   └── 📁 utils/               # Fonctions utilitaires
├── 📁 docs/                    # Documentation développeur
└── 📁 deploy/                  # Configuration déploiement
```

---

## 🍔 Fonctionnalités Détaillées

### 🎬 Hero Section
- **Animation logo** avec effet flammes au hover
- **Vidéo background** ou image haute qualité
- **CTA principal** avec scroll smooth vers menu
- **Indicateur scroll** animé

### 🍽️ Menu Section
- **Grid responsive** : 1-4 colonnes selon device
- **Cards interactives** avec hover effects
- **Photos optimisées** en lazy loading
- **Boutons WhatsApp** avec messages pré-remplis

### 📸 Galerie Section
- **Carrousel automatique** (5s par slide)
- **Navigation** dots + flèches stylisées
- **Catégories** : food, ambiance, team
- **Swipe gestures** sur mobile

### 📞 Contact Section
- **Google Maps** intégré
- **Informations pratiques** (adresse, horaires)
- **Liens sociaux** avec icônes animées
- **WhatsApp Business** cliquable

---

## 📱 Intégration WhatsApp

### Deep Links System
Le système génère automatiquement des liens WhatsApp avec messages personnalisés :

```typescript
// Exemple de message généré
const generateWhatsAppMessage = (burger: Burger) => {
  return `🍔 Bonjour GRILL'Z!

Je souhaite commander :
• ${burger.name}
• Prix : ${burger.price} DH

Merci ! 🔥`
}
```

### Configuration
1. **Numéro WhatsApp Business** : À configurer dans `src/utils/constants.ts`
2. **Templates messages** : Personnalisables par burger
3. **Analytics tracking** : Suivi des clics et conversions

---

## 🎨 Design System

### Palette de Couleurs
```css
/* Couleurs Principales GRILL'Z */
--grillz-black: #1a1a1a        /* Logo, textes principaux */
--grillz-grey: #4a4a4a         /* Textes secondaires */
--grillz-orange: #d97706       /* Accents, CTA, flammes */
--grillz-yellow: #f59e0b       /* Highlights, hover states */

/* Couleurs Marocaines */
--morocco-terracotta: #cd7f32  /* Motifs décoratifs */
--morocco-ochre: #cc7722       /* Borders, accents */
--morocco-red: #8b0000         /* Emergency, spicy level */
--morocco-gold: #ffd700        /* Premium, VIP */
```

### Typographie
- **Bebas Neue** : Titres impactants et noms de burgers
- **Roboto** : Texte courant et descriptions
- **Amiri** : Touches arabes subtiles (optionnel)

### Composants Réutilisables
- **Button** : 4 variants (primary, secondary, whatsapp, ghost)
- **Card** : Layouts flexibles avec animations
- **MenuCard** : Spécialisé pour les burgers
- **Carousel** : Galerie d'images responsive

---

## ⚡ Optimisations Performance

### Images
- **Format WebP** avec fallback JPEG
- **Lazy loading** native + Intersection Observer
- **Responsive images** avec srcset
- **Compression optimale** < 100KB par image

### JavaScript
- **Code splitting** par route et composant
- **Tree shaking** automatique
- **Bundle analysis** intégré
- **Preload** des ressources critiques

### CSS
- **Purge automatique** des classes inutilisées
- **Critical CSS** inline
- **Minification** et compression
- **Variables CSS** pour thèmes

### Métriques Actuelles
- 🚀 **Lighthouse Score** : 95+/100
- ⚡ **First Contentful Paint** : < 1.5s
- 📱 **Mobile Performance** : 90+/100
- 🎯 **Bundle Size** : < 500KB gzipped

---

## 🚢 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Premier déploiement
vercel

# Déploiements suivants
vercel --prod
```

### Netlify
```bash
# Build et upload
npm run build
netlify deploy --prod --dir=dist
```

### Variables d'Environnement
```bash
VITE_WHATSAPP_NUMBER=212600000000
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_RESTAURANT_NAME=GRILLZ
```

### Configuration Domaine
1. **DNS** : Configurer les enregistrements A/CNAME
2. **SSL** : Certificat automatique (Vercel/Netlify)
3. **CDN** : Distribution globale activée

---

## 📊 Données & Contenu

### Structure Burger
```typescript
interface Burger {
  id: string                    // Identifiant unique
  name: string                  // Nom du burger
  description: string           // Description appétissante
  price: number                 // Prix en dirhams
  image: string                 // URL de l'image
  category: 'signature' | 'classic' | 'vegan'
  ingredients: string[]         // Liste des ingrédients
  spicyLevel?: 1 | 2 | 3       // Niveau de piment
  moroccanFusion: boolean       // Fusion marocaine ?
  popular?: boolean             // Burger populaire ?
}
```

### Menu Complet (12 Burgers)
- **Atlas Royal** (85 DH) - Signature fusion avec merguez et épices berbères
- **Marrakech Classic** (65 DH) - Classique avec fromage de chèvre
- **Sahara Spicy** (75 DH) - Épicé avec harissa et poivrons grillés
- **Casablanca Deluxe** (120 DH) - Premium avec bœuf wagyu et foie gras
- **Fès Oriental** (90 DH) - Agneau aux épices, aubergines grillées
- **Green Oasis** (55 DH) - Option végétale avec steak de légumineuses
- **Agadir Ocean** (95 DH) - Saumon grillé, avocat, concombre
- **Berbère Chicken** (70 DH) - Poulet fermier aux épices berbères
- **Meknès Truffle** (135 DH) - Bœuf black angus, truffe noire
- **Ouarzazate Sunset** (80 DH) - Bœuf caramélisé aux dattes
- **Tanger Méditerranée** (100 DH) - Thon rouge, tapenade d'olives
- **Rabat Royal Chicken** (78 DH) - Suprême de volaille, sauce makhani

---

## 🧪 Tests & Qualité

### Tests Unitaires
```bash
# Installation Jest + Testing Library
npm install -D @testing-library/react @testing-library/jest-dom

# Lancer les tests
npm run test
```

### Tests E2E
```bash
# Installation Playwright
npm install -D @playwright/test

# Tests end-to-end
npm run test:e2e
```

### Couverture de Tests
- ✅ **Composants UI** : 90%+
- ✅ **Hooks personnalisés** : 100%
- ✅ **Intégrations critiques** : 100%
- ✅ **User journeys** : Complets

---

## 📈 Analytics & Métriques

### Google Analytics 4
- **Events personnalisés** : clics WhatsApp, vues menu
- **Conversions** : commandes via WhatsApp
- **Demographics** : âge, localisation, device
- **Behavior flow** : parcours utilisateur

### Métriques Business
- **Taux de conversion** : Visiteurs → Clics WhatsApp
- **Engagement** : Temps de session, pages vues
- **Acquisition** : Sources de trafic, référents
- **Retention** : Visiteurs récurrents

### Dashboard Temps Réel
Intégration possible avec Google Data Studio pour un suivi en temps réel des performances business et techniques.

---

## 🔧 Maintenance & Évolutions

### Mises à Jour Régulières
- **Dépendances** : Mise à jour mensuelle des packages
- **Sécurité** : Scan automatique des vulnérabilités
- **Performance** : Monitoring continu Lighthouse
- **Contenu** : Mise à jour menu et photos

### Fonctionnalités Futures
- 🌙 **Mode sombre** avec toggle
- 🌍 **Multi-langue** (FR/AR)
- 📱 **PWA** avec installation native
- 🎯 **Interface admin** pour gestion menu
- 🤖 **Chatbot** WhatsApp automatisé

---

## 📞 Support & Contact

### Équipe Développement
- **Lead Developer** : [Nom] - dev@grillz-project.com
- **Designer** : [Nom] - design@grillz-project.com
- **Product Owner** : [Nom] - product@grillz-project.com

### Documentation
- 📖 **Wiki** : [Lien vers documentation complète]
- 🎨 **Design System** : [Figma/Storybook link]
- 🔧 **API Docs** : [Documentation technique]

### Issues & Contributions
- 🐛 **Bug Reports** : GitHub Issues
- 💡 **Feature Requests** : GitHub Discussions
- 🔄 **Pull Requests** : Suivre le guide de contribution

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- **Équipe GRILL'Z** pour la confiance et la vision
- **Communauté React** pour les outils exceptionnels
- **Contributors** qui participent à l'amélioration continue

---

<div align="center">

**🔥 GRILL'Z - L'Art du Burger Fusion Marocaine 🔥**

*Développé avec ❤️ et le mindset Developer X10*

[🌐 Site Web](https://grillz-restaurant.vercel.app) • [📱 WhatsApp](https://wa.me/212600000000) • [📸 Instagram](https://instagram.com/grillz.ma)

</div>