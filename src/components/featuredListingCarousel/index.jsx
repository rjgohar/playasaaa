import { Box, Typography } from "@mui/material";
import Carousel from "../carousel";
import { makeStyles } from "@mui/styles";
import PropertiesCard from "../card";
import React from "react";
const FeaturedListingCarousel = ({
  dots,
  arrows,
  primaryHeading,
  secondaryHeading,
}) => {
  const classes = useStyles();

  const responsive = [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
  ];
  return (
    <Box>
      <Box pl={secondaryHeading ? 11 : 0} pb={2}>
        {secondaryHeading && (
          <Typography
            variant="h5"
            color="secondary"
            fontFamily={"Playfair,serif"}
          >
            {secondaryHeading}
          </Typography>
        )}
        <Typography
          variant="h4"
          align={secondaryHeading ? "left" : "center"}
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          {primaryHeading}
        </Typography>
      </Box>
      <Carousel
        className={classes.carousel}
        arrows={arrows}
        slidesToShow={3}
        slidesToScroll={1}
        centerMode
        focusOnSelect
        responsive={responsive}
        arrowsInside={false}
        dots={dots}
      >
        <PropertiesCard />

        <PropertiesCard />

        <PropertiesCard />

        <PropertiesCard />

        <PropertiesCard />
      </Carousel>
    </Box>
  );
};

export default FeaturedListingCarousel;
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
      width: "fit-content",
      left: "50%",
      transform: "translateX(-50%)",
      "& li": {
        "& button": {
          "&:before": {
            color: theme.palette.secondary.main,
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
