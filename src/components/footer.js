import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import twitterlogo from "../../public/images/twitter-logo.svg";
import LinkedInlogo from "../../public/images/LinkedInlogo.svg";
import InstagramIcon from "../../public/images/instagramIcon.svg";
import facebookIcon from "../../public/images/logo-facebook.svg";
import { FooterTabs } from "../utils/constants";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`${isDarkMode ? "bg-black" : "bg-white"}`}
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between mb-[70px]">
          <div>
            <h3
              className={`text-3xl font-semibold leading-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Join our newsletter to follow our news
            </h3>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className={`w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ${
                isDarkMode ? "ring-white/10 " : "ring-black"
              } placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6`}
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-moi-purple-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div
          className={`lg:grid lg:grid-cols-3 lg:gap-8 justify-items-end ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <div className="flex flex-col gap-y-5">
            <div>
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://moi.technology/images/moi.png"
                alt="Moi Technology"
              />
              <img
                className="hidden h-10 w-auto lg:block"
                src="https://moi.technology/images/moi.png"
                alt="Moi Technology"
              />
            </div>
            <p className="text-md">
              MOI is a transformational p2p protocol and an open network that
              empowers its users to dynamically control their identity, storage
              and digital assets based on their unique needs.
            </p>
            <div>
              <ul className="flex justify-items-start mt-10 md:mt-3">
                <li className="mr-4 md:mr-6 ">
                  <a
                    href="#"
                    className="text-white hover:text-primary transition-colors duration-200"
                  >
                    <Image src={twitterlogo} alt="Twitter" />
                  </a>
                </li>
                <li className="mr-4 md:mr-6 ms-0.5 linkedIn_pos">
                  <a
                    href="#"
                    className="text-white hover:text-primary transition-colors duration-200"
                  >
                    <Image src={LinkedInlogo} alt="LinkedIn" />
                  </a>
                </li>
                <li className="mr-4 md:mr-6">
                  <a
                    href="#"
                    className="text-white hover:text-primary transition-colors duration-200"
                  >
                    <Image src={facebookIcon} alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {Object.keys(FooterTabs).map((item, index) => {
            return (
              <div className="mt-10 md:mt-0 hidden lg:block" key={index}>
                <h3 className="text-sm font-semibold leading-6">{item}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {Object.values(FooterTabs)[index].map((data, index) => {
                    return (
                      <li key={index}>
                        <a href="#" className="text-sm leading-6">
                          {data.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="flex justify-between lg:hidden">
            {Object.keys(FooterTabs).map((item, index) => {
              return (
                <div className="mt-10 md:mt-0" key={index}>
                  <h3 className="text-sm font-semibold leading-6">{item}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {Object.values(FooterTabs)[index].map((data, index) => {
                      return (
                        <li key={index}>
                          <a href="#" className="text-sm leading-6">
                            {data.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-moi-purple-900 py-2">
        <p className="text-sm text-white text-center">
          All Copyrights are reserved @moi.technology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
