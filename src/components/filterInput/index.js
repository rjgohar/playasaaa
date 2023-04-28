import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

const FlterInput = withStyles((theme) => ({
  root: {
    background: "tranparent",
    borderColor: "#D0D5D9",
    color: "#D0D5D9",
    "& div": {
      height: "40px",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D5D9",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D5D9",
    },
  },
}))(TextField);
export default FlterInput;
