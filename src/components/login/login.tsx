import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  Modal,
  Paper,
  makeStyles,
  Theme,
  createStyles,
  Backdrop,
  Fade,
  Typography,
  FormGroup,
  TextField,
  Button,
} from "@material-ui/core";

type Props = {
  open: boolean;
  onClose: () => void;
} & RouteComponentProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
      color: theme.palette.text.primary,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth: 320,
      width: "100%",
      outline: "none",
    },
    inputGroup: {
      marginBottom: 16,
    },
  })
);

// eslint-disable-next-line no-empty-pattern
export const Login = ({ open, onClose }: Props) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => onClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <Typography
            id="transition-modal-title"
            variant="h5"
            align="center"
            gutterBottom
          >
            Join us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            It's very simple and fast
          </Typography>
          <FormGroup
            id="transition-modal-description"
            className={classes.inputGroup}
          >
            <TextField label="E-mail" variant="filled" margin="dense" />
            <TextField
              label="Password"
              margin="normal"
              variant="filled"
              type="password"
            />
          </FormGroup>
          <Button variant="contained" color="primary" size="large" fullWidth>
            Continue
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
};
