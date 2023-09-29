import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // TODA LA LOGICA QUE QUIERAS GLOBALIZAR

    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
