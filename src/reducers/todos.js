import { ADD_TODO } from "../types";

let counter = 0;

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: counter++, text: action.text }
      ];
    default:
      return state;
  }
};
