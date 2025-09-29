import React from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { ButtonProps } from '@/types'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  href,
  target = '_self',
  type = 'button',
  className = ''
}) => {
  // Classes de base pour tous les boutons
  const baseClasses = [
    'inline-flex items-center justify-center font-medium rounded-lg',
    'transition-all duration-300 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:scale-105 active:scale-95'
  ]

  // Classes selon la variante
  const variantClasses = {
    primary: [
      'bg-grillz-orange text-white shadow-lg',
      'hover:bg-grillz-yellow hover:shadow-glow',
      'focus:ring-grillz-orange/50'
    ],
    secondary: [
      'border-2 border-grillz-orange text-grillz-orange bg-white',
      'hover:bg-grillz-orange hover:text-white hover:shadow-glow',
      'focus:ring-grillz-orange/50'
    ],
    whatsapp: [
      'bg-green-500 text-white shadow-lg',
      'hover:bg-green-600 hover:shadow-lg',
      'focus:ring-green-500/50'
    ],
    ghost: [
      'text-grillz-grey hover:text-grillz-orange',
      'hover:bg-grillz-orange/10',
      'focus:ring-grillz-orange/30'
    ]
  }

  // Classes selon la taille
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }

  // Combiner toutes les classes
  const buttonClasses = [
    ...baseClasses,
    ...variantClasses[variant],
    sizeClasses[size],
    className
  ].join(' ')

  // Animations Framer Motion
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.95,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  }

  // Props communes pour motion
  const motionProps = {
    variants: buttonVariants,
    initial: "initial",
    whileHover: disabled || loading ? undefined : "hover",
    whileTap: disabled || loading ? undefined : "tap",
    className: buttonClasses,
    disabled: disabled || loading
  }

  // Contenu du bouton avec loader
  const buttonContent = (
    <>
      {loading && (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      )}
      {children}
    </>
  )

  // Si href est fourni, rendre un lien
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    )
  }

  // Sinon, rendre un bouton
  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button