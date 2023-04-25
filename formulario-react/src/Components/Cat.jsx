import { useState } from "react";

const Cat = () => {
    
    const [cat, catSet] = useState({
        nombre: "cat",
        edad: 5
    })

    const cambiarEdad = () => {
        console.log(cat.edad)

        catSet({ ...cat, edad: cat.edad + 1 });

        // catSet((prev)=> ({ ...prev, edad: cat.edad + 1 }))
    }

    

    return (
        <>
            <h2 >
                {cat.nombre} - {cat.edad}
            </h2>
            <button onClick={cambiarEdad} className="btn btn-info mb-2">
                Edad +
            </button>
        </>
    )

}

export default Cat;