import {Link} from "react-router-dom"

export default function Footer(props){
    return (
        <div className="footer" >
            <div className="close">
                <div className="close-text">
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </div>
                <div className={"confirmation-button "+props.done}>
                    <Link to="/revisar">
                        <div className="confirmation-link">
                            <p>Fechar Pedido</p>
                        </div> 
                    </Link>
                </div>
            </div>
        </div>
    ) 
}