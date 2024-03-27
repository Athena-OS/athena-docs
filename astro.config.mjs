import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://athenaos.org/',
  integrations: [
    starlight({
      title: 'Athena OS',
      description: 'Athena OS, a new pentesting/cybersecurity linux distribution.',
      logo: {
        light: '/src/assets/athena-light-logo.svg',
        dark: '/src/assets/athena-dark-logo.svg',
      },
      customCss: process.env.NO_GRADIENTS ? [	'./src/styles/_global.css'] : ['./src/styles/landing.css', 	'./src/styles/_global.css'],
      social: {
        github: 'https://github.com/Athena-OS',
        instagram: 'https://www.instagram.com/athenaos_sec',
        discord: 'https://discord.gg/athena-os-977645785170714644',
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
            { label: 'Installing by NixOS', link: '/en/installation/install-nixos' },
            { label: 'Installing as persistent USB', link: '/en/installation/install-persistent-usb' },
            { label: 'Installing as guest in VMware', link: '/en/installation/install-guest-vmware' },
            { label: 'Installing as guest in VirtualBox', link: '/en/installation/install-guest-virtualbox' },
            { label: 'Installing as guest in Hyper-V', link: '/en/installation/install-guest-hyperv' },
            { label: 'Installing as guest in QEMU/KVM', link: '/en/installation/install-guest-qemu' },
            { label: 'Installing as guest in Parallels', link: '/en/installation/install-guest-parallels' },
            { label: 'Installing as guest in UTM', link: '/en/installation/install-guest-utm' },
            { label: 'Updating Athena OS', link: '/en/installation/update-athena' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Aegis Installer TUI', link: '/en/configuration/aegis-tui' },
            // { label: 'Calamares Installer', link: '/en/configuration/calamares' },
            { label: 'Kernel', link: '/en/configuration/kernel' },
            { label: 'Shell', link: '/en/configuration/shell' },
            // { label: 'Display Manager', link: '/en/configuration/display-manager' },
            { label: 'GNOME', link: '/en/configuration/gnome' },
            // { label: 'Bspwm', link: '/en/configuration/bspwm' },
            // { label: 'KDE Plasma', link: '/en/configuration/kde' },
            { label: 'MATE', link: '/en/configuration/mate' },
            { label: 'Cinnamon', link: '/en/configuration/cinnamon' },
            // { label: 'XFCE', link: '/en/configuration/xfce' },
            { label: 'Hyprland', link: '/en/configuration/hyprland' },
            // { label: 'NVIDIA GPU', link: '/en/configuration/nvidia' },
            { label: 'Repositories', link: '/en/configuration/repositories' },
            { label: 'Utilities', link: '/en/configuration/utilities' },
          ],
        },
        {
          label: 'Cyber Resources',
          items: [
            // Each item here is one entry in the navigation menu.
            // { label: 'Athena Welcome', link: '/en/resources/athena-welcome' },
            { label: 'Pentesting Tools', link: '/en/resources/pentesting-tools' },
            // { label: 'Athena Cyber Hub', link: '/en/resources/cyber-hub' },
            { label: 'Hack The Box Toolkit', link: '/en/resources/htb-toolkit' },
            { label: 'PWNage Menu', link: '/en/resources/pwnage-menu' },
            { label: 'Blue Team Menu', link: '/en/resources/blueteam-menu' },
            { label: 'Red Team Menu', link: '/en/resources/redteam-menu' },
            { label: 'Payload to Dock', link: '/en/resources/payload-dock' },
            { label: 'Payload Environment Variables', link: '/en/resources/payload-variables' },
            { label: 'Browser Pentesting Resources', link: '/en/resources/browser-pentesting' },
            { label: 'NIST Feed', link: '/en/resources/nist-feed' },
          ],
        },
        //{
        //  label: 'Customization',
        //  items: [
        //    // Each item here is one entry in the navigation menu.
        //    { label: 'Customizing Shells', link: '/en/customization/shell' },
        //    { label: 'Customizing Display Managers', link: '/en/customization/display-manager' },
        //    { label: 'Customizing Terminal Tools', link: '/en/customization/terminal-tools' },
        //  ],
        //},
        {
          label: 'Containers',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS Core Image', link: '/en/containers/core-image' },
            { label: 'Athena OS RDP Image', link: '/en/containers/rdp-image' },
          ],
        },
        {
          label: 'Windows Subsystem for Linux',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS WSL', link: '/en/wsl/wsl' },
            // { label: 'Win-KeX', link: '/en/wsl/win-kex' },
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
            // { label: 'Official Athena OS Mirrors', link: '/en/community/mirrors' },
            { label: 'Style Guide', link: '/en/community/style-guide' },
            // { label: 'Setting up a Mirror', link: '/en/community/setting-mirror' },
            { label: 'Submitting Bugs', link: '/en/community/submitting-bugs' },
            { label: 'Submitting Themes', link: '/en/community/submitting-themes' },
            { label: 'Submitting Tools', link: '/en/community/submitting-tools' },
          ],
        },
        {
          label: 'Policy',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS EULA', link: '/en/policy/eula-policy' },
            // { label: 'Athena OS Network Service Policy', link: '/en/policy/network-policy' },
            { label: 'Athena OS Collaboration Policy', link: '/en/policy/collaboration-policy' },
            { label: 'Athena OS Open Source Policy', link: '/en/policy/opensource-policy' },
            { label: 'Athena OS Package Policy', link: '/en/policy/package-policy' },
            { label: 'Athena OS Pentesting Tools Policy', link: '/en/policy/tools-policy' },
            { label: 'Athena OS Privacy Policy', link: '/en/policy/privacy-policy' },
            { label: 'Athena OS Update Policy', link: '/en/policy/update-policy' },
            { label: 'Athena OS User Policy', link: '/en/policy/user-policy' },
            // { label: 'Cookie Policy', link: '/en/policy/cookie-policy' },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
