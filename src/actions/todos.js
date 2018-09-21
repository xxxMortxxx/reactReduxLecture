import { ADD_TODO} from "../types";

export const addTodo = (newTodoText) => ({
  type: ADD_TODO,
  text: newTodoText
});
