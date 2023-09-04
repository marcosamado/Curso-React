import React, { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "aprender react",
        },
        {
            id: 2,
            text: "Drag and drop",
        },
        {
            id: 3,
            text: "probando",
        },
    ]);

    return (
        <>
            <h1>Todo App Drag and Drop</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
