import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Bienvenido "{user.name}"</h2>
        </div>
    );
};

export default Dashboard;
