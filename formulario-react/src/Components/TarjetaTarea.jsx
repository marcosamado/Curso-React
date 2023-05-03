import Tarea from "./Tarea";

const TarjetaTarea = ({tareas, eliminarTarea, actualizarTarea}) => {



    return (
        <div className="my-5  list-group">
            <h2 className="text-center mb-3 mt-4"> Tareas </h2>
            <ul className="p-0  list-unstyled">
                {
                    tareas.map((tarea) => (
                        <Tarea key={tarea.id} tareas={tarea} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea}/>
                    ))  
                }
                {
                    tareas.length === 0 && <li className="list-group-item list-group-item-dark text-center">No hay tareas</li>
                }
            </ul>
        </div>
    );

};

export default TarjetaTarea;