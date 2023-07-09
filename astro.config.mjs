import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://athena-os.github.io',
  integrations: [
    starlight({
      title: 'Athena OS',
      logo: {
        src: '/src/assets/athena-logo.png',
      },
      customCss: process.env.NO_GRADIENTS ? [] : ['/src/assets/landing.css'],
      social: {
        github: 'https://github.com/Athena-OS',
        discord: 'https://discord.gg/DNjvQkb5Ad',
      },
      editLink: {
        baseUrl: 'https://github.com/Athena-OS/athena-docs/tree/main/src/content/docs/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Manifesto', link: '/en/manifesto' },
            { label: 'Why Athena OS?', link: '/en/athenaos' },
            { label: 'Downloading Athena OS', link: '/en/download' },
          ],
        },
        {
          label: 'Installation',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Installing as baremetal', link: '/en/install-baremetal' },
            { label: 'Installing as dual boot with Linux', link: '/en/install-linux' },
            { label: 'Installing as dual boot with Windows', link: '/en/install-windows' },
            { label: 'Installing as guest in VMware', link: '/en/install-vmware' },
            { label: 'Installing as guest in Virtualbox', link: '/en/install-virtualbox' },
            { label: 'Installing as guest in Hyper-V', link: '/en/install-hyperv' },
            { label: 'Installing as guest in Parallels', link: '/en/install-parallels' },
            { label: 'Installing as guest in UTM', link: '/en/install-utm' },
            { label: 'Installing as guest in QEMU', link: '/en/install-qemu' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
