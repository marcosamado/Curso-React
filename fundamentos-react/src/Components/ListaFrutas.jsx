import ItemFruta from "./ItemFruta";

const ListaFrutas = (props) => {
    
    return (<ul>
        {
        props.array.map((fruta,index) => {return <ItemFruta index={index} itemFruta={fruta} />})
        }

    </ul>)

}

export default ListaFrutas;