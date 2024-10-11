import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Stereo Internet Toolkit',
          components: {
            TwoColumnContent: '/src/components/TwoColumnContent.astro',
            ThemeProvider: '/src/components/ThemeProvider.astro',
            ThemeSelect: '/src/components/ThemeSelect.astro',
          },
      logo: {
				// light: '/src/assets/logo-light.svg',
				// dark: '/src/assets/logo-dark.svg',
        light: '/src/assets/stereo-logo-large-black.png',
				dark: '/src/assets/stereo-logo-large-white.png',
				replacesTitle: true,
			},
      customCss: [
        './src/styles/tailwind.css',
        './src/styles/custom.css',
      ],
      expressiveCode: {
        // Replace the default themes with a custom set of bundled themes:
        // "dracula" (a dark theme) and "solarized-light"
        // themes: ['catppuccin-frappe', 'catppuccin-latte'],
        // themes: ['catppuccin-latte'],
        // themes: ['catppuccin-frappe'],
        themes: ['catppuccin-macchiato'],
      },
      social: {
                github: 'https://github.com/jyoungblood/stereo',
            },
            sidebar: [
        {
                    label: 'User Manual',
                    items: [
                        { label: 'Introduction', slug: 'manual' },
            { label: 'Installation', slug: 'manual/installation' },
            { label: 'Structure', slug: 'manual/structure' },
            { label: 'Routing & Rendering', slug: 'manual/routing' },
            { label: 'Templates', slug: 'manual/templates' },
            { label: 'Deployment', slug: 'manual/deployment' },
            { label: 'Resources', slug: 'manual/resources' },
                    ],
                },

                {
                	label: 'Misc',
                	autogenerate: { directory: 'misc' },
                },

            ],
        }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    ],
  scripts: [
    {
      type: 'module',
      src: 'https://beamanalytics.b-cdn.net/beam.min.js',
      defer: true,
      async: true,
      'data-token': '4345c349-059a-42dd-8483-67b7c0730da6',
    },
  ],
});