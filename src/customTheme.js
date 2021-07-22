import { createTheme } from "@material-ui/core/styles";

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#047aed",
      dark: "#002240",
      light: "#f4f4f4",
    },
    secondary: {
      main: "#1c3fa8",
    },
  },
});

export default globalTheme;
