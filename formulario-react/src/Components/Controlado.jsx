import { useState } from "react";

const Controlado = () => { 
    
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [state, setState] = useState("pendiente");

    const [error, setError] = useState("")

    const [datosForm, setDatosForm] = useState({
        title: "",
        description: "",
        state: "pendiente",
        priority: false
    })
    const {title, description, state, priority} = datosForm;
    
    const accionSubmit = (event) => {
        event.preventDefault();
        setError("");
        
        if(!title.trim() || !description.trim()) {
            return setError("Rellene todos los campos");
        }; 
        console.log(datosForm)
     };

     const accionChange = (event) => {

        const  {name, type, checked, value} = event.target;
        setDatosForm({
            ...datosForm, [name] : type === "checkbox" ? checked : value
            // [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
        // console.log(event.target.name)
        // console.log(event.target.value)
     }

    return (
        <form onSubmit={accionSubmit} className="form-control mt-5">

            <input
            type="text"
            name="title"
            placeholder="Ingrese Tarea"
            className="form-control mb-2"
            value={title}
            onChange={accionChange}
            // onChange={event => setDatosForm({...datosForm, title: event.target.value})}
            />
            
            <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripcion"
            name="description"
            value={description}
            onChange={accionChange}
            // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
            />
            <div className="form-check mb-2">
                <input
                type="checkbox"
                className="form-check-input"
                name="priority"
                id="input-check"
                checked={priority}
                onChange={accionChange}
                />
                <label htmlFor="input-check">Dar Prioridad</label>
            </div>
            <select
                className="form-control mb-2"
                name="state"
                value={state}
                onChange={accionChange}
                // onChange={event => setDatosForm({...datosForm, state: event.target.value})}
                >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            
            <button type="submit" className="btn btn-success">Procesar</button>
            {
                error !== "" && <p className="mt-5 p-3 border border-danger">{error}</p>
            }

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </form>
    )
}

export default Controlado;