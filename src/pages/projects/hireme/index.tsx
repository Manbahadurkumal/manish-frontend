// import React from "react";
import { useEffect } from "react";
import { Cover } from "../../../components/ui/cover";
import { toast } from "react-toastify";
export function CoverDemo() {
  useEffect(() =>{
          toast.success('Hire ME!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      }, [])
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
       Did you like my projects?<br /> <Cover>Hire me !</Cover>
      </h1>
      <p className="text-xl md:text-xl lg:text-xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">I want to be a part of your family.</p>
    </div>
  );
}