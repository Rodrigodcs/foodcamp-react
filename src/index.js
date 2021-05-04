import ReactDOM from "react-dom";
import Header from "./Header"
import Dishes from "./Dishes"
import Footer from "./Footer"

export default function App(){
    return (
        <>
            <div class="testando"></div>
            <Header/>
            <Dishes/>
            <Footer/>
        </>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));