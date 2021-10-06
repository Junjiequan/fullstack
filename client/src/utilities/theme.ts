import { createTheme } from "@mui/material/styles";

export const theme: any = createTheme({
  typography: {
    fontFamily: ['"Jost"', "sans-serif"].join(","),
    subtitle1: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
  },
  palette: {
    warning: {
      main: "#121858",
    },
    secondary: {
      main: "#a31545",
    },
  },
});
