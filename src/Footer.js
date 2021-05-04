

export default function Footer(){
    return (
        <div class="footer" >
            <div class="close">
                <div class="close-text">
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </div>
                <div class="confirmation-button" onclick="finalScreen()">
                    <p>Fechar Pedido</p>
                </div>
            </div>
        </div>
    )
}