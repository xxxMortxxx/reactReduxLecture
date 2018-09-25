import * as TODOS_TYPES from "../types/todos";

const generateId = () => Math.random().toString(36).substring(7);

const initialState = {
  todos: [],
  isLoading: null,
  error: null,
  searchText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [{ title: action.text, id: generateId() }, ...state.todos ]
      };
    case TODOS_TYPES.REQUEST_TODOS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case TODOS_TYPES.REQUEST_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.data
      };
    case TODOS_TYPES.REQUEST_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case TODOS_TYPES.SET_TODOS_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text,
      };
    default:
      return state;
  }
};
