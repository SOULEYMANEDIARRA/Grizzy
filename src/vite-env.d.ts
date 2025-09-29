/// <reference types="vite/client" />

// Déclarations des variables d'environnement
interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_RESTAURANT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Déclaration globale pour Google Analytics
declare global {
  function gtag(command: string, targetId: string | object, config?: object): void
}