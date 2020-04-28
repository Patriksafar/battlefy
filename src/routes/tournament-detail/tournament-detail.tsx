import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import {
  Container,
  Card,
  CardMedia,
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Button,
  createMuiTheme,
} from "@material-ui/core";
import { TabPanel } from "../../components";
import DoneIcon from "@material-ui/icons/Done";

type Props = RouteComponentProps<{ tournamentId?: string }>;
const theme = createMuiTheme();
const useStyles = makeStyles({
  cardBanner: {
    marginBottom: 16,
  },
  media: {
    height: 140,
    [theme.breakpoints.up("sm")]: {
      height: 260,
    },
  },
  container: {
    paddingTop: 40,
  },
  paddingTypo: {
    marginBottom: 16,
  },
  header: {
    marginBottom: 24,
  },
});

export const TournamentDetail = ({ tournamentId }: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [joined, setJoined] = useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleJoin = (value: boolean) => {
    setJoined(value);
    console.log("clicking on joinin.....", value);
  };
  console.log(joined);

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.header}>
        <Card className={classes.cardBanner}>
          <CardMedia
            className={classes.media}
            image="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F58b652268a55ee43035ef730%2F1587609640473.jpg?alt=media&token=dbf77a17-cc11-4862-994f-15c0ad9d723d"
          />
        </Card>
        <Typography variant="h5" component="h2" gutterBottom>
          FortniteNight 1{tournamentId}
        </Typography>
        <Typography variant="body2" className={classes.paddingTypo}>
          Some description gonna be here, which will says you already lost. So
          you should not join this tournament at all.
        </Typography>
        {joined ? (
          <Button
            color="secondary"
            variant="contained"
            startIcon={<DoneIcon />}
            onClick={() => handleJoin(false)}
          >
            Joined
          </Button>
        ) : (
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleJoin(true)}
          >
            Join this tournament
          </Button>
        )}
      </div>
      <div>
        <Tabs
          variant="scrollable"
          scrollButtons="off"
          value={value}
          indicatorColor="primary"
          // textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Overview" />
          <Tab label="Participants" />
          <Tab label="Rules" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
            <Typography variant="caption">Game:</Typography>
            <Typography variant="body1" gutterBottom>
              Fortnite
            </Typography>
          </div>
          <div>
            <Typography variant="caption">Date &amp; time:</Typography>
            <Typography variant="body1" gutterBottom>
              12. 7. 2020
            </Typography>
          </div>
          <div>
            <Typography variant="caption">Format</Typography>
            <Typography variant="body1" gutterBottom>
              Last elimination
            </Typography>
          </div>
          <div>
            <Typography variant="caption">Prizes</Typography>
            <Typography variant="body1">3000 Kč</Typography>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Participants
        </TabPanel>
        <TabPanel value={value} index={2}>
          Rules
        </TabPanel>
      </div>
    </Container>
  );
};
