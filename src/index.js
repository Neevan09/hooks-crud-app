import React, { useState, useContext, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import axios from "axios"
import * as serviceWorker from './serviceWorker';
import TodosContext from './context'
import TodosReducer from './reducer'
import TodoList from './Components/TodoList' 
import TodoForm from './Components/TodoForm';


const useAPI = endpoint => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getData();
    }, [])    

    const getData = async () => {
       const response = await axios.get(endpoint);
       setData(response.data);
    }

    return data;
}

const Main = () => {
    const initialState = useContext(TodosContext);
    const [ state, dispatch ] = useReducer(TodosReducer, initialState);
    const saveData = useAPI("https://hooks-api.ns7767.now.sh/todos")

    useEffect(() => {
        dispatch({
            type: "GET_DATA",
            payload: saveData
        })    
    }, [saveData])

    console.log("saveData:   ",saveData);


    return (
        <TodosContext.Provider value = {{ state, dispatch }}> 
            <TodoForm />
            <TodoList />
        </TodosContext.Provider>
    )
}

ReactDOM.render(
        <Main />, document.getElementById('root'));

       

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
