import { Box, Button, Image, Stack } from "@chakra-ui/react";
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

  const generateEventType = (e) => {
    let eventType = "";
    const filteredEvents = [];

    const eventContainer = document.querySelectorAll("#event-container");

    if (e.target.innerText === "Workshop") {
      eventType = "workshop";
    } else if (e.target.innerText === "Tech Talk") {
      eventType = "tech_talk";
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

      // uses data-key to identify appropriate event
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
    <Box bg="base.900" pt="10" pb="10" minH="100vh">
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
      <Stack
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
        pl={["0px", "0px", "120px"]}
      >
        <Button
          w="100px"
          bg="lightgray"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          All
        </Button>
        <Button
          w="100px"
          bg="lightgray"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          Workshop
        </Button>
        <Button
          w="100px"
          bg="lightgray"
          _focus={{ bg: "base.800", color: "white" }}
          onClick={generateEventType}
          zIndex="10"
        >
          Tech Talk
        </Button>
      </Stack>
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
