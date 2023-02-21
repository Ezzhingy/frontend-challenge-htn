import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import DisplayPrivate from "./components/DisplayPrivate";
import DisplayPublic from "./components/DisplayPublic";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/displayPrivate" element={<DisplayPrivate />} />
          <Route path="/displayPublic" element={<DisplayPublic />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
