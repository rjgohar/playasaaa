import React from "react";
import banner from "../../assets/Rectangle.png";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NewsCard from "../../components/newsCards";

export default function News() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.background}>
        <Typography variant="h4" className={classes.heading}>
          {" "}
          News
        </Typography>
      </div>

      <NewsCard />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
  },
  background: {
    backgroundImage: `url(${banner})`,
    height: "135px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
}));
