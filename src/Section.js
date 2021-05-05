import Card from "./Card"
import React from "react"

export default function Section(props){
    console.log(props)

    return (
        <div> 
            <div class="section">
                <div class="label"><p>{props.label}</p></div>
                <ul class="box">
                    {props.dish.map(p => <Card item={p}/>)}
                    <li class="overflow-padding"></li>
                </ul>
            </div>  
        </div>
    )
}