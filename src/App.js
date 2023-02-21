import React from "react";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";

import { LoginPage } from "./components/LoginPage";

import "./components/constants/Satoshi_Complete/Fonts/WEB/css/satoshi.css";

function App() {
  const colors = {
    base: {
      900: "#1A2026",
      800: "#30364E",
    },
    blue: {
      300: "#397696",
      200: "#62AEDA",
      100: "#84C9F7",
    },
    green: {
      100: "#6CE648",
    },
    yellow: {
      100: "#F7DA60",
    },
    pink: {
      100: "#E778C0",
    },
  };

  const fonts = {
    heading: "Satoshi-Bold",
    body: "Satoshi-Regular",
  };

  const theme = extendTheme({ colors, fonts });

  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
