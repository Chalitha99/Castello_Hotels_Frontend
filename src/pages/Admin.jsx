import React from 'react'
import Dashboard from '../components/Dashboard'
import "../css/dashboard.css"
import "../css/admin.css"
import { Avatar } from 'flowbite-react';
import UserList from '../components/UserList';
import "../css/dashboard.css"

function Admin() {
  return (
    <div>
      <div className="dashboard">
      <Dashboard/>
      <div id='userlist'>
      <UserList/>
      </div>
      

      
      </div>
    </div>
  )
}

export default Admin
