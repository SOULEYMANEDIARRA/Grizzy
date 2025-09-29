import React from 'react'
import { motion } from 'framer-motion'
import { CardProps } from '@/types'

const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  padding = 'md',
  shadow = 'md',
  className = ''
}) => {
  // Classes de base
  const baseClasses = [
    'bg-white rounded-xl',
    'transition-all duration-300 ease-in-out'
  ]

  // Classes de padding
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  // Classes d'ombre
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-card',
    lg: 'shadow-card-hover'
  }

  // Classes de hover
  const hoverClasses = hover ? [
    'hover:shadow-card-hover',
    'hover:-translate-y-1',
    'cursor-pointer'
  ] : []

  // Combiner toutes les classes
  const cardClasses = [
    ...baseClasses,
    paddingClasses[padding],
    shadowClasses[shadow],
    ...hoverClasses,
    className
  ].join(' ')

  // Animations Framer Motion
  const cardVariants = {
    initial: { 
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    hover: hover ? {
      y: -4,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    } : {}
  }

  return (
    <motion.div
      className={cardClasses}
      variants={cardVariants}
      initial="initial"
      whileHover={hover ? "hover" : undefined}
      layout
    >
      {children}
    </motion.div>
  )
}

export default Card