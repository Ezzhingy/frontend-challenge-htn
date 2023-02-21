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

function App() {
  const colors = {
    base: {
      900: "#1A2026",
    },
    blue: {
      200: "#397696",
      100: "#62AEDA",
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

  const theme = extendTheme({ colors });

  return (
    <ChakraProvider theme={theme}>
      <Box color="yellow.100">hello world oof</Box>
    </ChakraProvider>
  );
}

export default App;
