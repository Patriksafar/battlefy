import React, { useState } from "react";
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
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";

import * as classes from "./navigation.styles";
import { Login } from "../login";

const useStyles = makeStyles({
  toolBar: {
    minHeight: 48,
  },
});

export const Navigation = () => {
  const classesOver = useStyles();
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <AppBar position="relative" variant="elevation">
        <Toolbar className={classesOver.toolBar}>
          <div className={classes.menuMainLinks}>
            <Link to={paths.index} className={classes.navigationLogo}>
              <Typography variant="h6">GameSky</Typography>
            </Link>
            <MenuItem>
              <Link to={paths.profile} color="inherit">
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={paths.tournaments} color="inherit">
                Tournaments
              </Link>
            </MenuItem>
          </div>
          <Button color="inherit" onClick={() => setOpenLogin(true)}>
            <PersonOutlineSharpIcon fontSize="default" />
          </Button>
          <Button color="inherit">Donate</Button>
        </Toolbar>
      </AppBar>
      <Login open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};
