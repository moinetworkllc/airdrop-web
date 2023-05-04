import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-header-bg shadow ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center h-20 ">
            <div className="relative flex h-16 justify-between">
              <div className="flex items-center ">
                <img className="block h-8 w-auto lg:hidden" alt="Your Company" />
                <img className="hidden h-8 w-auto lg:block" src="public/vercel.svg" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 leading-7	 px-2 pt-1 text-xl font-normal text-white"
                >
                  Learn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 leading-7	 border-transparent px-2 pt-1 text-xl font-normal
 text-white"
                >
                  Ecosystem
                </a>
                <a
                  href="#"
                  className=" leading-7	inline-flex items-center border-b-2 border-transparent px-2 pt-1 text-xl font-normal
 text-white"
                >
                  MOI Indus
                </a>
                <a
                  href="#"
                  className=" leading-7	inline-flex items-center border-b-2 border-transparent px-2 pt-1 text-xl font-normal
 text-white"
                >
                  whitepaper
                </a>
              </div>
            </div>
            <div className="flex item-center ">
              <div className="ml-auto ">
                <button className="	font-medium rounded-lg px-4 lg:px-5 py-3 colorgradient text-white">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
