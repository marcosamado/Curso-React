import imgRott from "./assets/images/rottweiler.jpg"
import MyButton from "./Components/MyButton";
import MensajeBienvenida from "./Components/MensajeBienvenida";
// import ItemFruta from "./Components/ItemFruta";
import ListaFrutas from "./Components/ListaFrutas";
import ButtonState from "./Components/ButtonState";

// const MyButton = ({text}) => {

//     const accionBoton = (texto) => {
//         console.log("Boton numero " + texto)
//     }

//     return (
//         <button onClick={()=> accionBoton(text)}> {text} </button>
//     )
// }

// const MensajeBienvenida = ({estadoUser}) => estadoUser ? <h3>Bienvenido al sitio!!</h3> : <h3>Offline</h3>;



// const ItemFruta = ({key,itemFruta}) => {
//     return (
//         <li key={key}> {itemFruta}</li>
//     )
// }

const App = () => {

    const titulo = "Titulo agregado con interpolacion";
    const classTitulo = "text-center";

    const rutaImagen = "src/assets/images/rottweiler.jpg";
    const user = true;

    const frutas = ["🍎", "🍌","🍐","🥝"];
    const frutas2 = ["🍊", "🍅","🍉"];

    let contador = 0;

    return (
        <>
            <ButtonState numero={contador} ></ButtonState>
            <h1 className= {classTitulo} > {titulo} </h1>

            <img src= {imgRott} alt= {`imagen - ${titulo}`} />
            {/* <img src= {rutaImagen} alt= {`imagen - ${titulo}`} /> */}

            <MyButton text="boton 1"></MyButton>
            <MyButton text="boton 2"></MyButton>
            <MyButton text="boton 3"></MyButton>

            <MensajeBienvenida  estadoUser= {user}/>

            {
                // user ? <UserOn /> : "Offline"
                //se usar && si queremos ignorar el false del ternario
                // user && <UserOn /> 
            }

            <ListaFrutas array={frutas}/>
            <ListaFrutas array={frutas2}/>
            {/* <ul>
                {
                    frutas.map( (fruta,index) => {
                        return <li key= {index} text=""> {fruta} </li>
                        return <ItemFruta key= {index} itemFruta= {fruta} />
                    })
                }
            </ul> */}
        </>
    );
};
export default App;