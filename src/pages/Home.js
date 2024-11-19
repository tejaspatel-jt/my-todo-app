import React from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const goToAbout = () => {

    navigate('about');

  }
  const goToAbout_replace = () => {

    navigate('about', {
      replace: true,          // replaces the current history entry
      state: {
        fromHome: true,
        from: 'Home'
      }
    })

  }

  return (
    <>
      <h1>Home page</h1>

      <p>
        <Link to='DataComponent'>Redux-saga API Call </Link>
      </p>


      <div>
        <button onClick={goToAbout_replace}>Go to About (replace the history)</button>
      </div>
      <div>
        <button onClick={goToAbout}>Simply Go to About</button>
      </div>

      <p>
        <NavLink to='contact' > Go to Contact using Navlink </NavLink>
      </p>
      <Link to='contact'>Go to Contact using Link </Link>


      {/* Changes the current location */}
      {/* <Navigate to='contact'  > Go to Contact using Navigate </Navigate> */}


    </>
  )
}

export default Home