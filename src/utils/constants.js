import ApplicationIcon from '../../public/images/application.svg'
import ProjectIcon from '../../public/images/project-icon.svg'
import DiscoverIcon from '../../public/images/discover.svg'

export const ELIGIBILITY_CRITERIA = [
  {
    criteria: "You have a MOI ID",
  },
  {
    criteria: "You have a verified phone number attached to your MOI ID",
  },
  {
    criteria: "You have a verified email address attached to your MOI ID",
  },
  {
    criteria: "You have performed KYC of your MOI ID",
  },
  {
    criteria: "You have hosted a unique validator node through your MOI ID",
  },
  {
    criteria: "You have engaged with our Official Twitter account",
  },
  {
    criteria: "You have engaged in our Official Telegram Community",
  },
  {
    criteria: "You have engaged in our Official Discord Community",
  },
  {
    criteria: "You have signed transactions on our INDUS Testnet",
  },
  {
    criteria: "You have created an App",
  },
  {
    criteria: "You are part of an App",
  },
  {
    criteria: "You have created an Avatar",
  },
  {
    criteria: "Your Avatar has been scanned at least once",
  },
];

export const HeaderTabs = [
  {
    name: "Smart Contracts",
    href: "/",
  },
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Solutions",
    href: "/",
  },
  {
    name: "Roadmap",
    href: "/",
  },
  {
    name: "Whitepaper",
    href: "/",
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
    'Our Company': [
      {
        label: "Home",
        target: "_blank",
        text: "home",
      },
  
      {
        label: "About",
        target: "_blank",
      },
  
      {
        label: "Services",
        target: "_blank",
        text: "services",
      },
      {
        label: "News",
        target: "_blank",
      },
      {
        label: "Contact",
        target: "_blank",
        text: "contact",
      },
    ],
  
    Services: [
      {
        label: "Smart COntract",
        link: '',
        target: "_blank",
      },
      {
        label: "Solutions",
        link: '',
        target: "_blank",
        text: "",
      },
      {
        label: "Roadmap",
        link: '',
        target: "_blank",
        text: "",
      },
      {
        label: "Whitepaper",
        link: '',
        target: "_blank",
        text: "",
      },
      {
        label: "Airdrop",
        link: '',
        target: "_blank",
        text: "",
      },
    ],
  };
