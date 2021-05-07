import ReactDOM from "react-dom";
import Main from "./content/Main"

export default function App(){
    return (
        <Main/>
    );
} 

ReactDOM.render(App(), document.querySelector(".root"));