import React, { ReactNode } from "react";
import { makeStyles, Container } from "@material-ui/core";

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    minHeight: "100vh",
  },
});

export const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return <Container className={classes.container}>{children}</Container>;
};
