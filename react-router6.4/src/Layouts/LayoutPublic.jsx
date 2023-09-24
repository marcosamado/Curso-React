import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
    return (
        <>
            <Navbar />
            <main className="container text-center mt-5">
                <Outlet />
            </main>
            <footer className="container text-center mt-5">Footer</footer>
        </>
    );
};

export default LayoutPublic;
