import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Typography, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

/**
 * 
 * @param {toggleTheme} toggleTheme - Function to toggle the theme
 * @param {isDarkMode} isDarkMode - Boolean to check if dark mode is enabled
 * @returns {JSX.Element} - Header component with navigation links and theme toggle button
 * @description This component renders the header of the application with navigation links and a theme toggle button.
 * It uses Material-UI components for styling and layout.
 */
const MUI_Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Todo App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="green" component={Link} to="/typographyDemo">TypographyDemo</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/hooks">Hooks</Button>
          <Button color="inherit" component={Link} to="/todocomp">ToDo Cmpnt</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/todos">TODOs</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/page1">Page1</Button>
          <Button color="inherit" component={Link} to="/page2">Page2</Button>
          <Button color="inherit" component={Link} to="/users">Users</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
        </Box>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MUI_Header;