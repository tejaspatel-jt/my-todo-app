import { createTheme } from '@mui/material/styles';

/**
 * * @description This file contains the theme configuration for the application.
 * It defines the light and dark themes using Material-UI's createTheme function.
 * * The themes include custom colors, typography, and other styles.
 * * The light theme is used for the default mode, while the dark theme is used for dark mode.
 * * The themes can be easily switched using a toggle function.
 * * The common typography styles are defined separately and reused in both themes.
 */

// Common typography styles for both light and dark themes
const commonTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 500,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    textTransform: 'uppercase',
  },
};

// Light theme with custom typography styles
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
  typography: {
    ...commonTypography,
    // Light theme specific typography overrides
    h1: {
      ...commonTypography.h1,
      color: '#1976d2',
    },
    h2: {
      ...commonTypography.h2,
      color: '#1976d2',
    },
  },
});

// Dark theme with custom typography styles
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    ...commonTypography,
    // Dark theme specific typography overrides
    h1: {
      ...commonTypography.h1,
      color: '#90caf9',
    },
    h2: {
      ...commonTypography.h2,
      color: '#90caf9',
    },
  },
});