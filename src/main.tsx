import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Vérifier si l'élément root existe
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found. Make sure you have a div with id="root" in your index.html')
}

// Créer et monter l'application React
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)