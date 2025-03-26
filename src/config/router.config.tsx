import { Route, Routes } from "react-router-dom"
import HomeLayout from "../pages/layouts"
import LandingPage from "../pages/landing/landing.page"
import  { Notfoundpage } from "../components/common/notfound"
// import  NotFound from "../components/common/notfound"


// import { LampDemo } from "../components/ui/lamp"
// import { Cover } from "../components/ui/cover"
import { CoverDemo } from "../pages/projects/hireme"
import { ToastContainer } from "react-toastify"
import About from "@/pages/about"



const RoutingConfig = () =>{
    
    return (
        
        <>
        <ToastContainer />
        <Routes>
            <Route path = "/" element = {<HomeLayout/>}>
                <Route index element = {<LandingPage />}></Route>
                <Route path="home" element={<LandingPage />}></Route>
                <Route path="projects" element={<CoverDemo/>}></Route>
                <Route path="contact" element={<>hi</>}></Route> 
                <Route path="about" element={<><About /></>}></Route>
                <Route path="*" element={<Notfoundpage />}></Route>

                {/* <Route path="*" element={<NotFound />}></Route> */}
            </Route>
        </Routes>
        </>
    )
}
export default RoutingConfig