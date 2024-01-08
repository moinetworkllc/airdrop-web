import { Fragment, useState, useEffect, Component, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import IOMe from "iome-widget";
import { ThemeContext } from "../context/ThemeContext";
import { useRouter } from 'next/router';
import { IOMe, Connect, Utils } from "@iome/react-widget"
let iomeObj = new IOMe(process.env.NEXT_PUBLIC_DEVELOPERID, process.env.NEXT_PUBLIC_APPSECRET);


export default function IOMEModal({ setModalOpen, isModalOpen }) {
  const { setLoginData, loginData, setMoiState, authToken, setAuthToken } = useContext(ThemeContext);
  const router = useRouter();

  // Init
useEffect(() => {
	async function __initIome() {
		try {
			await iomeObj.InitDev();
			await iomeObj.InitApp();
		}catch(e) {
			// handle error
		}
	}
	__initIome();
},[])

  const onSuccess = async(creds) => {
    const currentDate = new Date().getTime()
    const token = await iomeObj.user.getAuthToken("SESSION", currentDate.toString())
    setAuthToken(token)
    creds && router.push("/eligibility");
    setMoiState((prevData) => ({
      ...prevData,
      isMoid: creds,
    }));
    setLoginData(creds)
    setModalOpen(false)
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
          <div className="fixed inset-0 bg-moi-white-100 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden transition-all bg-moi-white-100">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="mt-2 !text-black">
                      <Connect
                        onSuccess={onSuccess}
                        iome={iomeObj}
                      />
                      {/* <IOMe
                        onSuccess={onSuccess}
                      /> */}
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


