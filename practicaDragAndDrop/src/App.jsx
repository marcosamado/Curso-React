import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const arrayCopy = [...todos];
        const [todo] = arrayCopy.splice(startIndex, 1);
        arrayCopy.splice(endIndex, 0, todo);
        setTodos(arrayCopy);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h1>Todo App Drag and Drop</h1>
            <Droppable droppableId="todos">
                {(droppableProvider) => (
                    <ul
                        ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                    >
                        {todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {(draggableProvider) => (
                                    <li
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                    >
                                        {todo.text}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default App;
