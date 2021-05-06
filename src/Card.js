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
        <li class="card">
            <div class={"selection "+props.selected}>
                <div class="counter">
                    <ion-icon name="remove" class="remove" onClick={removeItem}></ion-icon>
                    <p>{quantity}</p>
                    <ion-icon name="add" class="add" onClick={addItem}></ion-icon>
                </div>
            </div>
            <div class="card-content" onClick={() => props.select(props.item.index,props.item.price,props.item.name,quantity)}>
                <div class="image">
                    <img src={props.item.image}/>
                </div>
                <h2>{props.item.name}</h2>
                <div class="description">
                    <p>{props.item.description[0]}</p>
                    <p>{props.item.description[1]}</p>
                </div>
                <div class="price">
                    <p>R$ <span>{props.item.price}</span></p>
                </div>
            </div>
        </li>
    )
}