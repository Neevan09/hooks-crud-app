import React, { useContext } from 'react'
import TodosContext from '../context'
import '../Stylesheets/App.css'
import axios from 'axios';

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
    const title = state.todos.length > 0 ? `${state.todos.length} Blogs` : "Nothing Todo";

    console.log("state.toods:   ", state.todos);
    return (
        <div className="container Divider">
            <h1>{title}</h1>
            <div className="container Divider">
                <ul className="ui middle aligned list">
                    {state.todos.map(todo => (
                        <li className="item" key={todo.id}>
                            <span>{todo.text}</span>
                            <div className="right floated content">
                                <button onClick={() => dispatch({ type: "EDIT", payload: todo })}>
                                    <i className="pencil alternate icon"></i>
                                </button>
                                <button onClick={async() => {
                                    await axios.delete(`https://hooks-api.ns7767.now.sh/todos/${todo.id}`); 
                                    dispatch({ type: "REMOVE", payload: todo 
                                    })}}>
                                    <i className="trash icon"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}