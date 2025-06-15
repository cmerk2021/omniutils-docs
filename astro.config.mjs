import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fulldev from 'fulldev-ui/integration';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'OmniUtils',
        logo: {
            src: './src/assets/logo-svg.svg',
        },
        social: {
            github: 'https://github.com/cmerk2021/omniutils',
        },
        plugins: [starlightThemeRapide()],
        customCss: [
            './src/css/globals.css'
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Get Started', slug: 'guides/get-started' },
                    { label: 'Configuration', slug: 'guides/config' },
                ],
            },
            {
                label: 'Modules',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Other',
                autogenerate: { directory: 'other' },
            },
        ],
		}),
        fulldev({
            colors: {
              theme: 'dark',
              dark: {
                background: '#111110',
                base: '#6F6D66',
                brand: '#F50',
              },
              light: {
                background: '#EEEEEC',
                base: '#6F6D66',
                brand: '#F50',
              },
            },
          })],
});