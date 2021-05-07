import React from "react"

export default function Card(props){
    const [quantity,setQuantity] = React.useState(1)

    function addItem(){
        setQuantity(quantity+1)
        props.select(props.item.index,props.item.price,props.item.name,quantity+1)
    }
    function removeItem(){
        quantity>1 ? setQuantity(quantity-1) : setQuantity(quantity);
        props.select(props.item.index,props.item.price,props.item.name,quantity-1)
    }

    return (
        <li className="card">
            <div className={"selection "+props.selected}>
                <div className="counter">
                    <ion-icon name="remove" className="remove" onClick={removeItem}></ion-icon>
                    <p>{quantity}</p>
                    <ion-icon name="add" className="add" onClick={addItem}></ion-icon>
                </div>
            </div>
            <div className="card-content" onClick={() => props.select(props.item.index,props.item.price,props.item.name,quantity)}>
                <div className="image">
                    <img src={props.item.image}/>
                </div>
                <h2>{props.item.name}</h2>
                <div className="description">
                    <p>{props.item.description[0]}</p>
                    <p>{props.item.description[1]}</p>
                </div>
                <div className="price">
                    <p>R$ <span>{props.item.price}</span></p>
                </div>
            </div>
        </li>
    )
}