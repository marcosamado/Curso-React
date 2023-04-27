import Tarea from "./Tarea";

const TarjetaTarea = ({tareas}) => {



    return (
        <div className="my-5 list-group">
            <h2 className="text-center mb-3"> Tareas </h2>
            <ul className="p-0  list-unstyled">
                {
                    tareas.map((tarea) => (
                        // <li className="list-group-item list-group-item-primary mb-3" key={tarea.id}> {tarea.title} - {tarea.description}</li>
                        <Tarea key={tarea.id} tareas={tarea}/>
                    ))  
                }
            </ul>
        </div>
    );

};

export default TarjetaTarea;