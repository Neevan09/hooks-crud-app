import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            }
            const addTodo = [...state.todos, newTodo]
            return {
                ...state,
                todos: addTodo
            }
        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            }
        case "TOGGLE":
            const toogleTodos = state.todos.map(t =>
                t.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : t
            )
            return {
                ...state,
                todos: toogleTodos
            }
        case "UPDATE_TODO":
            const updateTodo = { ...state.currentTodo, text: action.payload }
            const updateTodoIndex = state.todos.findIndex(
                t => t.id === action.payload.id
            )
            const updateTodos = [
                ...state.todos.slice(0, updateTodoIndex),
                updateTodo,
                ...state.todos.slice(updateTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updateTodos
            };

        case "REMOVE":
            const removeTodos = state.todos.filter(t => t.id !== action.payload.id);
            const isRemoveTodos = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;

            return {
                ...state,
                currentTodo: isRemoveTodos,
                todos: removeTodos
            };
        default:
            return state;
    }
}