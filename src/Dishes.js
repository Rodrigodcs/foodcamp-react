import Section from "./Section"

export default function Dishes(){
    const serverData = {
        main:[
            {name: "frango1",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "frango2",image:"images/Drinks/coquinha_gelada 1.png",price:11.50,description:["primeira","segunda"]},
            {name: "frango4",image:"images/Drinks/coquinha_gelada 1.png",price:11.50,description:["primeira","segunda"]},
            {name: "frango3",image:"images/Drinks/coquinha_gelada 1.png",price:12.50,description:["primeira","segunda"]}
        ],
        drink:[
            {name: "cocacola1",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "cocacola2",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "cocacola4",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "cocacola3",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]}
        ],
        dessert:[
            {name: "pudim99991",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "pudim2",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "pudim4",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]},
            {name: "pudim3",image:"images/Drinks/coquinha_gelada 1.png",price:13.50,description:["primeira","segunda"]}
        ],
    }
    return (
        <div class="dishes">
            <Section dish={serverData.main} label="testando1"/>
            <Section dish={serverData.drink} label="testando2"/>
            <Section dish={serverData.dessert} label="testando3"/>
        </div>
    )
}