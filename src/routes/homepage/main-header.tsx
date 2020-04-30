import React from "react";
import { Header } from "../../components/header";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";
import { paths } from "../paths";

export const MainHeader = () => {
  return (
    <Header
      title="Přídej se k nám a hraj o prizemoney!"
      subtitle="Každý týden pořádáme turnaj ve hře Fortnite! Připoj se, bude to stát za to."
      image="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffortnite%2Fhome%2F12BR_EGS_Launcher_G-1360x766-ffb22909a731497584be4a01d18a17a15b245923.jpg?h=1080&resize=1&w=1920"
    >
      <div>
        <Button variant="contained" color="secondary" size="large">
          <Link to={paths.tournaments}>see upcoming events</Link>
        </Button>
      </div>
    </Header>
  );
};
