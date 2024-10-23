// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from 'vue'
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
    // Gestion des liens avec target _blank
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

    // Gestion du comportement accordéon dans la sidebar
    onMounted(() => {
      const collapsibleGroups = document.querySelectorAll('.sidebar .group.collapsible')

      collapsibleGroups.forEach(group => {
        const title = group.querySelector('.title')
        const itemsWrapper = group.querySelector('.items-wrapper')

        // Gérer le clic pour ouvrir/fermer le groupe
        title?.addEventListener('click', () => {
          const isCollapsed = group.classList.contains('collapsed')
          if (isCollapsed) {
            group.classList.remove('collapsed')
            itemsWrapper.style.height = itemsWrapper.scrollHeight + 'px'
          } else {
            group.classList.add('collapsed')
            itemsWrapper.style.height = '0px'
          }
        })

        // Initialiser la hauteur pour les groupes déjà fermés
        if (group.classList.contains('collapsed')) {
          itemsWrapper.style.height = '0px'
        } else {
          itemsWrapper.style.height = itemsWrapper.scrollHeight + 'px'
        }
      })
    })
  }
} satisfies Theme
