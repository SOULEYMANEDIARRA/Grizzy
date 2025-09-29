import { Burger } from '@/types'

// Menu GRILL'Z - Collection de burgers grillés
export const burgers: Burger[] = [
  {
    id: 'grill-royal',
    name: 'GRILL\'Z Royal',
    description: 'Notre burger signature ! Double steak de bœuf grillé, fromage cheddar affiné, bacon croustillant, oignons caramélisés',
    price: 85,
    image: 'https://images.unsplash.com/photo-1606756790138-8a53f9d6f3d1?auto=format&fit=crop&w=800&q=80',
    category: 'signature',
    ingredients: [
      'Pain brioche grillé',
      'Double steak de bœuf 180g',
      'Fromage cheddar affiné',
      'Bacon croustillant',
      'Oignons caramélisés',
      'Salade iceberg',
      'Sauce GRILL\'Z'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false,
    popular: true
  },
  {
    id: 'classic-cheese',
    name: 'Classic Cheeseburger',
    description: 'Le grand classique ! Steak de bœuf grillé, fromage cheddar fondant, cornichons, oignons rouges et sauce burger',
    price: 55,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    category: 'classic',
    ingredients: [
      'Pain sésame grillé',
      'Steak de bœuf 150g',
      'Fromage cheddar',
      'Cornichons',
      'Oignons rouges',
      'Salade',
      'Sauce burger maison'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false,
    popular: true
  },
  {
    id: 'fire-burger',
    name: 'Fire Burger',
    description: 'Pour les amateurs de sensations ! Bœuf grillé épicé, jalapeños, sauce sriracha, fromage pepper jack',
    price: 70,
    image: 'https://images.unsplash.com/photo-1601924638867-3ec6f64f5e4e?auto=format&fit=crop&w=800&q=80',
    category: 'signature',
    ingredients: [
      'Pain brioche épicé',
      'Steak de bœuf grillé 150g',
      'Fromage pepper jack',
      'Jalapeños frais',
      'Sauce sriracha',
      'Oignons caramélisés',
      'Salade'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 3,
    moroccanFusion: false
  },
  {
    id: 'gourmet-deluxe',
    name: 'Gourmet Deluxe',
    description: 'L\'excellence à l\'état pur ! Bœuf wagyu grillé, fromage brie, champignons sautés et truffe',
    price: 110,
    image: 'https://images.unsplash.com/photo-1632731528666-8c8f4f3a2a7b?auto=format&fit=crop&w=800&q=80',
    category: 'signature',
    ingredients: [
      'Pain brioche artisanal',
      'Bœuf wagyu 200g',
      'Fromage brie',
      'Champignons sautés',
      'Huile de truffe',
      'Roquette',
      'Oignons confits'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false,
    popular: true
  },
  {
    id: 'bbq-smash',
    name: 'BBQ Smash',
    description: 'Burger smash authentique ! Double steak écrasé, sauce BBQ fumée, oignons frits, fromage cheddar',
    price: 75,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    category: 'signature',
    ingredients: [
      'Pain brioche grillé',
      'Double steak smash 120g',
      'Sauce BBQ fumée',
      'Oignons frits croustillants',
      'Fromage cheddar',
      'Cornichons',
      'Salade iceberg'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 2,
    moroccanFusion: false
  },
  {
    id: 'veggie-grill',
    name: 'Veggie Grill',
    description: 'L\'option végétarienne gourmande ! Steak végétal grillé, avocat, tomates, salade et sauce vegan',
    price: 50,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    category: 'vegan',
    ingredients: [
      'Pain complet aux graines',
      'Steak végétal grillé',
      'Avocat frais',
      'Tomates fraîches',
      'Salade mélangée',
      'Oignons rouges',
      'Sauce vegan'
    ],
    allergens: ['Gluten'],
    spicyLevel: 1,
    moroccanFusion: false,
    popular: true
  },
  {
    id: 'chicken-grill',
    name: 'Chicken Grill',
    description: 'Blanc de poulet grillé mariné, fromage suisse, avocat, tomates et sauce ranch',
    price: 60,
    image: 'https://images.unsplash.com/photo-1617196035234-77e6d529fb63?auto=format&fit=crop&w=800&q=80',
    category: 'classic',
    ingredients: [
      'Pain brioche grillé',
      'Blanc de poulet grillé 150g',
      'Fromage suisse',
      'Avocat frais',
      'Tomates fraîches',
      'Salade',
      'Sauce ranch maison'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false
  },
  {
    id: 'bacon-lover',
    name: 'Bacon Lover',
    description: 'Pour les amateurs de bacon ! Double bacon croustillant, bœuf grillé, fromage cheddar et sauce barbecue',
    price: 80,
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80',
    category: 'signature',
    ingredients: [
      'Pain brioche au sésame',
      'Steak de bœuf 150g',
      'Double bacon croustillant',
      'Fromage cheddar affiné',
      'Sauce barbecue',
      'Oignons caramélisés',
      'Salade'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false,
    popular: true
  },
  {
    id: 'mushroom-swiss',
    name: 'Mushroom Swiss',
    description: 'Classique américain ! Bœuf grillé, champignons sautés, fromage suisse et sauce à l\'ail',
    price: 65,
    image: '/images/placeholder-burger.svg',
    category: 'classic',
    ingredients: [
      'Pain brioche',
      'Steak de bœuf 150g',
      'Champignons sautés',
      'Fromage suisse',
      'Sauce à l\'ail',
      'Oignons grillés',
      'Salade'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false
  },
  {
    id: 'double-smash',
    name: 'Double Smash',
    description: 'Le roi des burgers ! Double steak smash, double fromage, sauce spéciale et oignons frits',
    price: 90,
    image: '/images/placeholder-burger.svg',
    category: 'signature',
    ingredients: [
      'Pain brioche géant',
      'Double steak smash 160g',
      'Double cheddar',
      'Sauce spéciale GRILL\'Z',
      'Oignons frits',
      'Cornichons',
      'Salade iceberg'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false
  },
  {
    id: 'fish-burger',
    name: 'Fish Burger',
    description: 'Filet de poisson pané croustillant, sauce tartare maison, salade et tomates fraîches',
    price: 55,
    image: '/images/placeholder-burger.svg',
    category: 'classic',
    ingredients: [
      'Pain brioche',
      'Filet de poisson pané 150g',
      'Sauce tartare maison',
      'Salade iceberg',
      'Tomates fraîches',
      'Oignons rouges',
      'Cornichons'
    ],
    allergens: ['Gluten', 'Poisson', 'Œufs'],
    spicyLevel: 1,
    moroccanFusion: false
  },
  {
    id: 'spicy-chicken',
    name: 'Spicy Chicken',
    description: 'Poulet crispy épicé, sauce buffalo, fromage blue cheese, céleri croquant',
    price: 65,
    image: '/images/placeholder-burger.svg',
    category: 'signature',
    ingredients: [
      'Pain brioche épicé',
      'Poulet crispy 150g',
      'Sauce buffalo',
      'Fromage blue cheese',
      'Céleri croquant',
      'Salade',
      'Tomates'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 3,
    moroccanFusion: false
  },
  // Formules et Menus
  {
    id: 'menu-royal',
    name: 'Menu GRILL\'Z Royal',
    description: 'GRILL\'Z Royal + Frites maison + Boisson au choix + Dessert',
    price: 110,
    image: '/images/placeholder-burger.svg',
    category: 'signature',
    ingredients: [
      'Burger GRILL\'Z Royal complet',
      'Frites maison croustillantes',
      'Boisson 33cl au choix',
      'Dessert du jour'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false,
    popular: true
  },
  {
    id: 'menu-double',
    name: 'Menu Double Trouble',
    description: 'Double Smash + Frites + Boisson + Onion Rings',
    price: 125,
    image: '/images/placeholder-burger.svg',
    category: 'signature',
    ingredients: [
      'Burger Double Smash',
      'Frites maison',
      'Boisson 50cl',
      'Onion rings croustillants'
    ],
    allergens: ['Gluten', 'Lait'],
    spicyLevel: 1,
    moroccanFusion: false
  }
]

// Fonction utilitaire pour filtrer les burgers
export const getBurgersByCategory = (category: Burger['category']) => {
  return burgers.filter(burger => burger.category === category)
}

// Fonction pour obtenir les burgers populaires
export const getPopularBurgers = () => {
  return burgers.filter(burger => burger.popular)
}

// Fonction pour obtenir les burgers fusion marocaine
export const getMoroccanFusionBurgers = () => {
  return burgers.filter(burger => burger.moroccanFusion)
}

// Fonction pour rechercher des burgers
export const searchBurgers = (query: string) => {
  const searchTerm = query.toLowerCase()
  return burgers.filter(burger => 
    burger.name.toLowerCase().includes(searchTerm) ||
    burger.description.toLowerCase().includes(searchTerm) ||
    burger.ingredients.some((ingredient: string) => 
      ingredient.toLowerCase().includes(searchTerm)
    )
  )
}