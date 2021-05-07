import {Link} from "react-router-dom"
import Item from "./Item"

export default function Confirm(props){

    const mainCheckOut = props.optionsSelected.main.map(i=>i)
    const drinkCheckOut = props.optionsSelected.drink.map(i=>i)
    const dessertCheckOut = props.optionsSelected.dessert.map(i=>i)
    let mainTotal = 0
    let drinkTotal = 0
    let dessertTotal = 0
    let total=0
    let requestString=""

    function calculate(){
        props.optionsSelected.main.forEach(i=> mainTotal+=i.quantity*parseFloat(i.price.replace(",",".")))
        props.optionsSelected.drink.forEach(i=> drinkTotal+=i.quantity*parseFloat(i.price.replace(",",".")))
        props.optionsSelected.dessert.forEach(i=> dessertTotal+=i.quantity*parseFloat(i.price.replace(",",".")))
        total=mainTotal+drinkTotal+dessertTotal
        createRequest()
    }
    function createRequest(){
        requestString = "Olá, gostaria de fazer o pedido:\n\n- Prato(s):\n"
        mainCheckOut.forEach(i => requestString+= "   -"+i.name + (i.quantity>1?" ("+i.quantity+"x)":"")+"\n")
        requestString+="\n- Bebida(s):\n"
        drinkCheckOut.forEach(i => requestString+= "   -"+i.name + (i.quantity>1?" ("+i.quantity+"x)":"")+"\n")
        requestString+="\n- Sobremesa(s):\n"
        dessertCheckOut.forEach(i => requestString+= "   -"+i.name + (i.quantity>1?" ("+i.quantity+"x)":"")+"\n")
        requestString+="\nTOTAL: R$ "+total.toFixed(2).replace(".",",")
        console.log(requestString)
        requestString = encodeURIComponent(requestString);
    }
    console.log("ggggggggggg")
    let teste="12,55"
    console.log(parseFloat(teste.replace(",",".")))

    calculate(props)
    
    return (
        <div className="review">
            <div className="label"><p>Revise seu pedido</p></div>
            <div className="review-outer-box">
                <div className="review-box">
                    <ul>
                        {mainCheckOut.map(i => <Item name={i.name} total={((i.quantity*parseFloat(i.price.replace(",","."))).toFixed(2)).replace(".",",")}/>)}
                        {drinkCheckOut.map(i => <Item name={i.name} total={((i.quantity*parseFloat(i.price.replace(",","."))).toFixed(2)).replace(".",",")}/>)}
                        {dessertCheckOut.map(i => <Item name={i.name} total={((i.quantity*parseFloat(i.price.replace(",","."))).toFixed(2)).replace(".",",")}/>)}
                    </ul>
                    <div className="total">
                        <p>TOTAL</p>
                        <p>{total.toFixed(2).replace(".",",")}</p>
                    </div>
                </div>
                <a href={"https://wa.me/5545998129347?text="+requestString}>
                    <div className="confirm-order">Tudo certo, pode pedir!</div>
                </a>
                <Link to="/">
                    <div className="cancel-order">Cancelar</div>
                </Link>
            </div>
        </div>
    ) 
}