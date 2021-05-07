import Card from "./Card"
import React from "react"

export default function Section(props){
    const [selectedArray,changeSelected] = React.useState(props.dish.map(i => ""))
    function newSelection(newItem,price,name,quantity){
        const newArray=selectedArray.map((item,index)=> index===newItem?"display":"")
        changeSelected(newArray)
        const option = {name:name,price:price,quantity:quantity}
        props.done(option,props.type)
    }

    return (
        <div className="section">
            <div className="label"><p>{props.label}</p></div>
            <ul className="box">
                {props.dish.map((p,i) => <Card item={p} selected={selectedArray[i]} select={newSelection}/>)}
                <li className="overflow-padding"></li>
            </ul>
        </div>
    )
}