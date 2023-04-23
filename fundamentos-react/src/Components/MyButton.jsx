const MyButton  = ({text}) => {
    
    const accionBoton = (texto) => {
        console.log("Boton numero " + texto)
    };

    return (
        <button onClick={()=> accionBoton(text)}> {text} </button>
    );
};

export default MyButton;