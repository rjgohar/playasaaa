import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ListingContentWwrapper = ({ heading, title, children }) => {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          padding: { md: "1em 6em", xs: "1em" },
          boxShadow: (theme) => ({ md: theme.shadows[4], xs: "none" }),
        }}
      >
        {heading && (
          <Typography
            align="left"
            variant="h6"
            mt={4}
            mb={4}
            color="primary"
            sx={{
              fontWeight: 700,
            }}
          >
            {heading}
          </Typography>
        )}

        <Box
          mt={4}
          mb={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "0.7fr 2fr", xs: "1fr" },
          }}
        >
          <Box>
            <Typography variant="h6" color="secondary">
              {title}
            </Typography>
          </Box>
          <Box mb={4}>{children}</Box>
        </Box>
      </Paper>
    </>
  );
};

export default ListingContentWwrapper;
