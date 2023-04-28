import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    maxHeight: "50px",
    "& div": {
      color: "#D0D5D9",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D5D9",
    },
  },
  inputLabel: {
    position: "absolute",
    bottom: "10px",
    "&.Mui-focused": {
      display: "none",
    },
  },

  selectInput: {
    "& svg": {
      color: "#D0D5D9",
    },
  },
}));

export default function SelectSmall({ children, name }) {
  const [age, setAge] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      {!age && (
        <InputLabel htmlFor="my-select" className={classes.inputLabel}>
          {name}
        </InputLabel>
      )}

      <Select
        value={age}
        sx={{ height: "40px" }}
        onChange={handleChange}
        className={classes.selectInput}
        IconComponent={KeyboardArrowDownIcon}
      >
        {children}
      </Select>
    </FormControl>
  );
}
