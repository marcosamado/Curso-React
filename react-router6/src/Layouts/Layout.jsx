import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>Este es el footer</footer>
        </>
    );
};

export default Layout;
