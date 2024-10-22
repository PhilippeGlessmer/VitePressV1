// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Ajouter le code pour gérer les liens avec target _blank
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        // Sélectionner tous les liens dans la sidebar
        const sidebarLinks = document.querySelectorAll('.sidebar a')

        sidebarLinks.forEach(link => {
          const href = link.getAttribute('href')
          // Ajouter target _blank aux liens externes et spécifiques
          if (href && (href.startsWith('http') || href === '/api-examples')) {
            link.setAttribute('target', '_blank')
            link.setAttribute('rel', 'noopener noreferrer')
          }
        })
      }
    }
  }
} satisfies Theme
