import React from 'react'

 const TodosContext = React.createContext({
    todos: [
        { id: "1", text: "Blog-Content 1", complete:false },
        { id: "2", text: "Blog-Content 2", complete:false },
        { id: "3", text: "Blog-Content 3", complete:true }
    ],
    currentTodo: {}
});

export default TodosContext;