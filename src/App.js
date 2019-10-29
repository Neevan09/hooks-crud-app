// import React, { useContext, useReducer } from 'react';
// import { UserContext } from './index'

// const initialState = {
//     count: 0
// }

// function reducer(state, action){
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 count: state.count + 1
//             }
//         case "DECREMENT":
//             return{
//                 count: state.count - 1
//             }
//         case "RESET":
//             return initialState;
//         default:
//             return initialState;
//     }
// }

// export default function App() {

//     const [ state, dispatch] = useReducer(reducer, initialState); 
//     const value = useContext(UserContext);
//     return (
//         <div>
//             Count : {state.count}
//             <button className="btn-btn-primary" onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
//             <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
//             <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
//         </div>       
//     );
// }
