import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import DropDown from "../dropDown";
import GoogleMapStatic from "../googleMap";

const LocationAndPurpose = () => {
  const [selection, setSelection] = useState("sale");
  const [propertyType, setPropertyType] = useState("");
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleButtonProperty = (type) => {
    setPropertyType(type);
  };

  const handleButtonClick = (type) => {
    setSelection(type);
  };

  const propertyTypes = [
    {
      label: "Home",
      types: ["House", "Apartment", "Flat", "Upper Portion", "Lower Portion"],
    },
    { label: "Plots", types: ["Residential Plot", "Commercial Plot"] },
    { label: "Commercial", types: ["Office Space", "Retail Space"] },
  ];

  const cityArray = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Seattle",
  ];

  return (
    <>
      <Box sx={{ width: { md: "60%", xs: "100%" } }}>
        {/* select purpose */}
        <Box>
          <Typography variant="h6" color="primary">
            Select the purpose:
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant={selection === "sale" ? "contained" : "outlined"}
              onClick={() => handleButtonClick("sale")}
              sx={{ mr: 2 }}
            >
              Sale
            </Button>
            <Button
              variant={selection === "rent" ? "contained" : "outlined"}
              onClick={() => handleButtonClick("rent")}
              sx={{ mr: 2 }}
            >
              Rent
            </Button>
            <Button
              variant={selection === "short stay" ? "contained" : "outlined"}
              onClick={() => handleButtonClick("short stay")}
            >
              Short Stay
            </Button>
          </Box>
        </Box>

        {/* Select property */}
        <Box mt={4}>
          <Typography variant="h6" color="primary">
            Select Property type:
          </Typography>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="Plots" />
            <Tab label="Commercial" />
          </Tabs>

          <RenderButtons
            propertyTypes={propertyTypes}
            tabValue={tabValue}
            propertyType={propertyType}
            handleButtonProperty={handleButtonProperty}
          />
        </Box>

        {/* City Drop Down */}
        <DropDown title="City" option={cityArray} />

        {/* City Drop Down */}
        <DropDown title="Location" option={cityArray} />

        {/* Google Map */}
        <GoogleMapStatic />
      </Box>
    </>
  );
};

export default LocationAndPurpose;

const RenderButtons = ({
  propertyTypes,
  tabValue,
  propertyType,
  handleButtonProperty,
}) => {
  return (
    <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
      {propertyTypes[tabValue].types.map((type) => (
        <Button
          key={type}
          variant={propertyType === type ? "contained" : "outlined"}
          onClick={() => handleButtonProperty(type)}
        >
          {type}
        </Button>
      ))}
    </Box>
  );
};
