export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MARLIN",
  description:
    "Maritime Live Information - Live-Messungen in Häfen zu Wasser- und Luftbedingungen",
  navItems: [
    {
      label: "Projekt",
      href: "/",
    },
    {
      label: "Über uns",
      href: "/about",
    },
    {
      label: "Team",
      href: "/team",
    },
    // {
    //   label: "Sensordaten",
    //   href: "/sensors",
    // },
    {
      label: "Meilensteine",
      href: "/milestones",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Über uns",
      href: "/about",
    },
    {
      label: "Team",
      href: "/team",
    },
    // {
    //   label: "Sensordaten",
    //   href: "/sensors",
    // },
    {
      label: "Meilensteine",
      href: "/milestones",
    },
    {
      label: "Live-Plattform",
      href: "https://www.marlin-live.com",
    },
  ],
  links: {
    github: "https://github.com/Maritime-Live-Information",
    livePlatform: "https://www.marlin-live.com",
    hochschule: "https://hs-flensburg.de",
    geomar: "https://www.geomar.de",
  },
};
