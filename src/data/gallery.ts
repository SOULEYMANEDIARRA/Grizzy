import { GalleryItem } from '@/types'

// Galerie GRILL'Z - Photos du restaurant, plats et équipe
export const galleryItems: GalleryItem[] = [
  // Photos de plats
  {
    id: 'grillz-royal-hero',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80',
    alt: 'GRILL\'Z Royal - Notre burger signature avec double steak grillé',
    category: 'food',
    caption: 'GRILL\'Z Royal - Notre création signature'
  },
  {
    id: 'burger-grill-action',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    alt: 'Cuisson parfaite sur le grill - Flammes et saveurs',
    category: 'food',
    caption: 'La cuisson parfaite sur nos grills'
  },
  {
    id: 'gourmet-deluxe-plating',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    alt: 'Gourmet Deluxe - Présentation raffinée avec bœuf wagyu',
    category: 'food',
    caption: 'Gourmet Deluxe - L\'excellence à l\'état pur'
  },

  // Ambiance restaurant
  {
    id: 'restaurant-interior-modern',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    alt: 'Intérieur moderne du restaurant GRILL\'Z avec décoration contemporaine',
    category: 'ambiance',
    caption: 'Ambiance moderne et chaleureuse'
  },
  {
    id: 'dining-area-evening',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    alt: 'Espace restaurant en soirée avec éclairage tamisé',
    category: 'ambiance',
    caption: 'Atmosphère cosy en soirée'
  },
  {
    id: 'terrace-outdoor-seating',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    alt: 'Terrasse extérieure avec vue et plantes vertes',
    category: 'ambiance',
    caption: 'Notre terrasse avec vue panoramique'
  },

  // Équipe en action
  {
    id: 'chef-grilling-burgers',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Chef GRILL\'Z en action sur le grill avec expertise',
    category: 'team',
    caption: 'Notre chef passionné en action'
  },
  {
    id: 'team-burger-assembly',
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
    alt: 'Équipe assemblant les burgers avec précision et créativité',
    category: 'team',
    caption: 'L\'art de l\'assemblage parfait'
  },
  {
    id: 'staff-customer-service',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    alt: 'Équipe GRILL\'Z accueillant chaleureusement les clients',
    category: 'team',
    caption: 'Service client au cœur de nos valeurs'
  }
]

// Fonctions utilitaires pour la galerie

// Obtenir les photos par catégorie
export const getGalleryByCategory = (category: GalleryItem['category']) => {
  return galleryItems.filter(item => item.category === category)
}

// Obtenir les photos de plats uniquement
export const getFoodGallery = () => {
  return getGalleryByCategory('food')
}

// Obtenir les photos d'ambiance uniquement
export const getAmbianceGallery = () => {
  return getGalleryByCategory('ambiance')
}

// Obtenir les photos d'équipe uniquement
export const getTeamGallery = () => {
  return getGalleryByCategory('team')
}

// Obtenir un mélange équilibré pour le carousel principal
export const getFeaturedGallery = () => {
  const food = getFoodGallery().slice(0, 4)
  const ambiance = getAmbianceGallery().slice(0, 3)
  const team = getTeamGallery().slice(0, 2)
  
  // Mélanger les catégories pour un carousel varié
  return [...food, ...ambiance, ...team].sort(() => Math.random() - 0.5)
}

// Obtenir une image aléatoire pour les placeholders
export const getRandomGalleryItem = () => {
  const randomIndex = Math.floor(Math.random() * galleryItems.length)
  return galleryItems[randomIndex]
}

