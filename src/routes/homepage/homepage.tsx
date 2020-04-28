import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import {
  Typography,
  Button,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Header } from "../../components/header";
import { paths } from "../paths";
import { TicketCard } from "../../components/ticket-card";

const useStyles = makeStyles({
  container: {
    paddingTop: 40,
  },
  mainContainer: {
    maxWidth: 960,
  },
});

type Props = RouteComponentProps;
// eslint-disable-next-line no-empty-pattern
export const Homepage = ({}: Props) => {
  const classes = useStyles();

  const tournaments = [
    { title: "FortniteNight 1", game: "Fortnite" },
    { title: "FortniteNight 2", game: "Fortnite" },
    { title: "FortniteNight 3", game: "Fortnite" },
    { title: "FortniteNight 4", game: "Fortnite" },
    { title: "FortniteNight 5", game: "Fortnite" },
  ];

  return (
    <div>
      <Header
        title="Přídej se k nám a hraj o prizemoney!"
        subtitle="Každý týden pořádáme turnaj ve hře Fortnite! Připoj se, bude to stát za to."
        image="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffortnite%2Fhome%2F12BR_EGS_Launcher_G-1360x766-ffb22909a731497584be4a01d18a17a15b245923.jpg?h=1080&resize=1&w=1920"
      >
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate(paths.login);
            }}
            size="large"
          >
            Nadcházející událost
          </Button>
        </div>
      </Header>
      <Container className={classes.container}>
        <Grid item className={classes.mainContainer}>
          {/* <Container> */}
          <Typography variant="h5" gutterBottom>
            Nadcházející turnaje
          </Typography>
          <Grid container spacing={3}>
            {tournaments.map((item) => (
              <TicketCard
                title={item.title}
                gameTag={item.game}
                key={item.title}
              />
            ))}
          </Grid>
          {/* </Container> */}
        </Grid>
      </Container>
    </div>
  );
};
