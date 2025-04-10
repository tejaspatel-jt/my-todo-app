import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import HeaderWrapper from './components/HeaderWrapper';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HeaderProvider } from './contexts/HeaderContext';
import MUI_Header from './components/MUI_Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Provider store={store}>
        <AuthProvider>

          {/* This will help us to conditionally render Header in the pages we want */}
          <HeaderProvider>

            <Router>

              {/* This is also the Header component for both Material-UI and custom implementation */}
              <MUI_Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              
              {/* This will help us to conditionally render Header in the pages we want */}
              <HeaderWrapper />

              {/* All the routes are inside this */}
              <AppRoutes />

            </Router>

          </HeaderProvider>
          
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  )
  
}

export default App;