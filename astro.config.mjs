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
        baseUrl: 'https://github.com/Athena-OS/athena-docs/tree/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Manifesto', link: '/en/getting-started/manifesto' },
            { label: 'Why Athena OS?', link: '/en/getting-started/athenaos' },
            { label: 'Downloading Athena OS', link: '/en/getting-started/download' },
          ],
        },
        {
          label: 'Installation',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Baremetal installation prepare', link: '/en/installation/prepare-baremetal' },
            { label: 'Installing as single boot', link: '/en/installation/install-single-boot' },
            { label: 'Installing as dual boot with Linux or Windows', link: '/en/installation/install-dual-boot' },
            { label: 'Installing as guest in VMware', link: '/en/installation/install-guest-vmware' },
            { label: 'Installing as guest in VirtualBox', link: '/en/installation/install-guest-virtualbox' },
            { label: 'Installing as guest in Hyper-V', link: '/en/installation/install-guest-hyperv' },
            { label: 'Installing as guest in Parallels', link: '/en/installation/install-guest-parallels' },
            { label: 'Installing as guest in UTM', link: '/en/installation/install-guest-utm' },
            { label: 'Installing as guest in QEMU/KVM', link: '/en/installation/install-guest-qemu' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena Welcome', link: '/en/configuration/athena-welcome' },
            { label: 'Calamares Installer', link: '/en/configuration/calamares' },
            { label: 'Kernel', link: '/en/configuration/kernel' },
            { label: 'Shell', link: '/en/configuration/shell' },
            { label: 'Display Manager', link: '/en/configuration/display-manager' },
            { label: 'GNOME', link: '/en/configuration/gnome' },
            { label: 'Hyprland', link: '/en/configuration/hyprland' },
            { label: 'Repositories', link: '/en/configuration/repositories' },
            { label: 'NVIDIA Settings', link: '/en/configuration/nvidia' },
            { label: 'Resources', link: '/en/configuration/resources' },
          ],
        },
        {
          label: 'Tools',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena Tools', link: '/en/tools/athena-tools' },
            { label: 'Submitting Tools', link: '/en/tools/submitting-tools' },
          ],
        },
        {
          label: 'Customization',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Customizing Athena OS', link: '/en/customization/customization' },
          ],
        },
        {
          label: 'Containers',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS Docker Images', link: '/en/containers/docker-images' },
            { label: 'Athena OS Podman Images', link: '/en/containers/podman-images' },
          ],
        },
        {
          label: 'Windows Subsystem for Linux',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS WSL', link: '/en/wsl/wsl' },
            { label: 'Win-KeX', link: '/en/wsl/win-kex' },
          ],
        },
        {
          label: 'Support',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Troubleshooting', link: '/en/support/troubleshooting' },
          ],
        },
        {
          label: 'Community',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Contribute to Athena', link: '/en/community/contribute' },
            { label: 'Getting Help', link: '/en/community/getting-help' },
            { label: 'Official Athena OS Mirrors', link: '/en/community/mirrors' },
            { label: 'Setting Up a Athena OS Mirror', link: '/en/community/setting-mirrors' },
            { label: 'Submitting Bugs for Athena OS', link: '/en/community/submitting-bugs' },
          ],
        },
        {
          label: 'Policy',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS EULA', link: '/en/policy/eula-policy' },
            { label: 'Athena OS User Policy', link: '/en/policy/user-policy' },
            { label: 'Athena OS Network Service Policy', link: '/en/policy/network-policy' },
            { label: 'Athena OS Open Source Policy', link: '/en/policy/opensource-policy' },
            { label: 'Athena OS Update Policies', link: '/en/policy/update-policies' },
            { label: 'Athena OS User Policy', link: '/en/policy/user-policy' },
            { label: 'Athena OS Package Policy', link: '/en/policy/package-policy' },
            { label: 'Athena OS Penetration Test Tools Policy', link: '/en/policy/tools-policy' },
            { label: 'Athena OS Privacy Policy', link: '/en/policy/privacy-policy' },
            { label: 'Cookie Policy', link: '/en/policy/cookie-policy' },
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
