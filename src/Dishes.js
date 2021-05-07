import Section from "./Section"

export default function Dishes(props){
    const serverData = {
        main:[
            {index:0 ,name: "Frango Yin Yang",image:"images/Main/frango_yin_yang.png",price:"32,00",description:["Acompanha arroz","Acompanha batata"]},
            {index:1 ,name: "Feijoada",image:"images/Main/feijoada.jpg",price:"36,00",description:["Acompanha arroz","Acompanha farofa"]},
            {index:2 ,name: "Panqueca",image:"images/Main/panqueca.jpg",price:"25,00",description:["Com muito molho","Quaijo ralado"]},
            {index:3 ,name: "Lasagna",image:"images/Main/lasagna.jpeg",price:"28,00",description:["Bolognesa","Molho vermelho"]},
            {index:4 ,name: "Sanduiche",image:"images/Main/sanduiche.jpg",price:"15,00",description:["Muita maionese","Muito presunto"]},
            {index:5 ,name: "Spaghetti",image:"images/Main/spaghetti.jpg",price:"42,00",description:["Molho vermelho","Queijo ralado"]},
            {index:6 ,name: "Bife a cavalo",image:"images/Main/bife_a_cavalo.jpg",price:"32,00",description:["Acompanha arroz","Acompanha farofa"]}
        ],
        drink:[
            {index:0 ,name: "Coca-cola",image:"images/Drinks/coca_cola.png",price:"5,50",description:["Geladinha","Rodela de limão"]},
            {index:1 ,name: "Chá Gelado",image:"images/Drinks/cha_gelado.png",price:"4,00",description:["Geladinho","Rodela de limão"]},
            {index:2 ,name: "Tamarindo",image:"images/Drinks/tamarindo.jpg",price:"3,00",description:["Saboroso","Geladinho"]},
            {index:3 ,name: "Tubaina",image:"images/Drinks/tubaina.jpg",price:"2,00",description:["Mais em conta","Vários sabores"]},
            {index:4 ,name: "Água",image:"images/Drinks/agua.webp",price:"2,50",description:["Faz bem","Bem gelada"]}
        ],
        dessert:[
            {index:0 ,name: "Pudim",image:"images/Desserts/pudim.png",price:"13,30",description:["Bem docinho","Muito bom"]},
            {index:1 ,name: "Gelatina",image:"images/Desserts/gelatina_mosaico.jpg",price:"7,40",description:["Deliciosa","Muito gostosa"]},
            {index:2 ,name: "Churros",image:"images/Desserts/churros.jpg",price:"5,50",description:["Chocolate","Doce de Leite"]},
            {index:3 ,name: "Bolo",image:"images/Desserts/bolo.jpg",price:"14,90",description:["Chocolate","Bem fofinho"]},
            {index:4 ,name: "Musse",image:"images/Desserts/musse.jpg",price:"8,60",description:["Maracujá","Um pouco amargo"]}
        ],
    }
    return (
        <div className="dishes">
            <Section dish={serverData.main} label="Primeiro, seu prato" done={props.done} type="main"/>
            <Section dish={serverData.drink} label="Agora, sua bebida" done={props.done} type="drink"/>
            <Section dish={serverData.dessert} label="Por fim, sua sobremesa"done={props.done} type="dessert"/>
        </div>
    )
}