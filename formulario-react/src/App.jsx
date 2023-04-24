import NoControlado from "./Components/NoControlado";
import Controlado from "./Components/Controlado";
import Cat from "./Components/Cat";
const App = () => {
  
  return (
    <>
      <div className="container">

        {/* <Cat></Cat> */}

        <h1>Formulario No Controlado</h1>
        <NoControlado />

        <h2>Formulario Controlado</h2>
        <Controlado />
      </div>
    </>
  )
}

export default App;