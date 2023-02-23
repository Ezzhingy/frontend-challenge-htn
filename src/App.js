import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
      100: "#C1FAB1",
      200: "#6CE648",
    },
    yellow: {
      100: "#F9E8A1",
      200: "#F7DA60",
    },
    pink: {
      100: "#F5C6E5",
      200: "#E778C0",
    },
  };

  const fonts = {
    heading: "Satoshi-Bold",
    body: "Satoshi-Regular",
  };

  const theme = extendTheme({ colors, fonts });

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route
            path="/displayPrivate"
            element={
              <DisplayPrivate loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route path="/displayPublic" element={<DisplayPublic />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
