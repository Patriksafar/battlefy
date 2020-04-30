import React from "react";
import { Link } from "@reach/router";
import { paths } from "../../routes/paths";
import { Grid, Avatar, Typography, makeStyles } from "@material-ui/core";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

type Props = {
  id: string;
  name: string;
  lvl: string;
  checked?: boolean | null;
};

const useStyles = makeStyles({
  root: {
    display: "block",
    marginBottom: 16,
  },
});
export const Participant = ({ name, lvl, checked }: Props) => {
  const classes = useStyles();

  return (
    <Link to={paths.profile} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar color="primary">
            <SportsEsportsIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="body2">LVL {lvl}</Typography>
        </Grid>
      </Grid>
    </Link>
  );
};
