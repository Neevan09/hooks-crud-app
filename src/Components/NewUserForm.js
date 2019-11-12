import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserService/context';
import uuidv4 from 'uuid/v4'
import axios from 'axios'
import Button from './Button/Button';

const NewUserForm = ({ addUser }) => { 
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ stateName, setStateName ] = useState('');
    const [ companyName, setCompanyName ] = useState('');
    const { state: { currentUser = {} }, dispatch } = useContext(UserContext);     

    useEffect(
        () => {
            if (currentUser.firstName) { 
                setFirstName(currentUser.firstName);
            } else {
                setFirstName("")
            }
        },
        [currentUser.id]
    );

    useEffect(
        () => {
            if (currentUser.lastName) { 
                setLastName(currentUser.lastName);
            } else {
                setLastName("")
            }
        },
        [currentUser.id]
    );

    useEffect(
        () => {
            if (currentUser.stateName) { 
                setStateName(currentUser.stateName);
            } else {
                setStateName("")
            }
        },
        [currentUser.id]
    );

    useEffect(
        () => {
            if (currentUser.companyName) { 
                setCompanyName(currentUser.companyName);
            } else {
                setCompanyName("")
            }
        },
        [currentUser.id]
    );

    const handleSubmit = async event => {
        event.preventDefault();
        if (currentUser.firstName) {
            const response = await axios.patch(`https://hooks-api.ns7767.now.sh/users/${currentUser.id}`, {
                firstName: firstName,
                lastName: lastName,
                stateName: stateName,
                companyName: companyName
            })
            dispatch({ type: "UPDATE", payload: response.data });
        } else {
            const response = await axios.post("https://hooks-api.ns7767.now.sh/users", {
                id: uuidv4(),
                firstName: firstName,
                lastName: lastName,
                stateName: stateName,
                companyName: companyName
            })
            dispatch({ type: "ADD", payload: response.data });
        }
        setFirstName("");
    }

    return (
        <div className="container Divider"> 
            <h1> User Details </h1>
            <form onSubmit={handleSubmit}>
                <label>First Name :</label> 
                <input type="text" label="First Name :" placeholder="First Name" required value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                <label>Last Name :</label>
                <input type="text" label="Last Name :" placeholder="Last Name" required value={lastName} onChange={(event) => setLastName(event.target.value)} />
                <label>State :</label>
                <input type="text" label="State Name :" placeholder="State" required value={stateName} onChange={(event) => setStateName(event.target.value)} />
                <label>Company :</label>
                <input type="text" label="Company Name :" placeholder="Company" required value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewUserForm;