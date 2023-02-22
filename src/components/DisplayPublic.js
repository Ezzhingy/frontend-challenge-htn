import { Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import GenerateInfo from "./GenerateInfo";

import party from "./constants/party.svg";
import party2 from "./constants/party2.svg";

export default function DisplayPublic() {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  const handleLogoutRedirect = () => {
    navigate("/");
  };

  return (
    <Box bg="base.900" pt="10" pb="10">
      <Button
        px="5"
        mx="5"
        position="fixed"
        right="0"
        onClick={handleLogoutRedirect}
        zIndex="10"
      >
        Go Back
      </Button>
      <GenerateInfo private={false} setInfo={setInfo} info={info} type={null} />
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
