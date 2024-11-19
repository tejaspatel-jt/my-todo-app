import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import HeaderWrapper from './components/HeaderWrapper';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <div>
      <AuthProvider>
        <Router>

          {/* This will help us to conditionally render Header in the pages we want */}
          <HeaderWrapper />

          {/* All the routes are inside this */}
          <AppRoutes/>

        </Router>
      </AuthProvider>
    </div>
  )

}

export default App;