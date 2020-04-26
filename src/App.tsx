import React from "react";
import { Homepage } from "./routes/homepage";
import { Router } from "@reach/router";
import { Profile } from "./routes/profile";
import { Login, Register } from "./routes/auth";
import { Navigation } from "./components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { red, amber } from "@material-ui/core/colors";
import { paths } from "./routes/paths";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[600],
    },
    secondary: {
      main: amber["400"],
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "54px",
      fontWeight: 900,
    },
    h2: {
      fontSize: "40px",
      fontWeight: 600,
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Router>
        <Login path={paths.login} />
        <Register path={paths.register} />
        <Homepage default path={paths.index} />
        <Profile path={paths.profile} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
