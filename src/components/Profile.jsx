import React from 'react'
import { Link,Outlet } from 'react-router-dom'


function Profile() {
  return (
    <div> 
        <h2>User Profile</h2> 
    <nav> 
        <ul> 
            <li><Link to="info">Profile Info</Link></li> 
            <li><Link to="orders">Orders</Link></li> 
            <li><Link to="settings">Settings</Link></li> 
            </ul> 
            </nav> 
            <Outlet/>
            </div>
  )
}

export default Profile