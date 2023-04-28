import { Box, Typography } from "@mui/material";
import React from "react";
const DetailsTile = ({ heading, title }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        padding: 1.5,
        borderWidth: "0px 1px 1px 0px",
        borderStyle: "solid",
        borderColor: "#F2F5F8",
      }}
    >
      <Box sx={{ width: "fit-content" }} px={2.5}>
        <Box>
          <Typography
            variant="h6"
            color={"secondary"}
            align="center"
            sx={{ fontWeight: 400 }}
          >
            US$ 1,500
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            align="center"
            sx={{ fontWeight: 400, color: (theme) => theme.palette.grey[500] }}
          >
            For Rent
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsTile;
