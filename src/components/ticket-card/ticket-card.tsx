import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Grid,
  createMuiTheme,
} from "@material-ui/core";
import * as classes from "./ticket-card.styles";

import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Link } from "@reach/router";
import { paths } from "../../routes/paths";

const theme = createMuiTheme();
const useStyles = makeStyles({
  gridItem: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "25%",
    },
  },
  title: {
    fontWeight: 800,
  },
});

type Props = {
  title: string;
  gameTag: string;
};
export const TicketCard = ({ title, gameTag }: Props) => {
  const overideClasses = useStyles();

  return (
    <Grid item className={overideClasses.gridItem}>
      <Card>
        <CardActionArea>
          <Link to={paths.tournamentDetail}>
            <CardMedia
              className={classes.media}
              image="https://www.letemsvetemapplem.eu/wp-content/uploads/2018/09/Fortnite.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <div>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  gutterBottom
                >
                  {gameTag}
                </Typography>
              </div>

              <Typography
                gutterBottom
                variant="subtitle1"
                component="h2"
                className={overideClasses.title}
              >
                {title}
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <DateRangeIcon color="inherit" fontSize="small" />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="textSecondary">
                        St, 16 Kvě
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <ScheduleIcon color="inherit" fontSize="small" />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="textSecondary">
                        12:30
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={paths.tournamentDetail}>Připojit</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
