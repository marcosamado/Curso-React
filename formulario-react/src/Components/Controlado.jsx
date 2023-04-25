import { useState } from "react";

const Controlado = () => { 
    
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [state, setState] = useState("pendiente");

    const [datosForm, setDatosForm] = useState({
        title: "",
        description: "",
        state: "pendiente",
        priority: false
    })
    
    const accionSubmit = (event) => {
        event.preventDefault();
        console.log(datosForm)
     };

     const accionChange = (event) => {
        setDatosForm({...datosForm, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value})
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
            value={datosForm.title}
            onChange={accionChange}
            // onChange={event => setDatosForm({...datosForm, title: event.target.value})}
            />
            
            <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripcion"
            name="description"
            value={datosForm.description}
            onChange={accionChange}
            // onChange={event => setDatosForm({...datosForm, description: event.target.value})}
            />
            <div className="form-check mb-2">
                <input
                type="checkbox"
                className="form-check-input"
                name="priority"
                id="input-check"
                checked={datosForm.priority}
                onChange={accionChange}
                />
                <label htmlFor="input-check">Dar Prioridad</label>
            </div>
            <select
                className="form-control mb-2"
                name="state"
                value={datosForm.state}
                onChange={accionChange}
                // onChange={event => setDatosForm({...datosForm, state: event.target.value})}
                >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            
            <button type="submit" className="btn btn-success">Procesar</button>
        </form>
    )
}

export default Controlado;