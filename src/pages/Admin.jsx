import React from 'react'
import Dashboard from '../components/Dashboard'
import "../css/dashboard.css"
import "../css/admin.css"
import { Avatar } from 'flowbite-react';

function Admin() {
  return (
    <div>
      <div className="dashboard">
      <Dashboard/>
      </div>
    </div>
  )
}

export default Admin
