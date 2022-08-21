import React from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  StyleReset,
  Div,
  Button,
  Text,
  Icon
} from "atomize";

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

function App() {
  return (<ThemeProvider theme={theme}>
    <StyleReset />
    <Button
      colors="tomato"
      rounded="brandRadius"
      m={{ b: "1rem" }}
      p={{ x: "3rem" }}
    >
      Submit
    </Button>
  </ThemeProvider>
);
}

export default App;
