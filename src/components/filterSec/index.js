import { Box, MenuItem, Paper } from "@mui/material";
import FlterInput from "../filterInput";

import React from "react";
import { makeStyles } from "@mui/styles";
import DropDown from "../select";
import Button from "../button";
const FilterSec = () => {
  const classes = useStyles();
  const rentData = [
    { name: "sell", value: 1 },
    { name: "rent", value: 2 },
    { name: "shortstory", value: 3 },
  ];
  return (
    <Paper className={classes.root}>
      <div className={classes.firstSec}>
        <FlterInput placeholder="Search" />
        <DropDown name="Buy">
          {rentData.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </DropDown>
      </div>
      <div className={classes.filterSecondSec}>
        <FlterInput placeholder="Area/Location" />
        <DropDown name="Property Type">
          {rentData.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </DropDown>
        <DropDown name="Bedroom">
          {rentData.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </DropDown>
        <DropDown name="BathRoom">
          {rentData.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </DropDown>
        <div className={classes.lastFilter}>
          <FlterInput placeholder="min price" />
          <FlterInput placeholder="max price" />
        </div>
      </div>

      <Box sx={{ marginLeft: "auto" }}>
        <Button variant="outlined">Apply</Button>
      </Box>
    </Paper>
  );
};

export default FilterSec;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: "20px",
    display: "grid",
    gridTemplateRows: "1fr",
    rowGap: "80px",
  },

  filterSecondSec: {
    display: "grid",
    gridTemplateColumns: " repeat(auto-fill, minmax(200px, 1fr))",
    columnGap: "30px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: " 1fr",
      rowGap: "20px",
    },
  },

  firstSec: {
    display: "grid",
    gridTemplateColumns: "300px  100px ",
    columnGap: "30px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: " 1fr",
      rowGap: "20px",
    },
  },
  lastFilter: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: " 1fr",
      rowGap: "20px",
    },
  },
}));
