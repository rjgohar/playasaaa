import React from "react";
import LocationAndPurpose from "../../components/locationAndPurpose";
import { Box, Button } from "@mui/material";
import ListingContentWrapper from "../../components/listingContentWrapper";
import FeaturesContent from "../../components/featuresContent";
import AdInfo from "../../components/adInfo";
import PriceAndArea from "../../components/priceAndArea";
import PropertyImagesVideos from "../../components/PropertyImgAndVideo";
import ContactInformation from "../../components/contactInformation";

const PropertyOwner = () => {
  return (
    <>
      <Box
        sx={{
          padding: { md: "4em", xs: "1em" },
          display: "grid",
          gap: { md: 8, xs: 0 },
        }}
      >
        <ListingContentWrapper
          heading="Post Listing"
          title="Location and purpose"
        >
          <LocationAndPurpose />
        </ListingContentWrapper>
        <ListingContentWrapper title="Price and Area">
          <PriceAndArea />
        </ListingContentWrapper>

        <ListingContentWrapper title="Features">
          <FeaturesContent />
        </ListingContentWrapper>
        <ListingContentWrapper title="Ad Information">
          <AdInfo />
        </ListingContentWrapper>
        <ListingContentWrapper title="Property Images And Videos">
          <PropertyImagesVideos />
        </ListingContentWrapper>
        <ListingContentWrapper title="Contact Information">
          <ContactInformation />
        </ListingContentWrapper>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            size="large"
            sx={{ padding: "0.5em 3em" }}
          >
            Submit Ad
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PropertyOwner;
