import React, { useContext } from 'react'
import TodosContext from '../context'
import '../Stylesheets/App.css'

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
    const title = state.todos.length > 0 ? `${state.todos.length} Blogs` : "Nothing Todo"

    return (
        <div className="container Divider">
            <h1>{title}</h1>
            <div className="container Divider">
                <ul className="ui middle aligned list">
                    {state.todos.map(todo => (
                        <div className="item" key={todo.id}>
                            <span onDoubleClick={() => dispatch({type: "TOGGLE", payload: todo})} className={`${todo.complete}`}>{todo.text}</span>
                            <div className="right floated content">
                                <button onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo})}><i className="pencil alternate icon"></i></button>
                                <button onClick={() => dispatch({type: "REMOVE", payload: todo})}><i className="trash icon"></i></button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}