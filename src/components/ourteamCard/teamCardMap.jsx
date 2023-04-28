import React from "react";
import data from "./cardData";
import OurTeamCard from ".";
import { makeStyles } from "@mui/styles";
const TeamCardMap = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardsContainer}>
      {data.map(({ image, title, experience, detail, number }) => {
        return (
          <OurTeamCard
            image={image}
            title={title}
            experience={experience}
            detail={detail}
            number={number}
          />
        );
      })}
    </div>
  );
};

export default TeamCardMap;

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "20px",
    padding: "90px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
}));
