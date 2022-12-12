import ReactDOM from "react-dom";
import "./index.css";
import { Root } from "./Root";
import { store } from "./state/Store";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./CounterState";
import { addTodo, editTodo } from "./state/TodosReducer";

const root = document.querySelector("#root");

// ReactDOM.render(<Root />, root)

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());

store.dispatch(addTodo({ id: 1, title: "Buy milk", completed: false }));
store.dispatch(editTodo(1, { completed: true }));
