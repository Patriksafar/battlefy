import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import {
  Typography,
  Button,
  Container,
  Card,
  CardActionArea,
  makeStyles,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { Header } from "../../components/header";
import { paths } from "../paths";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props = RouteComponentProps;
// eslint-disable-next-line no-empty-pattern
export const Homepage = ({}: Props) => {
  const classes = useStyles();
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
            color="primary"
            onClick={() => {
              navigate(paths.login);
            }}
          >
            Nadcházející událost
          </Button>
        </div>
      </Header>
      <Container>
        <Typography>Turnaje</Typography>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Fortnite #1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Je tu první turnaj ve hře Fortnite. Vstup do turnaje zdarma.
              </Typography>
              <Typography color="textSecondary" variant="overline">
                12. 3. 2020
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Připojit
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
