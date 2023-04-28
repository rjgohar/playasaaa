import React from "react";
import PrivacyPolicy from "../../components/privacyPolicy";
import { makeStyles } from "@mui/styles";

export default function Policy() {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <PrivacyPolicy />
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  main: {
    padding: "90px 0px",
    width: "85%",
    margin: "0 auto",
  },
}));
