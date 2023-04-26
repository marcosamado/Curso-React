import NoControlado from "./Components/NoControlado";
import Formulario from "./Components/Formulario";
import TarjetaTarea from "./Components/TarjetaTarea";
const App = () => {
  
  return (
    <>
      <div className="container">


        {/* <h1>Formulario No Controlado</h1>
        <NoControlado /> */}

        <h2>Formulario Controlado</h2>
        <Formulario />
        <TarjetaTarea></TarjetaTarea>
        
      </div>
    </>
  )
}

export default App;