import { makeStyles } from "@mui/styles";
import React from "react";
import image from "../../assets/contact.png";
import Contact from "../../components/contact";

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Contact />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundImage: ` url(${image})`,

    [theme.breakpoints.down("lg")]: {
      height: "100%",
      padding: "50px 0px",
    },
  },
}));
