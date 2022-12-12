const defaultState = [];

const ADD = "TODO@ADD";
const REMOVE = "TODO@REMOVE";
const EDIT = "TODO@EDIT";
const CLEAR = "TODOS@CLEAR";

export function addTodo(todo) {
  return {
    type: ADD,
    payload: todo,
  };
}
export function removeTodo(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
export function editTodo(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}
export function clearTodos() {
  return {
    type: CLEAR,
  };
}

export function TodosReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((todo) => todo.it !== action.payload);
    }
    case EDIT: {
      return state.map((todo) => {
        if (todo.id === action.payload.it) {
          return { ...todo, ...action.payload.data };
        }
        return todo;
      });
    }
    case CLEAR: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
}
