import { Box } from "@mui/material";
import Carousel from "../carousel";
import { makeStyles } from "@mui/styles";
import banner from "../../assets/details.png";
import React from "react";
const DetailsCarousel = () => {
  const classes = useStyles();
  return (
    <Box>
      <Carousel
        className={classes.carousel}
        arrows={false}
        dots
        arrowsInside={true}
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Box>
  );
};

export default DetailsCarousel;

const CarouselItem = () => {
  const classes = useStyles();
  return (
    <Box sx={{ position: "relative" }}>
      <img src={banner} alt="" width="100%" className={classes.banner} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    maxHeight: "95vh",
    minHeight: "80vh",
  },
  carousel: {
    "& .slick-dots": {
      bottom: 40,
      width: "fit-content",
      left: "65%",
      [theme.breakpoints.down("md")]: {
        bottom: 75,
        left: "50%",
        transform: "translateX(-50%)",
      },
      "& li": {
        "& button": {
          "&:before": {
            color: theme.palette.secondary.main + " !important",
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
