import { useRef, useState } from "react";

const NoControlado = () => { 
    
    const form = useRef(null);

    const [error, setError] = useState("");


    const accionSubmit = (event) => {
        event.preventDefault();
        setError("");

        // CAPTURAMOS LOS DATOS
        const data = new FormData(form.current);
        
        // const data2 = data.entries().next().value;
        // esto es lo que hace el spread ... operator 
        console.log(...data.entries());

        
        const dataObject = Object.fromEntries([...data.entries()]);
        // console.log(dataObject);

        const {title, description, state} = dataObject;
        // console.log(title,description,state);


        // VALIDAMOS LOS DATOS 
        if(!title.trim() || !description.trim() || !state.trim()){
            return setError("Llene los espacios vacios")
        }
        // ENVIAMOS LOS DATOS 
        // console.log(title, description,state)
    }


    return (
        <form ref={form} onSubmit={accionSubmit} className="form-control mt-5">

            <input
            type="text"
            name="title"
            placeholder="Ingrese Tarea"
            className="form-control mb-2"
            />
            
            <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripcion"
            name="description"
            />
            
            <select className="form-control mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            
            <button type="submit" className="btn btn-success">Procesar</button>

            {
            error !== "" && <p className="mt-5 p-3 border border-danger">{error}</p>
            }
        </form>
    )
}

export default NoControlado;