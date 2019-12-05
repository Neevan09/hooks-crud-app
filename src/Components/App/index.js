import React, { useState, useContext, useReducer, useEffect } from 'react'
import UserContext from '../../DataModel/User/data'
import UserReducer from '../../Reducers/reducer' 
import axios from "axios" 
import NewUser from '../Forms/Users' 
import Users from '../List/Users'
import Header from '../Header'
import Footer from '../Footer'
import Navbar from '../Navbar'

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
    const initialState = useContext(UserContext);
    const [ state, dispatch ] = useReducer(UserReducer, initialState);
    const saveData = useAPI("https://hooks-api.ns7767.now.sh/users")

    useEffect(() => {
        dispatch({
            type: "GET_DATA",
            payload: saveData
        })    
    }, [saveData])

    return (
        <UserContext.Provider value = {{ state, dispatch }}> 
            <Header />
            <Navbar /> 
            <NewUser />    
            <Users />     
            <Footer />            
        </UserContext.Provider>
    )
}

export default App;
