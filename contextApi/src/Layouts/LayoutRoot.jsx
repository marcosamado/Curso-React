import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>Footer</footer>
        </div>
    );
};

export default LayoutRoot;
