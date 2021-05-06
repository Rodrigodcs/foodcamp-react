import Section from "./Section"

export default function Dishes(props){
    const serverData = {
        main:[
            {index:0 ,name: "frango1",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:1 ,name: "frango2",image:"images/Drinks/coquinha_gelada 1.png",price:11.50,description:["primeira","segunda"]},
            {index:2 ,name: "frango4",image:"images/Drinks/coquinha_gelada 1.png",price:11.50,description:["primeira","segunda"]},
            {index:3 ,name: "frango3",image:"images/Drinks/coquinha_gelada 1.png",price:12.50,description:["primeira","segunda"]},
            {index:4 ,name: "frangadasdasdo1",image:"images/Drinks/coquinha_gelada 1.png",price:10.50,description:["primsadeira","sesdadgunda"]}
        ],
        drink:[
            {index:0 ,name: "cocacola1",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:1 ,name: "cocacola2",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:2 ,name: "cocacola4",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:3 ,name: "cocacola3",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]}
        ],
        dessert:[
            {index:0 ,name: "pudim99991",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:1 ,name: "pudim2",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:2 ,name: "pudim4",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {index:3 ,name: "pudim3",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]}
        ],
    }
    return (
        <div class="dishes">
            <Section dish={serverData.main} label="testando1" done={props.done} type="main"/>
            <Section dish={serverData.drink} label="testando2" done={props.done} type="drink"/>
            <Section dish={serverData.dessert} label="testando3"done={props.done} type="dessert"/>
        </div>
    )
}