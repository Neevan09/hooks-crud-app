import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                todos: action.payload
            }
        case "ADD":
            if(!action.payload){
                return state;
            }
            if(state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }
            const addTodo = [...state.todos, action.payload]
            return {
                ...state,
                todos: addTodo
            };
        case "EDIT":
            return {
                ...state,
                currentTodo: action.payload
            };
        case "UPDATE":
            const updateTodo = { ...action.payload };
            const updateTodoIndex = state.todos.findIndex(
                t => t.id === state.currentTodo.id
            );
            const updateTodos = [
                ...state.todos.slice(0, updateTodoIndex),
                updateTodo,
                ...state.todos.slice(updateTodoIndex + 1)
            ];
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
            }
        default:
            return state;
    }
}