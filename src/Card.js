

export default function Card(props){
    console.log(props)
    return (
        <li class="card">
            <div class="selection">
                <ion-icon name="checkmark-circle"></ion-icon>
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="add-outline"></ion-icon>
            </div>
            <div class="card-content">
                <div class="image">
                    <img src={props.item.image}/>
                </div>
                <h2>{props.item.name}</h2>
                <div class="description">
                    <p>{props.item.description[0]}</p>
                    <p>{props.item.description[1]}</p>
                </div>
                <div class="price">
                    <p>R$ <span>{props.item.price}</span></p>
                </div>
            </div>
        </li>
    )
}