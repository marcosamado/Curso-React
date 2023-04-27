const Tarea = ({tareas}) => {

    return (
        <li className="list-group-item list-group-item-primary mb-3"> {tareas.title} - {tareas.description}</li>
    );
};
export default Tarea;