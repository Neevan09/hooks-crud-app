import React, { useState, useEffect, useContext } from "react"
import TodosContext from '../context';

export default function TodoForm() {

    const [todo, setTodo] = useState("");

    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);
    
    useEffect(
        () => {
            if (currentTodo.text) {
                console.log("currentTodo:   ", currentTodo);
                setTodo(currentTodo.text);
            }else{
                setTodo("")
            }
        }, 
        [currentTodo.id]
        );

    const handleSubmit = event => {
        event.preventDefault();
        if(currentTodo.text){            
            dispatch({type: "UPDATE", payload: todo}); 
            console.log("update text: ", todo);
        }else{
            dispatch({type: "ADD", payload: todo}); 
            console.log("New Text: ", todo)
        }       
        setTodo(""); 
        console.log("after update: ", setTodo(""));
    }
    return (
        <div className="container Divider">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={event => setTodo(event.target.value)}
                    value={todo}
                /> 
            </form>
        </div>
    );
}