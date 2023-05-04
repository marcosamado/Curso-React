// import NoControlado from "./Components/NoControlado";
import Formulario from "./Components/Formulario";
import TarjetaTarea from "./Components/TarjetaTarea";
import { useEffect, useState } from "react";

const initialState = JSON.parse(localStorage.getItem("tareasnp")) || [];

const App = () => {

  const [tarea, setTareas] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tarea));
  }, [tarea])

  const agregarTareaNueva = (nuevaTarea) => {
    setTareas([...tarea, nuevaTarea])
  }

  const eliminarTarea = (id) => {
    const nuevoArreglo = tarea.filter(tarea => tarea.id !== id)
  setTareas(nuevoArreglo);
  };

  const actualizarTarea = (id) => {
    const nuevoArreglo = tarea.map(tarea => {
      if(tarea.id === id){
        tarea.state = !tarea.state;
      }
      return tarea;
    });
    setTareas(nuevoArreglo);
  };

  const ordenarTareas = (arregloTareas) => {
    return arregloTareas.sort((a,b) => {
      if(a.priority === b.priority) return 0;
      if(a.priority) return -1;
      if(!a.priority) return 1;
    });
  };

  
  return (
    <>
      <div className="container">
        {/* <h1>Formulario No Controlado</h1>
        <NoControlado /> */}

        <h1 className="my-5">Formulario Controlado</h1>
        <Formulario agregarTarea={agregarTareaNueva}/>

        <TarjetaTarea tareas={ordenarTareas(tarea)} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea}/>
      </div>
    </>
  )
}

export default App;