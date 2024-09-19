import { createTheme } from '@mui/material/styles';

// Function to get design tokens for light and dark mode
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#21CBF3', // Custom light primary color
          },
          secondary: {
            main: '#FF5722', // Custom light secondary color
          },
          background: {
            default: '#fff', // Light mode background default
            paper: '#f5f5f5', // Light mode paper background
          },
          text: {
            primary: '#333333', // Custom light text color
            secondary: '#666666', // Custom light secondary text color
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#90caf9', // Custom dark primary color
          },
          secondary: {
            main: '#f48fb1', // Custom dark secondary color
          },
          background: {
            default: '#303030', // Dark mode background default
            paper: '#424242', // Dark mode paper background
          },
          text: {
            primary: '#ffffff', // Custom dark text color
            secondary: '#aaaaaa', // Custom dark secondary text color
          },
        }),
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

// Create the theme with the selected mode
const theme = (mode) => createTheme(getDesignTokens(mode));

export default theme;
