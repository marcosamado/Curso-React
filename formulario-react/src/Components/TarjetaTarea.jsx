const TarjetaTarea = ({tareas}) => {



    return (
        <div className="my-5 list-group">
            <h2 className="text-center mb-3"> Tareas </h2>
            <ul className="p-0  list-unstyled">
                {
                    tareas.map((tarea) => (
                        // <a href="#" className="list-group-item list-group-item-action list-group-item-info mb-3"><li key={tarea.id}> {tarea.title}</li></a>
                        <li className="list-group-item list-group-item-primary mb-3" key={tarea.id}> {tarea.title}</li>
                    ))  
                }
            </ul>
        </div>
    );

};

export default TarjetaTarea;