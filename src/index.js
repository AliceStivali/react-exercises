import { Hello } from "./Hello";
import ReactDOM from "react-dom";

const helloWorldElement = <Hello />
const root = document.querySelector('#root')

ReactDOM.render(helloWorldElement, root)
