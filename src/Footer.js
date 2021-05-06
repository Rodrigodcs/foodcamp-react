

export default function Footer(props){

    function checkOut(){
        console.log(props.optionsSelected)
        console.log("fim")
    }

    return (
        <div class="footer" >
            <div class="close">
                <div class="close-text">
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </div>
                <div class={"confirmation-button "+props.done} onClick={checkOut}>
                    <p>Fechar Pedido</p>
                </div>
            </div>
        </div>
    ) 
}