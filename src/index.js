import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom'; 
//import App from './App';
import * as serviceWorker from './serviceWorker';

import TodosContext from './context'
import TodosReducer from './reducer'
import TodoList from './Components/TodoList' 
import TodoForm from './Components/TodoForm';

const Main = () => {
    const initialState = useContext(TodosContext);
    const [ state, dispatch ] = useReducer(TodosReducer, initialState);

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
