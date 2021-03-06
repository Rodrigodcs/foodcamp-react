import React from "react"
import Header from "./Header"
import Dishes from "./Dishes"
import Footer from "./Footer"
import Confirm from "./Confirm"
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

export default function Main(){
    const [checkOut,changeCheckOut]=React.useState({main:[],drink:[],dessert:[]})
    const [done, changeDone]=React.useState("")

    function selectCheckOut(option,type){
        if(type==="main"){
            let newMain;
            if(checkOut.main.length===0){
                checkOut.main.push(option)
            }else if(option.quantity===0){
                newMain=checkOut.main.filter(i => i.name!==option.name?true:false)
                checkOut.main=newMain
            }else{
                newMain=checkOut.main.filter(i => i.name!==option.name?true:false)
                newMain.push(option)
                checkOut.main=newMain
            }   
        }else if(type==="drink"){
            let newDrink;
            if(checkOut.drink.length===0){
                checkOut.drink.push(option)
            }else if(option.quantity===0){
                newDrink=checkOut.drink.filter(i => i.name!==option.name?true:false)
                checkOut.drink=newDrink
            }else{
                newDrink=checkOut.drink.filter(i => i.name!==option.name?true:false)
                newDrink.push(option)
                checkOut.drink=newDrink
            }
        }else if(type==="dessert"){
            let newDessert;
            if(checkOut.dessert.length===0){
                checkOut.dessert.push(option)
            }else if(option.quantity===0){
                newDessert=checkOut.dessert.filter(i => i.name!==option.name?true:false)
                checkOut.dessert=newDessert
            }else{
                newDessert=checkOut.dessert.filter(i => i.name!==option.name?true:false)
                newDessert.push(option)
                checkOut.dessert=newDessert
            }
        }
        changeCheckOut(checkOut);
        checkOutCounter()
    }

    function clearCheckOut(){
        changeCheckOut({main:[],drink:[],dessert:[]})
        changeDone("")
    }

    function checkOutCounter(){
        if(checkOut.main.length!==0 && checkOut.drink.length!==0 && checkOut.dessert.length!==0){
            changeDone("display")
        }else{
            changeDone("")
        }
    }
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route  path="/" exact>
                        <Dishes done={selectCheckOut}/>
                        <Footer done={done} optionsSelected={checkOut}/>
                    </Route>
                    <Route  path="/revisar">
                        <Confirm optionsSelected={checkOut} clear={clearCheckOut}/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
