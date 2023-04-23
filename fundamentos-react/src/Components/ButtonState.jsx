import { useState } from "react";

const ButtonState = ({numero}) => {

    // let count = 0;
    // const arrayState = useState(count);
    
    // const stateCount = arrayState[0];
    // const stateFunction = arrayState[1];

    // ******* Destructuring Array 

    
    const [count, setCount] = useState(numero)
    



    const clickUp = () => { 
        // stateFunction(stateCount + 1)
        setCount(count + 1);
     }

     const clickDown = () => { 
        setCount(count -1)
     }

    return (
            <div> 
                <button onClick={clickUp}>button State +</button> 
                <button onClick={clickDown} disabled={count === 0 && true}>button State -</button> 
                <span>{count}</span> 
            </div>
    );
};

export default ButtonState; 