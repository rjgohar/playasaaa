import { Box, Typography } from "@mui/material";
import React from "react";
import Banner from "../../assets/banner.png";
import { makeStyles } from "@mui/styles";
import Carousel from "../carousel";
import SearchBar from "../searchBar";
const HomeCarousel = () => {
  const classes = useStyles();
  return (
    <Box sx={{ position: "relative" }}>
      {" "}
      <Carousel
        className={classes.carousel}
        arrows={false}
        dots
        arrowsInside={true}
      >
        <Box>
          <img src={Banner} alt="" width="100%" className={classes.banner} />
        </Box>
        <Box>
          <img src={Banner} alt="" className={classes.banner} />
        </Box>

        <Box>
          <img src={Banner} alt="" className={classes.banner} />
        </Box>
      </Carousel>
      <Box className={classes.bannerOverlay}>
        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 400,
              fontSize: { md: 36, sm: 28, xs: 20 },
            }}
          >
            welcome to playasa
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{ fontWeight: "800", fontSize: { md: 96, sm: 66, xs: 36 } }}
          >
            Find your next dream Beach Home
          </Typography>
        </Box>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default HomeCarousel;

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    maxHeight: "139vh",
    minHeight: "80vh",
  },
  bannerOverlay: {
    width: "70%",
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 50,
    [theme.breakpoints.down("sm")]: {},
  },
  carousel: {
    "& .slick-dots": {
      bottom: 40,
      [theme.breakpoints.down("sm")]: {
        bottom: 10,
      },
      "& li": {
        "& button": {
          "&:before": {
            color: "#fff",
            fontSize: 15,
            [theme.breakpoints.down("sm")]: {
              fontSize: 10,
            },
          },
        },
      },
    },
  },
}));
