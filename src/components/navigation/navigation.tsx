import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { Link } from "@reach/router";
import { paths } from "../../routes/paths";
// import classes from "*.module.css";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";

import * as classes from "./navigation.styles";

const useStyles = makeStyles({
  toolBar: {
    minHeight: 48,
  },
});

export const Navigation = () => {
  const classesOver = useStyles();
  return (
    <AppBar position="relative" variant="elevation">
      <Toolbar className={classesOver.toolBar}>
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
            <Link to={paths.tournament} color="inherit">
              Turnaje
            </Link>
          </MenuItem>
        </div>
        <Button color="inherit">
          <PersonOutlineSharpIcon fontSize="default" />
        </Button>
        <Button color="inherit">Donate</Button>
      </Toolbar>
    </AppBar>
  );
};
