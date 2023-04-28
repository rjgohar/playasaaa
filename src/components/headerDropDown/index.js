import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import React from "react";
const HeaderDropDown = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.dropDown}>
      <Typography>Owners </Typography>
      <Link to="/TermOfService">
        <Typography>Terms of servives</Typography>
      </Link>
      <Link to="/policy">
        <Typography>Privacy Policy</Typography>
      </Link>
      <Typography>About Us</Typography>
    </Paper>
  );
};
export default HeaderDropDown;

const useStyle = makeStyles((theme) => ({
  dropDown: {
    backgroundColor: "white !important",
    padding: "10px 10px 10px 20px",
    position: "absolute",
    right: "10px",
    width: "160px",
    zIndex: 1,
    top: "60px",

    "& p": {
      fontFamily: "Poppins",
      fontSize: "17px",
      fontWeight: "500",
      lineHeight: "26px",
      color: "#D0D5D9",

      "&:hover": {
        fontSize: "17px",
        fontWeight: "600",
        color: theme.palette.background.footer,
        cursor: "pointer",
      },
    },
  },
}));
