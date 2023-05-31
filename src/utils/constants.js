import ApplicationIcon from "../../public/images/application.svg";
import ProjectIcon from "../../public/images/project-icon.svg";
import DiscoverIcon from "../../public/images/discover.svg";

export const ELIGIBILITY_CRITERIA = [
  {
    criteria: "You have a MOI ID",
    id: "isMoid",
    dataPoints : ["At least 10 characters (and up to 100 characters)", "At least one lowercase character"]
  },
  {
    criteria: "You have a verified phone number attached to your MOI ID",
    id: "phone_no",
    dataPoints : ["Verified Phone number"]
  },
  {
    criteria: "You have a verified email address attached to your MOI ID",
    id: "email",
    dataPoints : ["Verified Email"]
  },
  {
    criteria: "You have performed KYC of your MOI ID",
    id: "kyc",
    dataPoints : ["Done KYC"]
  },
  {
    criteria: "You have hosted a unique validator node through your MOI ID",
    id: "validator_nodes",
    dataPoints : ["Uinque Validtor nodes"]
  },
  {
    criteria: "You have hosted a unique validator node since May 2022",
    id: "validator_nodes_may",
    dataPoints : ["Hosted Validator Nodes"]
  },
  {
    criteria: "You have engaged with our Official Twitter account",
    id: "twitter",
    dataPoints : ["Twitter"]
  },
  {
    criteria: "You have engaged in our Official Telegram Community",
    id: "telegram",
    dataPoints : ["Telegram"]
  },
  {
    criteria: "You have engaged in our Official Discord Community",
    id: "discord",
    dataPoints : ["Discord"]
  },
  {
    criteria: "You have signed transactions on our INDUS Testnet",
    id: "interactions",
    dataPoints : ["interactions"]
  },
  {
    criteria: "You have kramaID",
    id: "kramaID",
    dataPoints : ["Krama ID"]
  },
  {
    criteria: "You have created an App",
    id: "createdApp",
    dataPoints : ["createdApp"]
  },
  {
    criteria: "You are part of an App",
    id: "partApp",
    dataPoints : ["partApp"]
  },
  {
    criteria: "You have created an Avatar",
    id: "createdAvatar",
    dataPoints : ["createdAvatar"]
  },
  {
    criteria: "Your Avatar has been scanned at least once",
    id: "scannedAvatar",
    dataPoints : ["scannedAvatar"]
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
  "Our Company": [
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
      link: "",
      target: "_blank",
    },
    {
      label: "Solutions",
      link: "",
      target: "_blank",
      text: "",
    },
    {
      label: "Roadmap",
      link: "",
      target: "_blank",
      text: "",
    },
    {
      label: "Whitepaper",
      link: "",
      target: "_blank",
      text: "",
    },
    {
      label: "Airdrop",
      link: "",
      target: "_blank",
      text: "",
    },
  ],
};
