import { ADD_TODO, FILTER_TODO, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TREAM } from "./actionTypes";

const initailState = {
    todo: [],
    filter: "ALL",
    searchTerm: ""
}
const todoreducer = (state = initailState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...action.todos, { text: action.payload.text, completed: false }],
                filter: state.filter,
                searchTerm: state.searchTerm,
            }

        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo, index) =>
                    index !== action.payload.id),
                filter: state.filter,
                searchTerm: action.searchTerm,
            }
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case MARK_INCOMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: false } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case FILTER_TODO:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm,
            }
        case UPDATE_SEARCH_TREAM:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: action.payload.searchTerm,
            }
        case UPDATE_SEARCH_TREAM:
            return {
                todos: state.todos.map((todo) => ({ ...todo, completed: true })),
                filter: action.payload.filter,
                searchTerm: action.payload.searchTerm,
            }
        default:
            return state;
    }
}
export default todoreducer;
