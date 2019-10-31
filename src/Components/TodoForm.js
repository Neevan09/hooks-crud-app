import React, { useState, useEffect, useContext } from "react"
import TodosContext from '../context';
import axios from 'axios'
import uuidv4 from 'uuid/v4'

export default function TodoForm() {

    const [todo, setTodo] = useState("");

    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

    useEffect(
        () => {
            if (currentTodo.text) {
                console.log("currentTodo:   ", currentTodo);
                setTodo(currentTodo.text);
            } else {
                setTodo("")
            }
        },
        [currentTodo.id]
    );

    const handleSubmit = async event => {
        event.preventDefault();
        if (currentTodo.text) {
            const response = await axios.patch(`https://hooks-api.ns7767.now.sh/todos/${currentTodo.id}`, {
                text: todo                
            })
            dispatch({ type: "UPDATE", payload: response.data });
            console.log("update text: ", response.data);
        } else {
            const response = await axios.post("https://hooks-api.ns7767.now.sh/todos", {
                id: uuidv4(),
                text: todo,
                firstName: String
            })
            dispatch({ type: "ADD", payload: response.data });
            console.log("New Text: ", todo)
        }
        setTodo("");
    }
    return (
        <div className="container Divider">
            <form onSubmit={handleSubmit}>
                <h1>Add Employee</h1> 
                <input
                    type="text"
                    onChange={event => setTodo(event.target.value)}
                    value={todo}
                />
            </form>
        </div>
    );
}