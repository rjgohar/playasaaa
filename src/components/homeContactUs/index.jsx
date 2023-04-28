import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../assets/contactusimage.png";
import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const ContactUsSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <Box className={classes.imageContainer}>
          <img src={image} alt="pic" className={classes.image} />
        </Box>
        <Box className={classes.textContainer}>
          <Typography
            fontFamily="Playfair Display"
            variant="body1"
            sx={{
              fontSize: "26px",
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h4"
            className={classes.description}
            sx={{
              fontWeight: "600",
              paddingTop: "10px",
              color: (theme) => theme.palette.background.footer,
            }}
          >
            High-quality, personalized real estate services.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              paddingTop: "25px",
              color: (theme) => theme.palette.secondary.grey,
            }}
          >
            Our company is committed to delivering high-quality and customized
            real estate services that cater to all of your specific needs. Our
            team of professionals is dedicated to providing exceptional
            assistance and support throughout the entire process, from start to
            finish. If you require any assistance or have any questions, please
            do not hesitate to contact us, and we will be more than happy to
            assist you in any way we can.
          </Typography>
          <Typography className={classes.contactUsText}>
            <ArrowRightAltIcon />
            <Link to="/ContactUs" className="link">
              Contact
            </Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default ContactUsSection;

const useStyles = makeStyles((theme) => ({
  main: {
    width: "80%",
    margin: "auto",
  },

  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 50,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "10px",
    },
  },
  imageContainer: {
    maxWidth: "575px",

    maxHeight: "502px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    maxWidth: "40%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  ContactUs: {
    fontSize: "46px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "36px",
    },
  },

  contactUsText: {
    paddingTop: "40px",
    display: "flex",
    alignItems: "center",
    "& .link": {
      color: theme.palette.secondary.main,
      fontSize: 16,
      fontWeight: 700,
    },
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
    },
  },
}));
