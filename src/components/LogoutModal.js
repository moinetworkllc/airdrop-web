import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RightArrowIcon, LogoutIcon } from '../components/SvgComponent';

export default function LogoutModal({logoutModal, setLogoutModal}) {
  return (
    <Transition.Root show={logoutModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setLogoutModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-fit transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setLogoutModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    X
                  </button>
                </div>
                
                <div className="flex flex-col mt-5 sm:mt-4 gap-6">
                
                <div className='text-moi-black-100 px-6'>
                  <p> User Name: Prathibha Bilagi</p>
                  <p> Wallet address: Prathibha Bilagi</p>
                </div>
                  <div className='text-black flex justify-end cursor-pointer'  onClick={() => setLogoutModal(false)}><LogoutIcon/></div>
                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
