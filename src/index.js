import ReactDOM from "react-dom";
import Main from "./Main"

export default function App(){
    return (
        <Main/>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));