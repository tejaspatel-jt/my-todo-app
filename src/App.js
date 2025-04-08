import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import HeaderWrapper from './components/HeaderWrapper';
import AppRoutes from './routes/AppRoutes';

// redux things
import { Provider } from 'react-redux';
import store from './redux/store';
import { HeaderProvider } from './contexts/HeaderContext';


function App() {

  return (
    <div>
      <Provider store={store}>
        <AuthProvider>

          <HeaderProvider>

            <Router>

              {/* This will help us to conditionally render Header in the pages we want */}
              <HeaderWrapper />

              {/* All the routes are inside this */}
              <AppRoutes />

            </Router>

          </HeaderProvider>
          
        </AuthProvider>
      </Provider>
    </div>
  )

}

export default App;