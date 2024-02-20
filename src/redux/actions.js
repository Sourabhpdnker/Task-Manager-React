import { ADD_TODO, MARK_COMPLETED, MARK_ALL_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, FILTER_TODO, UPDATE_SEARCH_TREAM } from "./actionTypes"

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },

});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id }
})
export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id }
})
export const markInCompleted = (id) => ({
    type: MARK_INCOMPLETED,
    payload: { id }
})

export const filterTodos = (filter) => ({
    type: FILTER_TODO,
    payload: { id }

})
export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
})
export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TREAM,
    payload: { searchTerm }
})