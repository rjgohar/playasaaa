import React from "react";

import { withStyles } from "@mui/styles";
import { InputBase } from "@mui/material";

const Input = withStyles((theme) => ({
  root: {
    width: "100%",
    background: "tranparent",
    borderBottom: "2px solid " + theme.palette.grey[500],
  },
}))(InputBase);
export default Input;
