import React from "react"
import Header from "./Header"
import Dishes from "./Dishes"
import Footer from "./Footer"
import Confirm from "./Confirm"
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

export default function Main(){
    const [checkOut,changeCheckOut]=React.useState({main:null,drink:null,dessert:null})
    const [done, changeDone]=React.useState("")

    function selectCheckOut(option,type){
        if(type==="main"){
            checkOut.main=option;
        }else if(type==="drink"){
            checkOut.drink=option;
        }else if(type==="dessert"){
            checkOut.dessert=option;
        }
        changeCheckOut(checkOut);
        console.log(checkOut)
        checkOutCounter()
    }

    function checkOutCounter(){
        if(checkOut.main!==null && checkOut.drink!==null && checkOut.dessert!==null){
            changeDone("display")
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
                        <Confirm optionsSelected={checkOut}/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
