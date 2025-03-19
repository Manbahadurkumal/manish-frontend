import { ReactNode, useEffect } from "react";
import { toast } from "react-toastify";
import { TimelineDemo } from "./timeline/timelinedata";
import { HeroHighlightDemo } from "./hero-highlight/herohighlight-data";


const LandingPage = (): ReactNode =>{
    useEffect(() =>{
        toast.success('Namaste! Sanchai Hununxa?', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }, [])
    return (
        <>
        <HeroHighlightDemo />
        <TimelineDemo />
        
        </>
    )
}

export default LandingPage