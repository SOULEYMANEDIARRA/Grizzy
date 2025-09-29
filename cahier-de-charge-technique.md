# 🔧 GRILL'Z - Cahier de Charge Technique Détaillé

## 🏗️ ARCHITECTURE TECHNIQUE

### Stack Technologique
```
Frontend: React 18 + Vite 5
Styling: Tailwind CSS 3.4
Animations: Framer Motion
Build Tool: Vite (ESBuild)
Deployment: Vercel/Netlify
Domain: À configurer
```

### Structure de Projet
```
grillz-website/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── burgers/
│   │   ├── gallery/
│   │   └── icons/
│   └── videos/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── styles/
│   ├── utils/
│   ├── data/
│   └── hooks/
├── docs/
└── deploy/
```

---

## 🎨 DESIGN SYSTEM

### Palette de Couleurs
```css
/* Couleurs Principales GRILL'Z */
--primary-black: #1a1a1a
--primary-grey: #4a4a4a
--accent-orange: #d97706  /* Orange brûlé */
--accent-yellow: #f59e0b

/* Couleurs Marocaines (Accents) */
--moroccan-terracotta: #cd7f32
--moroccan-ochre: #cc7722
--moroccan-red: #8b0000
--moroccan-gold: #ffd700

/* Couleurs Systèmes */
--text-primary: #1f2937
--text-secondary: #6b7280
--bg-light: #f9fafb
--bg-dark: #111827
```

### Typographie
```css
/* Fonts Stack */
Primary: 'Roboto', system-ui, sans-serif    /* Moderne, lisible */
Accent: 'Bebas Neue', cursive              /* Titres impactants */
Arabic: 'Amiri', serif                      /* Touches marocaines */
```

### Motifs Géométriques Marocains
- **Zellige** : Motifs carrelage traditionnel
- **Arabesque** : Patterns géométriques entrelacés
- **Khamsa** : Motifs de protection (subtils)

---

## 📱 COMPOSANTS REACT

### 1. Layout Components
```jsx
// Layout principal
<App>
  <Header />          // Navigation fixe + logo
  <main>
    <HeroSection />   // Bannière principale
    <MenuSection />   // Catalogue burgers
    <GallerySection />// Carrousel photos
    <AboutSection />  // Histoire restaurant
    <ContactSection />// Info pratiques
  </main>
  <Footer />          // Links + réseaux sociaux
</App>
```

### 2. Composants Sections Détaillés

#### 🔥 HeroSection
```jsx
const HeroSection = () => {
  // Fonctionnalités:
  // - Animation logo avec flammes
  // - Vidéo background ou image hero
  // - Slogan percutant + CTA
  // - Scroll indicator animé
}
```

#### 🍔 MenuSection
```jsx
const MenuSection = () => {
  return (
    <section className="menu-grid">
      {burgers.map(burger => (
        <MenuCard 
          key={burger.id}
          burger={burger}
          onWhatsAppOrder={handleWhatsAppOrder}
        />
      ))}
    </section>
  )
}

const MenuCard = ({ burger, onWhatsAppOrder }) => {
  // Fonctionnalités:
  // - Photo HD hover effect
  // - Description + prix
  // - Bouton WhatsApp avec message pré-rempli
  // - Animation d'ajout panier
}
```

#### 📸 GallerySection
```jsx
const GallerySection = () => {
  // Fonctionnalités:
  // - Carrousel automatique (Swiper.js ou custom)
  // - Photos: plats + ambiance + équipe
  // - Navigation dots + arrows
  // - Lazy loading optimisé
}
```

#### ℹ️ AboutSection
```jsx
const AboutSection = () => {
  // Contenu:
  // - Histoire du concept fusion
  // - Valeurs du restaurant
  // - Photo de l'équipe
  // - Animation scroll reveal
}
```

#### 📞 ContactSection
```jsx
const ContactSection = () => {
  // Informations:
  // - Adresse + Google Maps embed
  // - Horaires d'ouverture
  // - Téléphone + WhatsApp Business
  // - Réseaux sociaux
}
```

### 3. Composants UI Réutilisables

#### Button Component
```jsx
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  whatsappMessage 
}) => {
  // Variants: primary, secondary, whatsapp, ghost
  // Sizes: sm, md, lg, xl
  // Animations: hover, active, loading
}
```

#### Card Component
```jsx
const Card = ({ 
  image, 
  title, 
  description, 
  price, 
  onAction 
}) => {
  // Features:
  // - Image lazy loading
  // - Hover animations
  // - Responsive design
  // - Accessibility
}
```

---

## 🎭 ANIMATIONS & INTERACTIONS

### Framer Motion Animations

#### 1. Page Transitions
```jsx
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 }
}
```

#### 2. Scroll Animations
```jsx
const scrollVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.4 }
  }
}
```

#### 3. Logo Flame Animation
```jsx
const flameVariants = {
  idle: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: [0, 2, -2, 0],
    transition: { repeat: Infinity, duration: 2 }
  }
}
```

### CSS Custom Animations
```css
/* Motifs Marocains Animés */
@keyframes zellige-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Gradient Background Animé */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints Tailwind
```css
/* Mobile First Approach */
sm: 640px     // Smartphone landscape
md: 768px     // Tablet portrait  
lg: 1024px    // Tablet landscape / Desktop small
xl: 1280px    // Desktop standard
2xl: 1536px   // Desktop large
```

### Grid System
```jsx
// Menu Grid Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Menu Cards */}
</div>
```

---

## 🔗 INTÉGRATION WHATSAPP

### Deep Link System
```javascript
const generateWhatsAppLink = (burger) => {
  const phoneNumber = "212600000000" // Numéro WhatsApp Business
  const message = encodeURIComponent(
    `🍔 Bonjour GRILL'Z!\n\n` +
    `Je souhaite commander:\n` +
    `• ${burger.name}\n` +
    `• Prix: ${burger.price}DH\n\n` +
    `Merci! 🔥`
  )
  return `https://wa.me/${phoneNumber}?text=${message}`
}

const handleWhatsAppOrder = (burger) => {
  const link = generateWhatsAppLink(burger)
  window.open(link, '_blank')
  
  // Analytics tracking
  gtag('event', 'whatsapp_order', {
    'burger_name': burger.name,
    'burger_price': burger.price
  })
}
```

---

## 🗄️ GESTION DES DONNÉES

### Menu Data Structure
```typescript
interface Burger {
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
}

interface Gallery {
  id: string
  image: string
  alt: string
  category: 'food' | 'ambiance' | 'team'
  caption?: string
}
```

### Sample Data
```javascript
// data/burgers.js
export const burgers = [
  {
    id: 'atlas-royal',
    name: 'Atlas Royal',
    description: 'Burger signature avec épices berbères, merguez artisanale',
    price: 75,
    image: '/images/burgers/atlas-royal.jpg',
    category: 'signature',
    moroccanFusion: true,
    ingredients: ['Pain brioche', 'Merguez', 'Ras el hanout', 'Oignons caramélisés'],
    spicyLevel: 2
  }
  // ... autres burgers
]
```

---

## ⚡ OPTIMISATIONS PERFORMANCE

### Images Optimization
```jsx
// Composant Image Optimisé
const OptimizedImage = ({ src, alt, className }) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
```

### Code Splitting
```jsx
// Lazy Loading Components
const GallerySection = lazy(() => import('./components/GallerySection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
```

### Bundle Analysis
```json
// package.json scripts
{
  "analyze": "vite-bundle-analyzer",
  "build:analyze": "npm run build && npm run analyze"
}
```

---

## 🔒 SÉCURITÉ & SEO

### SEO Optimizations
```jsx
// React Helmet for Meta Tags
const SEOHead = () => (
  <Helmet>
    <title>GRILL'Z - Burgers Fusion Marocaine | Commande WhatsApp</title>
    <meta name="description" content="Découvrez GRILL'Z, le restaurant de burgers fusion marocaine. Commandez directement via WhatsApp!" />
    <meta property="og:image" content="/images/grillz-social-share.jpg" />
    {/* Structured Data for Restaurant */}
  </Helmet>
)
```

### Security Headers
```javascript
// vercel.json / netlify.toml
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 📊 ANALYTICS & TRACKING

### Google Analytics 4
```javascript
// Tracking Events
const trackMenuView = (burgerName) => {
  gtag('event', 'view_item', {
    currency: 'MAD',
    value: burger.price,
    items: [{
      item_id: burger.id,
      item_name: burger.name,
      item_category: burger.category,
      price: burger.price
    }]
  })
}

const trackWhatsAppClick = (burger) => {
  gtag('event', 'begin_checkout', {
    currency: 'MAD',
    value: burger.price,
    items: [burger]
  })
}
```

---

## 🚀 DÉPLOIEMENT

### Vercel Configuration
```json
// vercel.json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Build Process
```bash
# Production Build
npm run build

# Preview Build
npm run preview

# Deploy to Vercel
vercel --prod
```

---

## 🧪 TESTING STRATEGY

### Tests Components
```javascript
// Jest + React Testing Library
describe('MenuCard', () => {
  test('renders burger information correctly', () => {
    render(<MenuCard burger={mockBurger} />)
    expect(screen.getByText(mockBurger.name)).toBeInTheDocument()
  })
  
  test('opens WhatsApp when order button is clicked', () => {
    const mockOpen = jest.spyOn(window, 'open')
    render(<MenuCard burger={mockBurger} />)
    fireEvent.click(screen.getByText('Commander'))
    expect(mockOpen).toHaveBeenCalledWith(expect.stringContaining('wa.me'))
  })
})
```

### E2E Testing
```javascript
// Playwright Tests
test('user can navigate and order via WhatsApp', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="menu-section"]')
  await page.click('[data-testid="order-atlas-royal"]')
  // Verify WhatsApp opens
})
```

---

*Cahier Technique GRILL'Z - Developer X10 Architecture 🚀*