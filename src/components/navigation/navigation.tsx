import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import { Link } from "@reach/router";
import { paths } from "../../routes/paths";
// import classes from "*.module.css";

import * as classes from "./navigation.styles";

export const Navigation = () => {
  return (
    <AppBar position="relative" variant="elevation">
      <Toolbar>
        <div className={classes.menuMainLinks}>
          <Link to={paths.index} className={classes.navigationLogo}>
            <Typography variant="h6">GameSky</Typography>
          </Link>
          <MenuItem>
            <Link to={paths.profile} color="inherit">
              Profil
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={paths.profile} color="inherit">
              Turnaje
            </Link>
          </MenuItem>
        </div>
        <Button color="inherit">Přihlásit</Button>
        <Button color="inherit">Registrovat</Button>
      </Toolbar>
    </AppBar>
  );
};
