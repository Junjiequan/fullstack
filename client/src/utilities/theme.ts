import { createTheme } from "@mui/material/styles";

export const theme: any = createTheme({
  typography: {
    fontFamily: ['"Jost"', "sans-serif"].join(","),
  },
  palette: {
    warning: {
      main: "#121858",
    },
  },
});
