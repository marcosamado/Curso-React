import NoControlado from "./Components/NoControlado";
import Formulario from "./Components/Formulario";
import TarjetaTarea from "./Components/TarjetaTarea";
import { useState } from "react";

const initialState = [
  {
    id: 1,
    title: "titulo#01",
    description: "descripcion#01",
    state: false,
    priority: false 
  },
  {
    id: 2,
    title: "titulo#02",
    description: "descripcion#02",
    state: true,
    priority: true 
  }
]

const App = () => {

  const [tarea, setTareas] = useState(initialState)

  const agregarTareaNueva = (nuevaTarea) => {
    setTareas([...tarea, nuevaTarea])
  }
  
  return (
    <>
      <div className="container">
        {/* <h1>Formulario No Controlado</h1>
        <NoControlado /> */}

        <h1 className="my-5">Formulario Controlado</h1>
        <Formulario agregarTarea={agregarTareaNueva}/>
        <TarjetaTarea tareas={tarea}/>
      </div>
    </>
  )
}

export default App;