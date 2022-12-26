import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Button} from 'reactstrap';
import AddUser from './AddUser';

function FormComp(props) {
    const [data, setData]=useState({users:[]});

    const addUserToData =(user) => {
        let users=data["users"];
        const requestOptions = {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
          };
        fetch("http://localhost:3001/users",requestOptions)
            .then((response) => response.json())    
            .then((data) => {
                users.push(data);
                setData({users:users});
            } );
    };


    return (
        <div className='background'>
            <div className='navbar'>     
                <h1 className='addtext'>Add New User</h1>
                <Button outline  href="http://localhost:3000/home">
                Home
                </Button>
            </div>
            <AddUser AddUser={addUserToData}/>
        </div>
    );}
            
export default FormComp;

