import { Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import GenerateInfo from "./GenerateInfo";

import party from "./constants/party.svg";
import party2 from "./constants/party2.svg";

export default function DisplayPrivate() {
  const navigate = useNavigate();

  const handleLogoutRedirect = () => {
    navigate("/");
  };

  return (
    <Box bg="base.900" pt="10" pb="10">
      <Button
        bgGradient="linear(to-r, blue.100, blue.200)"
        color="white"
        px="5"
        mx="5"
        _hover={{ bgGradient: "linear(to-r, blue.200, blue.300)" }}
        position="fixed"
        right="0"
        onClick={handleLogoutRedirect}
      >
        Log Out
      </Button>
      <GenerateInfo private={true} />
      <Image
        boxSize="500px"
        objectFit="contain"
        src={party}
        alt="Party"
        position="absolute"
        opacity="0.3"
        right="0"
        bottom="30%"
      />
      <Image
        boxSize="500px"
        objectFit="contain"
        src={party2}
        alt="Party2"
        position="absolute"
        opacity="0.3"
        left="-20"
        top="20"
      />
    </Box>
  );
}
