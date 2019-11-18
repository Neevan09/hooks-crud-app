import React, { useContext } from 'react'
import UserContext from '../../DataModel/User/data'
import '../App/styles.css'
import axios from 'axios';
import '../List/styles.css'

export default function UserList() {
    const { state, dispatch } = useContext(UserContext);
    const title = state.users.length > 0 ? `Total ${state.users.length} Users` : "No User"; 
 
    return (
        <div className="container Divider">
            <h2>{title}</h2>
            <div className="container Divider">
                <ul className="ui middle aligned list">
                    {state.users.map(user => (
                        <li className="item" key={user.id}>
                            <span>{user.firstName} - {user.lastName} - {user.companyName} - {user.stateName} </span>                             
                            <div className="right floated content">
                                <button onClick={() => dispatch({ type: "EDIT", payload: user })}>
                                    <i className="pencil alternate icon"></i>
                                </button>
                                <button onClick={async () => {
                                    await axios.delete(`https://hooks-api.ns7767.now.sh/users/${user.id}`);
                                    dispatch({
                                        type: "REMOVE", payload: user
                                    })
                                }}>
                                    <i className="trash icon"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card">
                Card Style
            </div>
        </div>
    )
}