import React from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'

import { Typography, Container, Paper } from '@mui/material';

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

      <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Todo App
        </Typography>
        <Typography variant="body1">
          This is a simple todo application built with React and Material-UI.
        </Typography>
      </Paper>
    </Container>


    </>
  )
}

export default Home