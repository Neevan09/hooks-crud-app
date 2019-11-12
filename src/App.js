import React, { useState, useContext, useReducer, useEffect } from 'react'
import TodosContext from './UserService/context'
import TodosReducer from './Reducers/reducer'
import UserList from './Components/UserList'  
import axios from "axios"
import NewUserForm from './Components/NewUserForm';
import Button from './Components/Button/Button'

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
const App = () => {
    const initialState = useContext(TodosContext);
    const [ state, dispatch ] = useReducer(TodosReducer, initialState);
    const saveData = useAPI("https://hooks-api.ns7767.now.sh/users")

    useEffect(() => {
        dispatch({
            type: "GET_DATA",
            payload: saveData
        })    
    }, [saveData])

    return (
        <TodosContext.Provider value = {{ state, dispatch }}> 
            <NewUserForm />
            <UserList />
            <Button label="Click Me"/>
        </TodosContext.Provider>
    )
}

export default App;
