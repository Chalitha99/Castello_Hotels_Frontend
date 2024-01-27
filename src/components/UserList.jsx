import React, { useEffect, useState } from "react";
import {Table} from "flowbite-react";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import "../css/dashboard.css"
import axios from 'axios';


function UserList(props) {

    const[data, setData] = useState([])

    const fetchData = async () => {
        
        //    const response = axios.get('http://127.0.0.1:8000/castello/userform/')
        //    const users = response.data;

        //    const filteredUsers = users.filter(user => user.role === 'customer' || user.role ===  'Customer');
        //    setData(filteredUsers);

        axios.get('http://127.0.0.1:8000/castello/userform/')
        .then(response => {
            // console.log(response.data)
            // setData(response.data)
            const users = response.data;
            const filteredUsers = users.filter(user => user.role === 'customer' || user.role ===  'Customer');
            console.log(filteredUsers)
            setData(filteredUsers)
        })
        .catch(
            err => (console.log(err))
        )

        
    }
    useEffect( ()=>{
        fetchData();
      }, [])


    return (
        <div>
            <div>
                <div className="overflow-x-auto" id='userlistbox'>
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>First name</Table.HeadCell>
                            <Table.HeadCell>Last name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                            <Table.HeadCell>Username</Table.HeadCell>
                            <Table.HeadCell>
                               Edit
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Delete
                            </Table.HeadCell>
                        </Table.Head>

                        <Table.Body className="divide-y">


                          {
                            data.map((users, index) =>(

                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {users.firstname}
                                </Table.Cell>
                                <Table.Cell>{users.lastname}</Table.Cell>
                                <Table.Cell>{users.email}</Table.Cell>
                                <Table.Cell>{users.username}</Table.Cell>
                                <Table.Cell>
                                    <EditUser item ={users} onEditSuccess={fetchData} endpoint="userform"/>
                                </Table.Cell>
                                <Table.Cell>
                                    <DeleteUser item ={users} onDeleteSuccess={fetchData} endpoint="userform"/>
                                </Table.Cell>
                            </Table.Row>
                            ))
                          }  

                           

                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default UserList; 