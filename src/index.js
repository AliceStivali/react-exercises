import ReactDOM from "react-dom";
import { App } from "./App";
import './index.css'

const appElement = <App />
const root = document.querySelector('#root')

ReactDOM.render(appElement, root)
