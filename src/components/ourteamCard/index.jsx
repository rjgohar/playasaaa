import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CallIcon from "@mui/icons-material/Call";

export default function OurTeamCard({
  image,
  title,
  experience,
  detail,
  number,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.imageContainer}>
        <img src={image} alt="" className={classes.image} />
      </Box>

      <Box className={classes.textContainer}>
        <Box className={classes.experienceContainer}>
          <Typography
            variant="body2"
            sx={{ color: (theme) => theme.palette.common.blue }}
          >
            {experience}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{ color: (theme) => theme.palette.common.black }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.secondary.grey }}
        >
          {detail}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: 1,
            color: (theme) => theme.palette.secondary.grey,
          }}
        >
          <CallIcon className={classes.icon} /> Call: {number}
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "2px 4px 10px 1px rgba(58, 58, 58, 0.08)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
  },
  image: {
    width: "85%",
    height: 280,
    objectFit: "cover",
  },

  textContainer: {
    position: "relative",
    padding: "0px 0px 10px 25px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 10px 19px",
    },
  },
  experienceContainer: {
    padding: 4,
    position: "absolute",
    backgroundColor: "white",
    opacity: "0.8",
    top: -53,
  },
  icon: {
    color: theme.palette.common.blue,
    fontSize: "medium",
  },
}));
