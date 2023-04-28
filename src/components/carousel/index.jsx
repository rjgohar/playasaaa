import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const Carousel = ({ children, arrowsInside, className, ...props }) => {
  const settings = {
    ...props,
    infinite: true,
    nextArrow: <Arrow reverse />,
    prevArrow: <Arrow />,
  };
  const classes = useStyles();
  return (
    <Slider
      {...settings}
      className={clsx(className, { [classes.arrowsInsideItem]: !arrowsInside })}
    >
      {children}
    </Slider>
  );
};
export default Carousel;

const Arrow = ({ reverse, currentSlide, slideCount, ...props }) => {
  const classes = useStyles();
  return (
    <IconButton
      {...props}
      className={clsx(classes.arrowButton, {
        [classes.alignArrowLeft]: !reverse,
        [classes.alignArrowRight]: reverse,
        "slick-disabled": currentSlide === slideCount,
      })}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <ArrowForwardIosIcon
        className={clsx({
          [classes.arrowReversed]: !reverse,
        })}
        color="secondary"
      />
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  arrowButton: {
    width: 38,
    height: 38,
    backgroundColor: theme.palette.grey[300] + " !important",
    display: "grid !important",
    placeContent: "center",
    fontSize: 10,
    position: "absolute !important",
    top: "50%",
    zIndex: 100,
    transform: "translateY(-50%)",
    transition: ".25s",
    "&:hover": {
      background: theme.palette.grey[400],
      transition: ".25s",
    },
  },
  arrowReversed: {
    transform: "rotate(180deg)",
  },
  arrowsInsideItem: {
    padding: "0 90px",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 30px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 10px",
    },
  },
  alignArrowLeft: {
    left: 0,
  },
  alignArrowRight: {
    right: 0,
  },

  Carousel: {
    display: "flex",
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
