import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import { TicketCard } from "../../components/ticket-card";
import { Layout } from "../../components/layout";

const useStyles = makeStyles({
  tournamentListHeader: {
    marginBottom: 8,
  },
});

type Props = RouteComponentProps;

// eslint-disable-next-line no-empty-pattern
export const Tournaments = ({}: Props) => {
  const classes = useStyles();

  const tournaments = [
    { title: "FortniteNight 1", game: "Fortnite" },
    { title: "FortniteNight 2", game: "Fortnite" },
    { title: "FortniteNight 3", game: "Fortnite" },
    { title: "FortniteNight 4", game: "Fortnite" },
    { title: "FortniteNight 5", game: "Fortnite" },
    { title: "FortniteNight 6", game: "Fortnite" },
    { title: "FortniteNight 7", game: "Fortnite" },
    { title: "FortniteNight 8", game: "Fortnite" },
  ];
  return (
    <Layout>
      <Grid
        container
        justify="space-between"
        className={classes.tournamentListHeader}
      >
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Upcoming events
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {tournaments.map((item) => (
          <TicketCard title={item.title} gameTag={item.game} key={item.title} />
        ))}
      </Grid>
    </Layout>
  );
};
