import React, { useContext } from "react";
import {
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  TelegramIcon,
  LinkdlnIcon,
  FacebookIcon,
  RightArrowIcon,
} from "./SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import { FooterTabs } from "../utils/constants";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const footerSocials = [
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/moi_tech",
    },
    {
      icon: <InstagramIcon />,
      link: "/",
    },
    {
      icon: <DiscordIcon />,
      link: "/",
    },
    {
      icon: <TelegramIcon />,
      link: "https://t.me/+SI4Qc2TVvyozOWU1",
    },
    {
      icon: <LinkdlnIcon />,
      link: "https://www.linkedin.com/company/sarvalabsinc/",
    },
    {
      icon: <FacebookIcon />,
      link: "/",
    },
  ];

  return (
    <footer className="bg-moi-dark text-moi-white-300 items-start text-left md:text-right lg:text-right">
      <div className="px-0 lg:px-4 py-8 lg:py-20 lg:p-auto flex flex-col gap-y-28 2xl:max-w-screen-2xl mx-5 md:mx-[64px] 2xl:mx-auto">
        <div className="gap-10 grid">
          <div className="gap-16 lg:gap-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="gap-32 grid grid-flow-col items-start">
              <div className="grid gap-6">
                <div className="grid self-center relative">
                  <img
                    src="/images/moi-light-logo.svg"
                    alt="Moi Technology"
                    className="h-12 lg:h-[80px]"
                  />
                </div>
                <p className="text-sm 2xl:text-base text-left">
                  The world's first context-aware, participant-centric, p2p
                  protocol and blockchain network built on ISM technology.
                </p>
              </div>
            </div>
            <div className="gap-16 2xl:gap-32 col-span-2 grid-cols-3 items-start hidden md:grid ">
              {Object.keys(FooterTabs).map((item, index) => (
                <div className="grid gap-6" key={index}>
                  <h5 className="text-base font-semibold">{item}</h5>
                  <div className="grid gap-4">
                    {Object.values(FooterTabs)[index].map((data) => (
                      <a key={data.label} className="text-sm text-moi-white-300" href={data.link}>
                        {data.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gap-6 lg:gap-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="gap-32 grid grid-flow-col items-start">
              <div className="grid gap-6 text-sm 2xl:text-base">
                <h5 className="text-left text-base font-semibold">Sign Up For Our Newsletter</h5>
                <div>
                  <form>
                    <div className="">
                      <div className="relative w-full border-2 border-moi-white-800 bg-transparent rounded-2xl text-left col-span-2">
                        <input
                          className="w-full rounded-2xl px-4 py-3 bg-transparent placeholder:text-xs placeholder:text-moi-grey placeholder:font-semibold"
                          placeholder="Enter your email"
                        />
                        <button className="absolute text-white top-3 right-5">
                          <RightArrowIcon />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-span-2 gap-32 grid grid-flow-col items-start md:justify-self-end">
              <div className="grid gap-6">
                <h5 className="text-base font-semibold">Community</h5>
                <div className="grid gap-2">
                  <div className="gap-10 text-moi-white-300 grid auto-cols-max grid-flow-col lg:justify-self-end md:justify-self-end overflow-hidden">
                    {footerSocials.map((item, index) => (
                      <a key={index} href={item.link} target="_blank">
                        {item.icon}
                      </a>
                    ))}
                  </div>
                  <p className="justify-content-end tracking-normal">
                    For any queries, contact{" "}
                    <a href="mailto:mail@moi.technology" target="_blank">
                      mail@moi.technology
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center grid grid-cols-1">
            <p className="">
              © {new Date().getFullYear()}{" "}
              <a
                className="text-moi-purple-100"
                href="https://sarva.ai/"
                target="_blank"
              >
                Sarva Labs Inc{" "}
              </a>
              All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
