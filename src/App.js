import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import HeaderWrapper from './components/HeaderWrapper';
import AppRoutes from './routes/AppRoutes';


function App() {

  // const location = useLocation();
  // const showHeader = location.pathname === '/home' || location.pathname === '/about'

  return (
    <div>
      <AuthProvider>
        <Router>

          {/* <Header /> */}
          {/* {showHeader && <Header />} */}

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



const Default = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

