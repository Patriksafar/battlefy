import React, { ReactNode } from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";

import * as classes from "./header.styles";
import { cx } from "emotion";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const Header = ({ title, image, children, subtitle }: Props) => {
  const classesOver = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.landingImage}>
        <img src={image} alt={title} className={classes.landingImageContent} />
      </div>
      <Container
        classes={{ root: cx(classesOver.container, classes.container) }}
      >
        <div className={classes.containerContent}>
          <Typography variant="h1" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" gutterBottom>
              {subtitle}
            </Typography>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
};
