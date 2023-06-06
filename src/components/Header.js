import { Fragment, useContext, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ToggleComponent from "./Toogle";
import { classNames } from "../utils/helpers";
import { ThemeContext } from "../context/ThemeContext";
import { HeaderTabs } from "../utils/constants";
import ButtonComponent from "../components/ButtonComponent";
import Link from "next/link";
import PopoverModal from "./PopoverModal";
import { LogoutIcon } from '../components/SvgComponent';

export default function Header() {
  const { isDarkMode, loginId, handleLogin, setModalOpen, loginData, moiState } = useContext(ThemeContext);
  const [logoutModal, setLogoutModal] = useState(false);

  useEffect(() => {
    if(loginData) {
      handleLogin(loginData.userName);
    }
  }, [loginData])

  return (
    <Disclosure
      as="nav"
      // className={classNames(isDarkMode ? "bg-moi-white-600" : "bg-moi-black-300")}
    >
      {({ open }) => (
        <> 
          <div className="2xl:max-w-screen-2xl mx-5 md:mx-[64px] 2xl:mx-auto px-0 lg:px-4 pt-3 pb-8">
            <PopoverModal logoutModal={logoutModal} setLogoutModal={setLogoutModal}>  
              <div className="flex flex-col mt-5 sm:mt-4 gap-6">
                <div className='text-moi-black-100 px-6'>
                  <p> User Name: Prathibha Bilagi</p>
                  <p> Wallet address: Prathibha Bilagi</p>
                </div>
                <div 
                  className='text-black flex justify-end cursor-pointer' 
                  onClick={() => setLogoutModal(false)}
                >
                  <LogoutIcon/>
                </div>
              </div>
            </PopoverModal>
            <div className="relative flex h-16 justify-between">
              <div className="flex ">
                <div className="flex flex-shrink-0 items-center">
                  {isDarkMode ? <Link href="/">
                    <img
                    className="h-14 w-auto"
                    src="/images/moi-dark-logo.svg"
                    alt="Moi Technology"
                  />
                  </Link>
                  :<Link href="/">
                    <img
                    className="h-14 w-auto"
                    src="/images/moi-light-logo.svg"
                    alt="Moi Technology"
                  /></Link>}
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                </div>
              </div>
              <div className="hidden md:hidden lg:flex sm:ml-6 sm:flex sm:space-x-8">
                {HeaderTabs.map((item, index) => {
                  return (
                    <a
                      href={item.href}
                      key={index}
                      className={classNames(
                        isDarkMode
                          ? "text-moi-purple-600"
                          : "text-moi-white-100",
                        "inline-flex items-center px-1 pt-1 font-semibold text-md"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <div className="flex items-center">
                <div>{!moiState["isMoid"].userid ? (
                  <ButtonComponent
                    variant="primary"
                    className="mx-4 px-2 py-2 lg:px-8 lg:py-2 text-sm lg:text-lg"
                    onClick={() => {
                      setModalOpen(true)
                    }
                    }
                  >
                    LogIn MOI ID
                  </ButtonComponent>
                ) : (
                  <div
                    className={classNames(
                      isDarkMode
                        ? "border-2 border-moi-purple-800"
                        : "border-2 border-moi-grey",
                      "rounded-3xl p-[2px] mx-4"
                    )}
                  >
                    <button
                      onClick={() => setLogoutModal(true)}
                      className={classNames(
                        isDarkMode
                          ? "bg-moi-white-600 text-moi-purple-200"
                          : "bg-moi-purple-dark text-moi-white-100",
                        "flex h-full items-center justify-center rounded-3xl px-2 py-2 lg:px-8 lg:py-2 text-sm lg:text-lg font-semibold"
                      )}
                    >
                      {moiState["isMoid"].userName}
                    </button>
                  </div>
                )}</div>
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
