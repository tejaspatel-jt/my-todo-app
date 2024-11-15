import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1>About Page With Nested Routes</h1>

      <nav>
        <ul>
          <li> <Link to='team' >About Team </Link>   </li> ( Top Header is hidden on ABOUT TEAM page as configured in HeaderWrapper file)
          <li> <Link to='company' >About Company</Link>   </li>
        </ul>

        <Link to='/'> GO to Home page 🔙</Link>
      </nav>

      {/*  MOST IMPORTANT - This is where the nested routes will be rendered */}
      <Outlet />

    </>
  )
}

export default About