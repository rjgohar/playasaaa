import React from "react";

import { makeStyles } from "@mui/styles";
import Terms from "../../components/terms";

export default function TermOfService() {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <Terms />
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  main: {
    padding: "90px 0px",
    width: "85%",
    margin: "0 auto",
  },
}));
