import React, { useContext } from 'react'
import UserContext from '../../DataModel/User/data'
import '../App/styles.css'
import '../List/styles.css'
import axios from 'axios';

export default function Users() {
    const { state, dispatch } = useContext(UserContext);

    return (
        <div className="container Divider">
            <div className="container Divider">
                <div className="flex-container">
                    {state.users.map(user => (
                        <div>
                            <p>{user.firstName} </p>
                            <p>{user.lastName}</p>
                            <p>{user.companyName}</p>
                            <p>{user.stateName}</p>
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
                    ))}
                </div>
            </div>
        </div>
    )
}