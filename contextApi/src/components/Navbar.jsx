import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <nav>
                <Link to="/">HOME</Link> | {}
                {user && (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={() => setUser(false)}>Logout</button>
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;
