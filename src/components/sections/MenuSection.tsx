import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Search, Star, Award, Leaf } from 'lucide-react'
import { burgers, getBurgersByCategory, getMoroccanFusionBurgers, getPopularBurgers } from '@data/burgers'
import { Burger } from '@/types'
import MenuCard from '@components/ui/MenuCard'
import Button from '@components/ui/Button'
import useScrollReveal from '@hooks/useScrollReveal'

const MenuSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAll, setShowAll] = useState(false)

  // Filtres disponibles
  const filters = [
    { id: 'all', label: 'Tous nos Burgers', icon: null, count: burgers.length },
    { id: 'popular', label: 'Populaires', icon: Star, count: getPopularBurgers().length },
    { id: 'signature', label: 'Signature', icon: Award, count: getBurgersByCategory('signature').length },
    { id: 'moroccan', label: 'Fusion Marocaine', icon: null, count: getMoroccanFusionBurgers().length },
    { id: 'vegan', label: 'Végétal', icon: Leaf, count: getBurgersByCategory('vegan').length },
    { id: 'classic', label: 'Classiques', icon: null, count: getBurgersByCategory('classic').length }
  ]

  // Filtrer les burgers selon le filtre actif et la recherche
  const filteredBurgers = useMemo(() => {
    let filtered: Burger[] = []

    switch (activeFilter) {
      case 'popular':
        filtered = getPopularBurgers()
        break
      case 'signature':
        filtered = getBurgersByCategory('signature')
        break
      case 'moroccan':
        filtered = getMoroccanFusionBurgers()
        break
      case 'vegan':
        filtered = getBurgersByCategory('vegan')
        break
      case 'classic':
        filtered = getBurgersByCategory('classic')
        break
      default:
        filtered = burgers
    }

    // Appliquer la recherche si query présente
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(burger =>
        burger.name.toLowerCase().includes(query) ||
        burger.description.toLowerCase().includes(query) ||
        burger.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(query)
        )
      )
    }

    return filtered
  }, [activeFilter, searchQuery])

  // Burgers à afficher (limité ou tous)
  const displayedBurgers = showAll ? filteredBurgers : filteredBurgers.slice(0, 8)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section
      ref={ref}
      id="menu"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-zellige opacity-5" />
      
      <motion.div
        className="container-grillz relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header de section */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
        >
          <span className="inline-block bg-grillz-orange/10 text-grillz-orange font-medium px-4 py-2 rounded-full text-sm mb-4">
            Notre Menu
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-grillz-black mb-6">
            Découvrez Nos
            <span className="text-gradient block">Créations Signature</span>
          </h2>
          
          <p className="text-xl text-grillz-grey max-w-3xl mx-auto leading-relaxed">
            Chaque burger GRILL'Z raconte une histoire unique, mêlant tradition marocaine 
            et innovation culinaire pour vous offrir une expérience gustative inoubliable.
          </p>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          className="max-w-md mx-auto mb-8"
          variants={filterVariants}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un burger..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grillz-orange focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          variants={filterVariants}
        >
          <div className="flex items-center space-x-2 text-grillz-grey mr-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filtrer:</span>
          </div>
          
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-grillz-orange text-white shadow-lg'
                    : 'bg-gray-100 text-grillz-grey hover:bg-grillz-orange/10 hover:text-grillz-orange'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-grillz-orange/20 text-grillz-orange'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Statistiques rapides */}
        {searchQuery && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-grillz-grey">
              <span className="font-semibold text-grillz-orange">{filteredBurgers.length}</span> 
              {filteredBurgers.length > 1 ? ' résultats trouvés' : ' résultat trouvé'} 
              pour "<span className="font-medium">{searchQuery}</span>"
            </p>
          </motion.div>
        )}

        {/* Grille de burgers */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {displayedBurgers.map((burger) => (
              <MenuCard
                key={burger.id}
                burger={burger}
                showCategory={true}
                compact={false}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Message si aucun résultat */}
        {filteredBurgers.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-grillz-black mb-2">
              Aucun burger trouvé
            </h3>
            <p className="text-grillz-grey mb-6">
              Essayez un autre terme de recherche ou changez de filtre
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setSearchQuery('')
                setActiveFilter('all')
              }}
            >
              Voir tous les burgers
            </Button>
          </motion.div>
        )}

        {/* Bouton Voir plus/moins */}
        {filteredBurgers.length > 8 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll 
                ? `Voir moins de burgers` 
                : `Voir ${filteredBurgers.length - 8} burgers de plus`
              }
            </Button>
          </motion.div>
        )}

        {/* CTA de commande */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-grillz-orange/10 via-grillz-yellow/10 to-grillz-orange/10 rounded-2xl border border-grillz-orange/20"
          variants={headerVariants}
        >
          <h3 className="font-display text-2xl font-bold text-grillz-black mb-4">
            Prêt à commander ?
          </h3>
          <p className="text-grillz-grey mb-6 max-w-2xl mx-auto">
            Commandez directement via WhatsApp et récupérez votre commande 
            en 15-20 minutes. Service rapide et qualité garantie !
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            href={`https://wa.me/212600000000?text=${encodeURIComponent('🍔 Bonjour GRILL\'Z! J\'aimerais passer une commande. Merci! 🔥')}`}
            target="_blank"
          >
            Commander via WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default MenuSection