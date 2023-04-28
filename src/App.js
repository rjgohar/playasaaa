import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Routers from "./routes";
import ReduxProvider from "./redux/store";
import UniversalDialogs from "./UniversalModals";
import React from "react";
const App = () => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <UniversalDialogs />
        <Routers />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
