
import * as TODOS_TYPES from "../types/todos";

export const addTodo = (newTodoText) => ({
  type: TODOS_TYPES.ADD_TODO,
  text: newTodoText
});

export const requestTodos = () => ({
  type: TODOS_TYPES.REQUEST_TODOS,
});

export const requestTodosSuccess = (data) => ({
  type: TODOS_TYPES.REQUEST_TODOS_SUCCESS,
  data,
});

export const requestTodosFailure = (error) => ({
  type: TODOS_TYPES.REQUEST_TODOS_FAILURE,
  error,
});

export const getTodos = () => (dispatch) => {
  dispatch(requestTodos());
  fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then((res) => res.json())
    .then((data) => dispatch(requestTodosSuccess(data)))
    .catch((error) => dispatch(requestTodosFailure(error)))
};

export const setTodosSearchText = (text) => ({
  type: TODOS_TYPES.SET_TODOS_SEARCH_TEXT,
  text,
});
