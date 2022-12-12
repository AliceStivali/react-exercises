import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { TodosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: TodosReducer,
});
export const store = createStore(rootReducer);
