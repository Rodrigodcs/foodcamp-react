import Card from "./Card"
import React from "react"

export default function Section(props){
    console.log(props.dish)
    const [selectedArray,changeSelected] = React.useState(props.dish.map(i => ""))
    console.log(selectedArray)
    function newSelection(newItem,price,name,quantity){
        const newArray=selectedArray.map((item,index)=> index===newItem?"display":"")
        changeSelected(newArray)
        const option = {name:name,price:price,quantity:quantity}
        props.done(option,props.type)
    }

    return (
        <div class="section">
            <div class="label"><p>{props.label}</p></div>
            <ul class="box">
                {props.dish.map((p,i) => <Card item={p} selected={selectedArray[i]} select={newSelection}/>)}
                <li class="overflow-padding"></li>
            </ul>
        </div>
    )
}