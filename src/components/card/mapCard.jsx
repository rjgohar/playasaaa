import React from "react";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import { makeStyles } from "@mui/styles";
import PropertiesCard from ".";
export default function PropertiesCardMap() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <PropertiesCard {...item} />
          </div>
        );
      })}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    width: "90%",
    margin: "0 auto",
    display: "grid",
    columnGap: 0,

    rowGap: 45,
    placeItems: "center",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: " 1fr 1fr ",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "  1fr ",
    },
  },
}));

const data = [
  {
    image: h1,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h2,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h3,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h1,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h2,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h3,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h1,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h2,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h3,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h1,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h2,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h3,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h1,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h2,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
  {
    image: h3,
    title: "Apartment in Punta Cana",
    rooms: "4 bedrooms 4 bathrooms 340 m²",
    description:
      "Apartamento en Alquiler amoblado, decoración moderna y cálida, ubicado en una de las zonas más visitadas y espectaculares para vacacionar o para una larga estadía, en una de las esbeltas torres en la zona de Juan Dolio, San Pedro de Macorís. ",
  },
];
