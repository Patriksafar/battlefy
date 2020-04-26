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
  Chip,
} from "@material-ui/core";
import * as classes from "./ticket-card.styles";

import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles({
  gridItem: {
    maxWidth: "25%",
    width: "100%",
  },
  chip: {
    padding: "4px",
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
          <CardMedia
            className={classes.media}
            image="https://www.letemsvetemapplem.eu/wp-content/uploads/2018/09/Fortnite.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <div>
              <Chip label={gameTag} size="small" color="secondary" />
            </div>

            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={overideClasses.title}
            >
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <DateRangeIcon color="inherit" fontSize="small" />
                  <Typography variant="caption">St, 16 Kvě</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <ScheduleIcon color="inherit" fontSize="small" />
                  <Typography variant="caption">12:30</Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Připojit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
