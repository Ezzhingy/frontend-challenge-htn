import { Box, Button, Image, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import GenerateInfo from "./GenerateInfo";

import party from "./constants/party.svg";
import party2 from "./constants/party2.svg";

export default function DisplayPrivate() {
  const [info, setInfo] = useState([]);

  const navigate = useNavigate();

  const handleLogoutRedirect = () => {
    navigate("/");
  };

  const generateEventType = (e) => {
    let eventType = "";
    const filteredEvents = [];

    const eventContainer = document.querySelectorAll("#event-container");

    if (e.target.innerText === "Workshop") {
      eventType = "workshop";
    } else if (e.target.innerText === "Tech Talk") {
      eventType = "tech_talk";
    } else if (e.target.innerText === "Activity") {
      eventType = "activity";
    } else {
      eventType = null;
    }

    if (eventType === null) {
      eventContainer.forEach((event) => {
        event.style.display = "flex";
      });
    } else {
      for (let i = 0; i < info.length; i++) {
        if (info[i].event_type === eventType) {
          filteredEvents.push(i);
        }
      }

      eventContainer.forEach((event) => {
        if (filteredEvents.includes(parseInt(event.dataset.key))) {
          event.style.display = "flex";
        } else {
          event.style.display = "none";
        }
      });
    }
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
        zIndex="10"
      >
        Log Out
      </Button>
      <Stack
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
        pl={["0px", "0px", "120px"]}
      >
        <Button
          w="100px"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          All
        </Button>
        <Button
          w="100px"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          Workshop
        </Button>
        <Button
          w="100px"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          Tech Talk
        </Button>
        <Button
          w="100px"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          Activity
        </Button>
      </Stack>
      <GenerateInfo private={true} setInfo={setInfo} info={info} />
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
