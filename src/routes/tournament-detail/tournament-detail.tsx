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
import { Layout } from "../../components/layout";
import { Participant } from "../../components/participant/participant";

type Props = RouteComponentProps<{ tournamentId?: string }>;
const theme = createMuiTheme();
const useStyles = makeStyles({
  cardBanner: {
    marginBottom: 16,
  },
  media: {
    height: 140,
    backgroundColor: theme.palette.grey[900],
    [theme.breakpoints.up("sm")]: {
      height: 260,
    },
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

  const participansList = [
    { name: "Pandakiller", lvl: "1" },
    { name: "Fuciminavaja", lvl: "1" },
    { name: "Shopaholic Nicon", lvl: "2353" },
  ];
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleJoin = (value: boolean) => {
    setJoined(value);
  };

  return (
    <Layout>
      <Container maxWidth="md">
        <div className={classes.header}>
          <Card className={classes.cardBanner}>
            <CardMedia
              className={classes.media}
              // classes={{ root: classes.media, paper: classes.mediaPaper }}
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
          <Typography variant="body2" className={classes.paddingTypo}>
            By joining this tournament you automaticaly agree with rules of this
            tournament. For more see tab Rules
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
              <Typography variant="caption">Players registered:</Typography>
              <Typography variant="body1" gutterBottom>
                99 / 100
              </Typography>
            </div>
            <div>
              <Typography variant="caption">Game:</Typography>
              <Typography variant="body1" gutterBottom>
                Fortnite
              </Typography>
            </div>
            <div>
              <Typography variant="caption">Starts:</Typography>
              <Typography variant="body1" gutterBottom>
                12. 7. 2020 12:30
              </Typography>
            </div>
            <div>
              <Typography variant="caption">Check-in:</Typography>
              <Typography variant="body1" gutterBottom>
                12. 7. 2020 12:00
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
            {participansList.map((item, index) => (
              <Participant name={item.name} lvl={item.lvl} id="1" />
            ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            Rules
          </TabPanel>
        </div>
      </Container>
    </Layout>
  );
};
