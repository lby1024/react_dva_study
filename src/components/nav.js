import React from 'react'
import {NavLink} from 'react-router-dom'



const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/'><h3>indexpage</h3></NavLink>
            <NavLink to='/users'><h3>users</h3></NavLink>
            <NavLink to='/todos'><h3>todos</h3></NavLink>
        </div>
    </div>
)

export default NavBar