import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import avatar1 from "../../assets/Avatar.png";
import { makeStyles } from "@mui/styles";

const TestimonialCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Box className={classes.descriptionContainer} sx={{ height: 179 }}>
        <Typography variant="body2" className={classes.text}>
          I could probably go into sales for you. I am completely blown away.
          After using SEO my business skyrocketed! The very best.
        </Typography>
      </Box>
      <div className={classes.textContainer}>
        <Avatar className={classes.avatar} alt="RemySharp" src={avatar1} />
        <Box pl={2} display="flex" alignItems="center">
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "500", fontSize: "18px" }}
            >
              Grace Hall
            </Typography>
            <Typography variant="body2" fontFamily="Playfair Display">
              Customer
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default TestimonialCard;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "20px",
  },
  descriptionContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "0px 20px 0px 20px",
    backgroundColor: theme.palette.grey[100],
    borderRadius: "15px",
    "&::after": {
      content: "''",

      position: "absolute",
      clipPath: "polygon(50% 100%, 0 0, 100% 0)",
      backgroundColor: theme.palette.grey[100],
      height: 14,
      width: 16,
      bottom: -13,
      left: 35,
    },
  },
  textContainer: {
    display: "flex",
    margin: "20px 10px 0px 15px",
  },
  text: {
    color: theme.palette.secondary.grey,
    fontSize: "16px",
  },
  avatar: {
    width: "54px ! important",
    height: "54px ! important",
  },
}));
