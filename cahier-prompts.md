# 🤖 GRILL'Z - Cahier de Prompts AI

## 🎯 PROMPTS GENSPARK (Planning & Wireframes)

### Prompt #1: Plan Architectural
```
Génère un plan architectural détaillé pour GRILL'Z, un site vitrine one-page de restaurant de burgers fusion marocaine avec commande WhatsApp.

Contexte:
- Restaurant: GRILL'Z (burgers fusion marocaine)
- Objectif: Site vitrine + commande directe WhatsApp
- Style: Moderne + motifs marocains (noir, gris, orange, jaune)

Demande:
1. Structure de page complète avec sections
2. Wireframes desktop et mobile
3. Flux utilisateur depuis arrivée jusqu'à commande WhatsApp
4. Hiérarchie visuelle et navigation
5. Points de conversion critiques

Livrables souhaités:
- Plan de site interactif
- Wireframes basse-fidélité
- User journey map
- Architecture de l'information
```

### Prompt #2: Backlog Priorisé
```
Crée un backlog développement pour GRILL'Z avec estimation d'effort et priorisation MoSCoW.

Contraintes projet:
- Budget: 20h de développement
- Stack: React/Vite + Tailwind + Framer Motion
- Fonctionnalité clé: Integration WhatsApp
- Délai: Livraison en 1 semaine

Sections à couvrir:
- Hero avec animation logo
- Menu interactif avec photos HD
- Galerie carrousel automatique
- À propos + Contact

Génère:
1. 15+ user stories avec critères d'acceptation
2. Estimation effort (S/M/L/XL)
3. Priorisation MoSCoW
4. Sprint planning sur 4 sprints
5. Dépendances entre tâches
```

---

## 🎨 PROMPTS LOVABLE/BASE44 (Prototypage No-Code)

### Prompt #3: Interface Hero Section
```
Crée un prototype interactif pour la section Hero de GRILL'Z:

Design Requirements:
- Logo GRILL'Z centré avec animation flammes au hover
- Background: Gradient noir/orange avec motifs géométriques marocains subtils
- Slogan principal: "L'Art du Burger Fusion Marocaine"
- Sous-titre: "Saveurs authentiques, créations modernes"
- CTA primaire: "Découvrir notre Menu" (scroll smooth vers section menu)
- Indicateur scroll animé en bas

Interactions:
- Animation d'entrée logo (scale + rotate)
- Particles effect orange/jaune en arrière-plan
- Hover states sur CTA avec transition 300ms
- Parallax subtil sur scroll

Style:
- Typography: Bebas Neue pour titre, Roboto pour sous-titre
- Couleurs: #1a1a1a, #d97706, #f59e0b
- Responsive: stack vertical sur mobile
```

### Prompt #4: Menu Cards Interactive
```
Prototyper les cartes menu pour GRILL'Z avec interactions avancées:

Structure carte:
- Image burger en hover effect (scale 1.05)
- Badge "Fusion Marocaine" si applicable
- Nom burger (font Bebas Neue)
- Description courte (2 lignes max)
- Prix en dirham marocain
- Bouton "Commander sur WhatsApp" (style chat bubble)

Interactions:
- Hover: élévation shadow, image zoom, bouton pulse
- Click bouton: animation loading puis ouverture WhatsApp
- Mobile: tap effects et feedback haptique

Layout:
- Grid responsive: 1 col mobile, 2 cols tablet, 3-4 cols desktop
- Spacing harmonieux avec rhythm vertical
- Lazy loading des images
```

### Prompt #5: Carrousel Galerie
```
Conçois un carrousel photos immersif pour GRILL'Z:

Fonctionnalités:
- Auto-play (5s par slide) avec pause au hover
- Navigation: dots + flèches stylisées marocaines
- Transition: slide horizontal avec easing
- Prévisualisation: thumbnails en bas (desktop)

Catégories photos:
1. Plats signature (burgers, frites, boissons)
2. Ambiance restaurant (décor, flammes grill)
3. Équipe en action (preparation, service)

Responsive:
- Mobile: swipe gestures, 1 image visible
- Desktop: 3 images visibles, celle du centre agrandie
- Tablet: 2 images visibles

Style:
- Overlay gradient pour lisibilité navigation
- Animations fluides (transform3d pour performance)
- Indicateurs de progression stylisés
```

---

## 💻 PROMPTS COPILOT/CODEGPT (Développement React)

### Prompt #6: Composant MenuCard Complet
```
Génère un composant React MenuCard pour GRILL'Z avec TypeScript et Tailwind:

Interface:
```typescript
interface Burger {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'signature' | 'classic' | 'vegan'
  moroccanFusion: boolean
  spicyLevel?: 1 | 2 | 3
}
```

Fonctionnalités requises:
- Image lazy loading avec placeholder
- Hover animations (scale, shadow, glow)
- Badge "Fusion Marocaine" conditionnel
- Bouton WhatsApp avec message pré-rempli
- Responsive design mobile-first
- Accessibility (aria-labels, keyboard navigation)

Intégrations:
- Framer Motion pour animations
- Analytics tracking sur click WhatsApp
- Error boundary pour images manquantes

Style:
- Design card moderne avec border-radius
- Couleurs palette GRILL'Z
- Typography hierarchy claire
```

### Prompt #7: Hook WhatsApp Integration
```
Crée un hook React personnalisé pour l'intégration WhatsApp de GRILL'Z:

Fonctionnalités:
```typescript
interface UseWhatsAppReturn {
  sendOrder: (burger: Burger) => void
  isLoading: boolean
  error: string | null
}

const useWhatsApp = (phoneNumber: string): UseWhatsAppReturn
```

Exigences:
1. Génération URL WhatsApp avec message personnalisé
2. Détection device (desktop vs mobile)
3. Tracking analytics des commandes
4. Gestion erreurs (WhatsApp non installé, etc.)
5. Formatting message avec emoji et structure claire

Message template:
"🍔 Bonjour GRILL'Z! Je souhaite commander: [BURGER_NAME] - [PRICE]DH. Merci! 🔥"

Bonus:
- Cache des URLs générées
- Rate limiting pour éviter spam
- Fallback vers numéro téléphone classique
```

### Prompt #8: Animation System Framer Motion
```
Développe un système d'animations complet pour GRILL'Z avec Framer Motion:

Animations requises:
1. Page transitions (route changes)
2. Scroll reveal pour sections
3. Hover effects composants
4. Loading states
5. Logo flame animation

Structure:
```typescript
// animations/variants.ts
export const pageVariants = { /* ... */ }
export const cardVariants = { /* ... */ }
export const logoVariants = { /* ... */ }

// hooks/useScrollReveal.ts
export const useScrollReveal = () => { /* ... */ }
```

Spécifications:
- Performance optimisée (transform3d, will-change)
- Respect prefers-reduced-motion
- Stagger animations pour listes
- Custom easing curves (bounce, elastic)
- Intersection Observer pour scroll triggers

Composants animés:
- AnimatedSection (scroll reveal)
- AnimatedCard (hover + entrance)
- AnimatedLogo (flame effect)
- PageTransition (route wrapper)
```

---

## 🎨 PROMPTS DESIGN & CONTENU

### Prompt #9: Design System Tailwind
```
Génère une configuration Tailwind CSS complète pour GRILL'Z:

Extend theme avec:
1. Couleurs personnalisées (palette GRILL'Z + marocaines)
2. Fonts (Bebas Neue, Roboto, Amiri pour touches arabes)
3. Spacing harmonieux (8px baseline grid)
4. Animations customisées (flame, pulse, slide)
5. Motifs géométriques marocains (background patterns)

Configuration:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'grillz': { /* palette complète */ },
        'morocco': { /* accents marocains */ }
      },
      fontFamily: { /* fonts stack */ },
      animation: { /* custom animations */ },
      backgroundImage: { /* motifs patterns */ }
    }
  },
  plugins: [
    // Plugins pour patterns marocains
  ]
}
```

Inclus:
- Utility classes pour motifs zellige
- Gradients signatures GRILL'Z
- Shadows et glows customisés
- Responsive breakpoints optimisés
```

### Prompt #10: Optimisation Performance React
```
Optimise les performances du site GRILL'Z pour Core Web Vitals excellents:

Axes d'optimisation:
1. Code splitting intelligent
2. Image optimization (WebP, lazy loading)
3. Bundle analysis et tree shaking
4. Service Worker pour cache
5. Preload des ressources critiques

Implémentations:
- React.lazy() pour composants secondaires
- Intersection Observer pour lazy loading
- Image component optimisé avec fallbacks
- Memoization strategique (React.memo, useMemo)
- Prefetch des données critiques

Métriques cibles:
- LCP < 2.5s
- FID < 100ms  
- CLS < 0.1
- Bundle size < 500KB gzipped

Outils:
- Lighthouse CI intégration
- Bundle analyzer automatique
- Performance monitoring real-time
```

---

## 📝 PROMPTS GEMINI (Contenu & Documentation)

### Prompt #11: Contenu Marketing GRILL'Z
```
Rédige le contenu marketing complet pour GRILL'Z, restaurant de burgers fusion marocaine:

Sections à rédiger:
1. Slogan principal (accrocheur, mémorable)
2. Descriptions burgers (12 burgers signature)
3. Histoire restaurant (storytelling émotion)
4. Valeurs de marque (authentique, moderne, fusion)
5. Call-to-actions impactants

Ton de voix:
- Moderne mais chaleureux
- Fier de la fusion culturelle
- Appétissant et évocateur
- Proche de la communauté
- Confiance et qualité

Burgers à décrire:
- Atlas Royal (merguez, ras el hanout)
- Marrakech Classic (beef, oignons caramélisés)
- Sahara Spicy (harissa, poivrons grillés)
- Casablanca Deluxe (fromage de chèvre, miel)
[... 8 autres burgers fusion]

Format:
- Noms évocateurs (géographie marocaine)
- Descriptions 2-3 lignes max
- Prix en dirhams (50-120 DH)
- Niveau de piment (🌶️ scale)
```

### Prompt #12: Documentation Technique README
```
Génère un README.md professionnel pour le projet GRILL'Z:

Structure complète:
# GRILL'Z - Site Vitrine Restaurant
## Description & Concept
## Stack Technique
## Installation & Setup
## Scripts Disponibles
## Structure du Projet
## Déploiement
## Configuration WhatsApp
## Performance & Optimisations
## Contribution Guidelines
## Roadmap Future
## Support & Contact

Inclus:
- Badges (build status, lighthouse score)
- Screenshots desktop/mobile
- Guide setup environnement développement
- Documentation API WhatsApp integration
- Métriques performance actuelles
- Instructions déploiement Vercel/Netlify
- Troubleshooting fréquent

Style:
- Markdown riche avec emojis
- Code blocks avec syntax highlighting
- Links vers documentation externe
- Table of contents automatique
```

---

## 🔧 PROMPTS ARCHITECTURE & DEVOPS

### Prompt #13: Configuration Déploiement
```
Configure le déploiement automatique pour GRILL'Z sur Vercel/Netlify:

Fichiers requis:
1. vercel.json / netlify.toml
2. GitHub Actions CI/CD
3. Environment variables
4. Performance monitoring
5. Error tracking (Sentry)

Fonctionnalités:
- Deploy automatique sur push main
- Preview deployments sur PRs
- Lighthouse CI sur chaque build
- Notifications Slack/Discord
- Rollback automatique si erreur

Optimisations:
- Headers de sécurité
- Cache strategies
- Compression Brotli/Gzip
- CDN configuration
- Analytics integration

Monitoring:
- Uptime monitoring
- Core Web Vitals tracking
- Error rate alerts
- Performance budgets
```

### Prompt #14: Testing Strategy Complète
```
Développe une stratégie de tests complète pour GRILL'Z:

Types de tests:
1. Unit tests (Jest + React Testing Library)
2. Integration tests (WhatsApp, navigation)
3. E2E tests (Playwright/Cypress)
4. Visual regression tests (Percy/Chromatic)
5. Performance tests (Lighthouse CI)

Couverture cible:
- Composants UI: 90%+
- Hooks personnalisés: 100%
- Intégrations critiques: 100%
- User journeys complets: 100%

Scénarios prioritaires:
- Navigation entre sections
- Commande via WhatsApp depuis menu
- Responsive sur devices variés
- Performances sur 3G/4G
- Accessibilité keyboard/screen reader

Configuration:
- CI/CD pipeline avec tests
- Parallel test execution
- Mocking strategies (WhatsApp, images)
- Test data factories
- Reporting et metrics
```

---

*Cahier de Prompts GRILL'Z - AI-Driven Development X10 🤖*