import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
    const navigation = useNavigation();

    return (
        <>
            <Navbar />
            <main className="container text-center mt-5">
                {navigation.state === "loading" && (
                    <div className="alert alert-danger my-5">
                        <h2>Loading...</h2>
                    </div>
                )}
                <Outlet />
            </main>
            <footer className="container text-center mt-5">Footer</footer>
        </>
    );
};

export default LayoutPublic;
