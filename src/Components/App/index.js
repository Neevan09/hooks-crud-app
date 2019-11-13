import React, { useState, useContext, useReducer, useEffect } from 'react'
import TodosContext from '../../DataModel/User/data'
import TodosReducer from '../../Reducers/reducer' 
import axios from "axios" 
import NewUser from '../Forms/Users'
import UserList from '../List/UserList'

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
            <NewUser />
            <UserList />            
        </TodosContext.Provider>
    )
}

export default App;
