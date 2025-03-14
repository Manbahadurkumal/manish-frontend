'use client'
// import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // toast.success("hello")
  // const notify = () => toast.success('🦄 Wow so easy!', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: false,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light"
  //   });
  return (
    <header className="bg-white dark:bg-black ">
      {/* border-b border-gray-200 dark:border-gray-700 */}
    {/* // <header className="bg-white"> */}
      <nav aria-label="Global" className="mx-auto flex items-between justify-between max-w-7xl dark:border-gray-700 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link  to="/home" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="manish.png"
              className="h-12 w-auto dark:invert"
            />
          </Link>
        </div>
        <div className="flex justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex left-1/2 lg:gap-x-12 ">
          
          <Link  to="/home" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Home
          </Link>

          <Link  to="/projects" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Projects
          </Link>
          <Link  to="/contact" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Contact
          </Link>
          <Link  to="/hireme" className="text-sm/6 font-semibold text-gray-900 dark:text-white" >
          hireme
          </Link>
          
        </PopoverGroup>
        
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link  to="#" className="text-sm/6 font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
</svg>

          </Link>
        </div> */}
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link  to="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="manish.png"
                className="h-8 w-auto dark:invert"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6 ">
              <Link 
                  to="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-black"
                >
                  Home
                </Link>
                <Link 
                  to="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-black"
                >
                  Projects
                </Link>
                <Link 
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-black"
                >
                  Contact
                </Link>
                <Link 
                  to="hireme"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-black"
                >
                Hire Me
                </Link>
              </div>
              {/* <div className="py-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
</svg>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}