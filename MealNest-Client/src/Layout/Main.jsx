import { Helmet } from "react-helmet";
import NavBar from "../shared/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer2 from "../shared/Footer2";

const Main = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className="">
            {noHeaderFooter || <div className=" bg-navy ">
                <NavBar />
            </div>}
            <Outlet />
            {noHeaderFooter || <Footer2></Footer2>}
        </div>
    );
};

export default Main;