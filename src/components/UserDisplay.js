import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { Button} from 'reactstrap';

function UsersDisplay() {
    const [Users, fetchUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then((res) => res.json())
        .then((res) => {
            fetchUsers(res)
            console.log(res);
        })
    }, []);
    return (
       <div> 
        <div className='navbar'>     
                <Button outline  href="http://localhost:3000/home">
                Home
                </Button>
                <h1 className='addtext'>Users DataBase</h1>
                <Button outline  href="http://localhost:3000/addUser">
                +
                </Button>
                
        </div>
        <div className="container p-5">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Address</th>
                    <th scope="col">Comments</th>
                    </tr>
                </thead>
                <tbody>
                {Users.map((user, i) => {
                                    return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.address}</td>
                                        <td>{user.comments}</td>
                                    </tr>      
                                        })}
                    <tr>
                
                    </tr>
                </tbody>
                </table>
        </div>
       </div>
    )
}       

export default UsersDisplay;