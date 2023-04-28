import { InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../button";
const SearchBar = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        padding: 1,
        width: { sm: "70%", xs: "100%" - 8 },
      }}
    >
      <SearchIcon color="secondary" />

      <InputBase
        sx={{ width: "100%", fontFamily: "Playfair Display, serif" }}
        placeholder="Search for city, property, and more..."
      />

      <Button variant="outlined">Search</Button>
    </Paper>
  );
};

export default SearchBar;
