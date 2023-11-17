import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'
 const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links'activeclass='active' >
              <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
              <NavLink to='/Question'className='side-nav-links'activeclass='active'>
              <p>Questions</p>
              </NavLink>
              <NavLink to='/Tags' className='side-nav-links'  activeclass='active'>
                <p>Tags</p>
              </NavLink>
              <NavLink to='/Users' className='side-nav-links'  activeclass='active'>
                <p>User</p>
              </NavLink>
            </div>
        </nav>

    </div>
  )
}
export default LeftSidebar