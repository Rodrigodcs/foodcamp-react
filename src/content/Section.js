import Card from "./Card"
import React from "react"

export default function Section(props){
    console.log(props)
    const [selectedArray,changeSelected] = React.useState(props.dish.map(i => ""))
    console.log(selectedArray)
    function newSelection(newItem,price,name,quantity){
        console.log(newItem)
        console.log(quantity)

        let newArray=selectedArray.map(i=> i)
        
        if(quantity===0){
            newArray[newItem]=""
        }else{
            newArray[newItem]="display"
        }
        
        changeSelected(newArray)
        const option = {name:name,price:price,quantity:quantity}
        
        props.done(option,props.type)
    }

    return (
        <div className="section">
            <div className="label"><p>{props.label}</p></div>
            <ul className="box">
                {props.dish.map((p,i) => <Card key={i} item={p} selected={selectedArray[i]} select={newSelection}/>)}
                <li className="overflow-padding"></li>
            </ul>
        </div>
    )
}