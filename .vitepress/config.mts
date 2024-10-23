import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PeriDocs",
  description: "la documentation de la Peri",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Advanced Topics',
        collapsible: true, // Ajoute cette propriété pour rendre le groupe pliable
        items: [
          { text: 'Custom Theme', link: '/advanced/custom-theme' },
          { text: 'Deploying', link: '/advanced/deploying' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // Traduction des textes de mise à jour
    lastUpdatedText: 'Dernière mise à jour',

    // Traduction des liens d'édition
    editLink: {
      pattern: 'https://github.com/ton-compte/ton-projet/edit/main/docs/:path',
      text: 'Éditer cette page sur GitHub'
    },

    // Traduction des boutons de navigation des pages
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    // Pied de page personnalisé
    footer: {
      message: 'Propulsé par VitePress',
      copyright: '© 2024 Mon Projet'
    },

    // Traduction de "On This Page"
    outlineTitle: 'Sur cette page',

    // Texte de la page 404
    404: {
      title: '404',
      message: 'Cette page est introuvable'
    },
    backToHome: 'Retour à l\'accueil',
    search: {
      provider: 'local'
    }
  }
})
