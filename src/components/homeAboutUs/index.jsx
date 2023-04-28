import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import image from "../../assets/image1.png";
import trophy from "../../assets/trophy.png";
import house from "../../assets/house1.png";
import pay from "../../assets/money.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
export default function AboutUsHomeSection() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.mainContianer}>
        <Box className={classes.inner1}>
          <img className={classes.imageHouse} src={image} alt="photos" />
          <div className="miniInner">
            <Box sx={{ padding: 8 }}>
              <img className="iconn" src={trophy} alt="imhhhh" />
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.background.footer }}
              >
                National Real Estate Awards
              </Typography>
              <Typography
                sx={{
                  paddingTop: 1,
                  color: (theme) => theme.palette.secondary.text,
                }}
              >
                Analysis
              </Typography>
            </Box>
          </div>
        </Box>

        <Box className={classes.inner2}>
          <Box>
            <Typography
              sx={{
                color: (theme) => theme.palette.secondary.main,
                textTransform: "capitalize",
                fontWeight: 500,
                fontSize: 26,
              }}
            >
              About us
            </Typography>
          </Box>
          <Box sx={{ paddingTop: 3 }}>
            <Typography
              variant="h2"
              sx={{
                color: (theme) => theme.palette.background.footer,
                fontWeight: 600,
                fontSize: 35,
                textTransform: "capitalize",
                padding: "5px 0px 0px 0px",
              }}
            >
              We're on a Mission to Change View of RealEstate Field.
            </Typography>
          </Box>
          <Box sx={{ padding: "30px 0px 0px 0px" }}>
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.secondary.text,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Discover your dream home with us! Our top-notch, personalized real
              estate services are tailored to meet all of your needs. Don't
              hesitate to reach out to us if you need any assistance or have any
              questions. We are always happy to assist you in finding your
              perfect home.
            </Typography>
          </Box>

          <Box className={classes.section2}>
            <div sx={{ display: "flex", flexDirection: "column" }}>
              <img src={house} alt="house" />
              <Typography
                sx={{
                  color: (theme) => theme.palette.background.footer,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Modern Villa
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.secondary.text,
                  fontSize: 16,
                  fontWeight: 400,
                  paddingRight: 2,
                }}
              >
                When unknown printer took galley of type and scrambled.
              </Typography>
            </div>
            <div sx={{ display: "flex", flexDirection: "column" }}>
              <img src={pay} alt="house" />
              <Typography
                sx={{
                  color: (theme) => theme.palette.background.footer,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Secure Payment
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.secondary.text,
                  fontSize: 16,
                  fontWeight: 400,
                }}
                className={classes.typoo}
              >
                When unknown printer took galley of type and scrambled.
              </Typography>
            </div>
          </Box>
          <Box className={classes.endSec}>
            <ArrowRightAltIcon
              sx={{
                color: (theme) => theme.palette.secondary.main,
                fontWeight: 400,
                fontSize: 20,
                paddingTop: 0.3,
              }}
            />
            <Link to="/" className="link">
              Learn More
            </Link>
          </Box>
        </Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "90px 0px",
  },
  mainContianer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    columnGap: 30,
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
  },

  inner1: {
    position: "relative",

    "& .miniInner": {
      boxShadow: "5px 5px 15px rgba(74, 74, 74, 0.15)",
      borderRadius: 10,
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      left: -50,
      bottom: -50,
      width: 230,
      height: 260,
      backgroundColor: theme.palette.common.white,

      "& .iconn": { width: 60, height: 70, marginBottom: 10 },
    },
  },
  imageHouse: {
    width: 480,
    height: 550,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  inner2: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
  },

  section2: {
    paddingTop: 50,
    display: "flex",
    columnGap: 30,
  },
  endSec: {
    paddingTop: 30,
    display: "flex",

    alignContent: "center",
    rowGap: 10,
    "& .link": {
      color: theme.palette.secondary.main,
      fontSize: 16,
      fontWeight: 700,
    },
  },
  typoo: {
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
}));
