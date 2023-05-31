import { Fragment, useState, Component, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IOMe from "iome-widget";
import { ThemeContext } from "../context/ThemeContext";


export default function Modal({ setModalOpen, isModalOpen }) {
  const { setLoginData, loginData, setMoiState } = useContext(ThemeContext);

  const onSuccess = async(creds) => {
    setMoiState((prevData) => ({
      ...prevData,
      isMoid: creds,
    }));
    setLoginData(creds)
    setModalOpen(false)
    // IOMe username
    console.log(creds.userName);
    // IOMe UserID
    console.log(creds.userid);
    // User Authenticiation token to query information
    console.log(creds.authToken);

  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setModalOpen}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg backdrop-blur-md bg-moi-white-500 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="mt-2 !text-black">
                      <IOMe
                        onSuccess={onSuccess}
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      </Transition.Root> 
  );
}


