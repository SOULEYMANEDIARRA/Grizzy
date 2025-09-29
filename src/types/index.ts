// Types principaux pour l'application GRILL'Z

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
  subtitle: string
  description: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  contact: {
    phone: string
    whatsapp: string
    email: string
  }
  hours: {
    [key: string]: string
  }
  socialMedia: {
    instagram?: string
    facebook?: string
    tiktok?: string
    youtube?: string
  }
}

export interface WhatsAppMessage {
  burger: Burger
  customerMessage?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
}

export interface AnimationVariant {
  initial: object
  animate: object
  exit?: object
  transition?: object
}

// Props communes pour les composants
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps extends BaseComponentProps {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

export interface MenuCardProps extends BaseComponentProps {
  burger: Burger
  onOrder?: (burger: Burger) => void
  showCategory?: boolean
  compact?: boolean
}

export interface SectionProps extends BaseComponentProps {
  id?: string
  title?: string
  subtitle?: string
  background?: 'white' | 'grey' | 'pattern'
}

// Types pour les hooks
export interface UseWhatsAppReturn {
  sendOrder: (burger: Burger, customMessage?: string) => void
  generateWhatsAppUrl: (burger: Burger, customMessage?: string) => string
  isValidNumber: (number: string) => boolean
}

export interface UseScrollRevealReturn {
  ref: React.RefObject<HTMLElement>
  isVisible: boolean
}

export interface UseImageLazyReturn {
  ref: React.RefObject<HTMLImageElement>
  isLoaded: boolean
  isInView: boolean
}

// Types pour les configurations
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  social: {
    twitter?: string
    instagram?: string
    facebook?: string
  }
  whatsapp: {
    number: string
    businessName: string
  }
  analytics: {
    googleAnalyticsId?: string
  }
}

// Types pour les animations Framer Motion
export type MotionVariants = {
  [key: string]: AnimationVariant
}

// Types utilitaires
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export type ThemeMode = 'light' | 'dark'

// Types pour les erreurs
export interface AppError {
  code: string
  message: string
  details?: any
}