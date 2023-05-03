const Tarea = ({tareas, eliminarTarea, actualizarTarea}) => {

    const {title, description, id, state, priority } = tareas;


    return (
        <li className="list-group-item list-group-item-success">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && "text-decoration-line-through"}`}>{title}</h5> 
                    <p className={`${state && "text-decoration-line-through"}`}>{description}</p>
                    <div className="d-flex gap-2">
                        <button onClick={() => actualizarTarea(id)}className="btn btn-sm btn-info">{tareas.state ? "Rehacer" : "Completar"}</button>
                        <button onClick={() => eliminarTarea(id)} className="btn btn-sm btn-danger">Eliminar</button>
                    </div>
                </div>
                <span className="badge bg-primary ">{priority && "Prioritario"}</span>
            </div>
        </li>
    );
};
export default Tarea;