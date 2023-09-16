import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

const App = () => {
    const [counter, setCounter] = useState(0);

    const { data, loading, error } = useFetchData(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            <h1>useEffect</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Increment {counter}
            </button>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
