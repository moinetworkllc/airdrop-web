import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ToggleComponent from "./Toogle";
import { classNames } from "../utils/helpers";
import { ThemeContext } from "../context/ThemeContext";
import { HeaderTabs } from "../utils/constants";
import ButtonComponent from "../components/ButtonComponent";

export default function Header() {
  const { isDarkMode, loginId, handleLogin } = useContext(ThemeContext);

  return (
    <Disclosure
      as="nav"
      className={classNames(isDarkMode ? "bg-black" : "bg-moi-white", "shadow")}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex ">
                <div className="flex flex-shrink-0 items-center">
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
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {HeaderTabs.map((item, index) => {
                  return (
                    <a
                      href={item.href}
                      key={index}
                      className={classNames(
                        isDarkMode
                          ? "text-moi-snowfall"
                          : "text-moi-purple-400",
                        "inline-flex items-center px-1 pt-1 font-semibold text-md"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <div className="flex items-center">
                {!loginId ? (
                  <ButtonComponent
                    variant="primary"
                    className="mx-4 px-2 py-2 lg:px-3 lg:py-1 text-sm lg:text-md"
                    onClick={() =>
                      //handleLogin("0x9755aa020dB3784B15F286820CF4b6FC0075a712")
                      handleLogin("0zAND1z")
                    }
                  >
                    LogIn MOI ID
                  </ButtonComponent>
                ) : (
                  <div
                    className={classNames(
                      isDarkMode
                        ? "bg-moi-button-secondary"
                        : "bg-button-gradient",
                      "rounded-[40px] p-[2px] mx-4"
                    )}
                  >
                    <p
                      className={classNames(
                        isDarkMode
                          ? "bg-black text-white"
                          : "bg-white text-black",
                        "flex h-full items-center justify-center rounded-[40px] px-2 py-2 lg:px-3 lg:py-1 text-sm lg:text-md"
                      )}
                    >
                      {"0x975...5a712"}
                    </p>
                  </div>
                )}
                <ToggleComponent />
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
