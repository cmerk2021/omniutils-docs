import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'OmniUtils',
        social: {
            github: 'https://github.com/cmerk2021/omniutils',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Get Started', slug: 'guides/get-started' },
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
		})],
});