import ApplicationIcon from "../../public/images/application.svg";
import ProjectIcon from "../../public/images/project-icon.svg";
import DiscoverIcon from "../../public/images/discover.svg";

export const HeaderTabs = [
  {
    name: "Babylon",
    href: "https://moi.technology/pages/babylon.html",
    target: ""
  },
  {
    name: "Technology",
    href: "https://moi.technology/pages/technology.html",
    target: ""
  },
  {
    name: "Humans",
    href: "https://moi.technology/pages/people.html",
    target: ""
  },
  {
    name: "Blog",
    href: "https://blog.moi.technology/",
    target: ""
  },
  {
    name: "Documentation",
    href: "https://docs.moi.technology/",
    target: "_blank"
  },
];

export const CardContent = [
  {
    header: "VISIT THE FORM",
    text: "View or submit delegate applications",
    image: ApplicationIcon,
    href: "/",
  },
  {
    header: "EXPLORE THE ECOSYSTEM",
    text: "Get a hold of your dictionaries and history books for this one, its quite a doozy",
    image: ProjectIcon,
    href: "/",
  },
  {
    header: "READ THE DOCS",
    text: "Discover the future we believe in",
    image: DiscoverIcon,
    href: "/",
  },
];

export const FooterTabs = {
  Legal: [
    {
      label: "Privacy Policy",
      target: "_blank",
      link: "https://moi.technology/pages/privacy-policy.html",
    },
    {
      label: "Cookie Policy",
      target: "_blank",
      link: "https://moi.technology/pages/cookie-policy.html",
    }
  ],
  Sitemap: [
    {
      label: "Technology",
      target: "_blank",
      link: "https://moi.technology/pages/technology.html",
    },
    {
      label: "People",
      target: "_blank",
      link: "https://moi.technology/pages/people.html",
    },
    {
      label: "Blogs",
      target: "_blank",
      link: "https://blog.moi.technology/",
    },
    {
      label: "Documentation",
      target: "_blank",
      link: "https://docs.moi.technology/",
    },
    {
      label: "Project Roadmap",
      target: "_blank",
      link: "/",
    },
    {
      label: "Babylon Testnet",
      target: "_blank",
      link: "https://moi.technology/pages/babylon.html",
    }
  ],
  'MOI Ecosystem': [
    {
      label: "Voyage Explorer",
      target: "_blank",
      link: "https://voyage.moi.technology/",
    },
    {
      label: "MOI Bit",
      target: "_blank",
      link: "https://moibit.io/",
    },
    {
      label: "IOMe",
      target: "_blank",
      link: "https://iome.ai/",
    },
    {
      label: "MOI Nation",
      target: "_blank",
      link: "https://moination.com/",
    },
    {
      label: "Mint Valley",
      target: "_blank",
      link: "https://mintvalley.ai/",
    }
  ],
};
