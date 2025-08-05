export interface navLinkItem {
  text: string | { en: string, fr: string };
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "Vipassana",
    link: "/vipassana/",
  },
  {
    text: "Cours",
    link: "/course/",
  },
  {
    text: "Le Centre",
    link: "/centre/",
  },
  {
    text: "Pour les enfants",
    link: "/enfants/",
  },
  // {
  //   text: "Pages",
  //   dropdown: [
  //     {
  //       text: "Portfolio",
  //       link: "/portfolio/couple-1/",
  //     },
  //     {
  //       text: "Legal",
  //       link: "/privacy-policy/",
  //     },
  //     {
  //       text: "Elements",
  //       link: "/elements/",
  //     },
  //     {
  //       text: "404",
  //       link: "/not-a-link/",
  //     },
  //   ],
  // },
];

export default navConfig;
