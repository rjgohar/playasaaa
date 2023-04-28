import { Box, Typography } from "@mui/material";
import comma from "../../assets/quote-up.png";
import Carousel from "../carousel";
import TestimonialCard from "../testimonialCard";
import { makeStyles } from "@mui/styles";
import React from "react";

const TestimonialCarousel = () => {
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
    <Box
      sx={{
        background: "#D1FFFF",
        padding: { xs: "20px", sm: "40px", md: "60px" },
      }}
    >
      <Box>
        <img src={comma} alt="comma" />
      </Box>
      <Box>
        <Typography
          variant="h5"
          fontFamily={"Playfair, serif"}
          color={"secondary"}
          align="center"
          sx={{ textTransform: "uppercase" }}
        >
          Our Testimonials
        </Typography>
        <Typography
          variant="h4"
          color={"primary"}
          align="center"
          fontWeight={600}
        >
          What Our Customers Says
        </Typography>
      </Box>
      <Box>
        <Carousel
          className={classes.carousel}
          arrows={false}
          dots={true}
          slidesToShow={3}
          arrowsInside
          responsive={responsive}
          autoplay
          autoplaySpeed={5000}
          speed={2000}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Carousel>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          "& img": {
            transform: "rotate(180deg)",
          },
        }}
      >
        <img src={comma} alt="comma" />
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;

const useStyles = makeStyles((theme) => ({
  carousel: {
    "& .slick-dots": {
      "& li": {
        "& button": {
          "&:before": {
            color: theme.palette.secondary.main,
            fontSize: 10,
            [theme.breakpoints.down("sm")]: {
              fontSize: 10,
            },
          },
        },
      },
      "& .slick-active": {
        "& button": {
          "&:before": {
            color: "transparent",
            border: "1.5px solid " + theme.palette.secondary.main,

            borderRadius: "50%",
            height: 14,
            width: 14,
          },
        },
      },
    },
  },
}));
