import React from 'react'

 const TodosContext = React.createContext({
    todos: [
        // { id:"11", text: "Blog-Content 1", complete:false },
        // { id:"22", text: "Blog-Content 2", complete:false },
        // { id:"33", text: "Blog-Content 3", complete:false }
    ],
    currentTodo: {}
});

export default TodosContext;