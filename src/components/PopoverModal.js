import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function PopoverModal({logoutModal, setLogoutModal, children}) {
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
              <Dialog.Panel className="w-fit lg:w-[350px] relative transform overflow-hidden rounded-xl bg-white pb-4 pt-5 text-left shadow-xl transition-all sm:my-8">
                <div className="flex justify-between items-center px-4 pb-3">
                  <div>
                  
                  </div>
                  <div>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setLogoutModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    X
                  </button>
                  </div>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
