import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
        setUser({
            name: "Marcos",
            email: "marquitosamado@hotmail.com",
        });
    };

    return (
        <div>
            <h1>Home</h1>
            {!user && <button onClick={handleLogin}>Login</button>}
        </div>
    );
};

export default HomePage;
