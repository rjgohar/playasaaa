import React from "react";
import AboutUsHomeSection from "../../components/homeAboutUs";
import ContactUsSection from "../../components/homeContactUs";
import { Box } from "@mui/material";
import HomeCarousel from "../../components/homeCarousel";
import FeaturedListingCarousel from "../../components/featuredListingCarousel";
import TestimonialCarousel from "../../components/testimonialCarousel";

export default function Home() {
  return (
    <Box>
      <Box>
        <HomeCarousel />
      </Box>
      <Box
        sx={{
          padding: { xs: "20px", sm: "40px", md: "60px" },
        }}
      >
        <Box>
          <FeaturedListingCarousel
            arrows
            primaryHeading={"Find your Properties"}
            secondaryHeading={"Feature listing"}
          />
        </Box>

        <Box>
          <AboutUsHomeSection />
        </Box>
      </Box>
      <Box>
        <TestimonialCarousel />
      </Box>
      <Box py={10}>
        <ContactUsSection />
      </Box>
    </Box>
  );
}
