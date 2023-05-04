import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ToggleComponent from "./Toogle";
import { classNames } from "../utils/helpers";
import { ThemeContext } from "../context/ThemeContext";
import { HeaderTabs } from "../utils/constants";

export default function Header() {
  const { isDarkMode } = useContext(ThemeContext);

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
              <div className="flex items-center ">
                <button className="text-moi-indigo">LogIn MoiID</button>
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
