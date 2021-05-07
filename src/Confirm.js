import {Link} from "react-router-dom"

export default function Confirm(props){
    console.log(props)
    let orderArray = [{name:props.optionsSelected.main.name,total:0},{name:props.optionsSelected.drink.name,total:0},{name:props.optionsSelected.dessert.name,total:0}]
    let totalPrice=0;
    let requestString=""

    function calculate(props){ 
        orderArray[0].total = (parseFloat((props.optionsSelected.main.price).replace(",","."))*props.optionsSelected.main.quantity)
        orderArray[1].total = (parseFloat((props.optionsSelected.drink.price).replace(",","."))*props.optionsSelected.drink.quantity)
        orderArray[2].total = (parseFloat((props.optionsSelected.dessert.price).replace(",","."))*props.optionsSelected.dessert.quantity)
        totalPrice=orderArray[0].total+orderArray[1].total+orderArray[2].total
        
        requestString = "Olá, gostaria de fazer o pedido:\n- Prato: "+ orderArray[0].name+ (props.optionsSelected.main.quantity>1?" ("+ props.optionsSelected.main.quantity+"x)" :"") +"\n- Bebida: "+ orderArray[1].name+ (props.optionsSelected.drink.quantity>1?" ("+ props.optionsSelected.drink.quantity+"x)" :"")+"\n- Sobremesa: "+ orderArray[2].name+ (props.optionsSelected.dessert.quantity>1?" ("+ props.optionsSelected.dessert.quantity+"x)" :"")+"\nTotal: R$ "+totalPrice.toFixed(2)
        requestString = encodeURIComponent(requestString);
    }

    calculate(props)
    
    return (
        <div className="review">
            <div className="label"><p>Revise seu pedido</p></div>
            <div className="review-outer-box">
                <div className="review-box">
                    <ul>
                        {orderArray.map(i=><li><p>{i.name}</p><p>{i.total.toFixed(2).replace(".",",")}</p></li>)}
                    </ul>
                    <div className="total">
                        <p>TOTAL</p>
                        <p>{totalPrice.toFixed(2).replace(".",",")}</p>
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