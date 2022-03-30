import { ThemeProvider, createTheme } from '@mui/material/styles';
import colors from './variables.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.lightPrimary,
      lighter: colors.lighterPrimary,
    },
    dark: {
      main: colors.darker,
      light: colors.dark
    },
    lightGray: {
      main: colors.lightGray
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
