import { Box, Paper, Typography } from "@mui/material";
import DetailsCarousel from "../../components/detailsCarousel";
import React from "react";
import DetailsCard from "../../components/detailsCard";
import DetailsTile from "../../components/detailsTile";
import { makeStyles } from "@mui/styles";
import DetailsSecondaryCard from "../../components/detailsSecondaryCard";
import GoogleMapStatic from "../../components/googleMap";
import FeaturedListingCarousel from "../../components/featuredListingCarousel";
import mapsIcon from "../../assets/maps.png";
import Button from "../../components/button";
import DetailsSideBar from "../../components/detailsSideBar";

const Details = () => {
  const classes = useStyles();
  return (
    <Box pb={10}>
      <Box position={"relative"}>
        <DetailsCarousel />
        <Box className={classes.button}>
          <Button variant="outlined">
            Find it on{" "}
            <img src={mapsIcon} alt="maps" className={classes.mapsIcon} />
          </Button>
        </Box>
      </Box>
      <Box
        position={"relative"}
        sx={{ padding: { md: "0 80px", sm: "0 40px", xs: "0 20px" } }}
        className={classes.grid}
      >
        <Box>
          <Box pb={8}>
            <Box>
              <DetailsCard />
            </Box>
            <Box>
              <Paper
                sx={{
                  display: "flex",
                  backgroundColor: (theme) => theme.palette.background.default,
                  width: "fit-content",
                  flexWrap: "wrap",
                }}
                elevation={0}
              >
                <DetailsTile />
                <DetailsTile />
                <DetailsTile />
                <DetailsTile />
              </Paper>
            </Box>
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }} pb={4}>
            <DetailsSecondaryCard />
          </Box>
          <Box pb={7}>
            <Box>
              <Typography variant="h6" color={"primary"} fontWeight={500}>
                Description
              </Typography>
            </Box>
            <Box pl={2} pt={1} width={"70%"}>
              <Typography
                variant="body1"
                color={"secondary"}
                fontFamily={"Playfair, serif"}
              >
                Apartamento en Alquiler amoblado, decoración moderna y cálida,
                ubicado en una de las zonas más visitadas y espectaculares para
                vacacionar o para una larga estadía, en una de las esbeltas
                torres en la zona de Juan Dolio, San Pedro de Macorís.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
              gap: 5,
            }}
          >
            <Box>
              <Box>
                <Typography variant="h6" color={"primary"} fontWeight={500}>
                  Characteristics
                </Typography>
              </Box>
              <Box pl={2} pt={1}>
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -2 habitaciones
                </Typography>
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -2 baños
                </Typography>
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -Amplio balcón
                </Typography>{" "}
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -Cocina modular
                </Typography>{" "}
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -Aire acondicionado
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography variant="h6" color={"primary"} fontWeight={500}>
                  Valor agregado :
                </Typography>
              </Box>
              <Box pl={2} pt={1}>
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -2 habitaciones
                </Typography>
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -2 baños
                </Typography>
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -Amplio balcón
                </Typography>{" "}
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -Cocina modular
                </Typography>{" "}
                <Typography
                  variant="body1"
                  color={"secondary"}
                  fontFamily={"Playfair, serif"}
                >
                  -Aire acondicionado
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <DetailsSideBar />
        </Box>
      </Box>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <GoogleMapStatic />
      </Box>
      <Box pt={10}>
        <FeaturedListingCarousel dots primaryHeading={"Featured Listing"} />
      </Box>
    </Box>
  );
};

export default Details;

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "2.5fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: "0px 20px 20px 0px",
    [theme.breakpoints.down("md")]: {
      top: 0,
      padding: "10px 10px 0px 0px",
    },
  },
  mapsIcon: {
    objectFit: "contain",
    height: 55,
    width: 35,
  },
}));
