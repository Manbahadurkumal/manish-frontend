import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/common/header";
import FooterComponent from "../../components/common/footer";
import { Footerdemo } from "@/components/ui/footer-section";



const HomeLayout = () =>{
    return (<>
    <HeaderComponent />
        <Outlet />
    <FooterComponent />
    {/* <Footerdemo /> */}
    </>)
}
export default HomeLayout
