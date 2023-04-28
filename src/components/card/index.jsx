import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import image from "../../assets/h1.png";
import React from "react";
import Button from "../button";
import { useNavigate } from "react-router";

export default function PropertiesCard() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/details");
  };
  return (
    <div className={classes.mainContainer}>
      <Box className={classes.inner}>
        <Box sx={{ position: "relative" }}>
          {" "}
          <img className={classes.imageHouse} src={image} alt="houseImage" />
          <Box className={classes.priceBox}>
            <Typography> US$ 1,000,000</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.background.footer,
              fontWeight: 900,
              fontSize: 19,
              textTransform: "capitalize",
            }}
          >
            Apartment in Punta Cana
          </Typography>
        </Box>
        <div>
          <Typography
            sx={{
              color: (theme) => theme.palette.background.footer,
              fontWeight: 600,
              fontSize: 16,
              paddingLeft: 1,
            }}
          >
            4 bedrooms 4 bathrooms 340 m²
          </Typography>
        </div>
        <div>
          <Typography
            sx={{
              color: (theme) => theme.palette.secondary.main,
              fontWeight: 400,
              fontSize: 14,
            }}
          >
            Apartamento en Alquiler amoblado, decoración moderna y cálida,
            ubicado en una de las zonas más visitadas y espectaculares para
            vacacionar o para una larga estadía, en una de las esbeltas torres
            en la zona de Juan Dolio, San Pedro de Macorís.{" "}
          </Typography>
        </div>
        <div className={classes.endBtn}>
          <Button className="btn" variant="outlined" onClick={handleNavigation}>
            Details
          </Button>
        </div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: 8,
  },
  inner: {
    padding: 15,

    width: "calc(100% - 30px)",
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    backgroundColor: theme.palette.common.main,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    rowGap: 6,
  },
  imageHouse: {
    borderRadius: 10,
    width: "100%",
    height: 200,
  },

  endBtn: {
    paddingRight: 10,
    display: "flex",
    justifyContent: "end",

    "& .btn": {
      marginTop: 10,
      width: 150,
      textTransform: "capitalize",
      fontWeight: 600,
      fontSize: 20,
    },
  },

  priceBox: {
    padding: "3px 30px ",
    borderRadius: 3,
    textAlign: "center",
    position: "absolute",
    top: 8,
    right: 6,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.footer,
  },
}));
