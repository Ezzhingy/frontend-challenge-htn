import {
  Box,
  HStack,
  VStack,
  Text,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function GenerateInfo(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const eventsResponse = await fetch(
          "https://api.hackthenorth.com/v3/events",
          {
            method: "GET",
            mode: "cors",
          }
        );
        const eventsResult = await eventsResponse.json();
        eventsResult.sort((a, b) => {
          if (a.start_time < b.start_time) {
            return -1;
          } else {
            return 1;
          }
        });

        setInfo(eventsResult);
      } catch (err) {
        console.log(err);
      }
    }
    getEvents();
  });

  // Only outputs month, date, year
  function timeConverterDate(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = month + " " + date + ", " + year;
    return time;
  }

  // Only outputs event start or end time
  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp);
    let hour = a.getHours();
    let min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    let time = hour + ":" + min;
    return time;
  }

  function outputInfo(event, index) {
    const eventDate = timeConverterDate(event.start_time);
    const startDate = timeConverter(event.start_time);
    const endDate = timeConverter(event.end_time);

    return (
      <HStack
        key={index}
        spacing="5"
        divider={<StackDivider borderColor="blue.200" />}
      >
        <Box w="100px">
          <VStack>
            <Text color="white">{eventDate}</Text>
            <HStack>
              <Text
                bgGradient="linear(to-r, yellow.100, yellow.200)"
                fontWeight="bold"
                bgClip="text"
              >
                {startDate}
              </Text>
              <Text color="white"> - </Text>
              <Text
                bgGradient="linear(to-r, pink.100, pink.200)"
                fontWeight="bold"
                bgClip="text"
              >
                {endDate}
              </Text>
            </HStack>
          </VStack>
        </Box>
        <VStack bg="base.800" w="600px" borderRadius="12px" p="5">
          <VStack textAlign="center">
            <Text
              fontSize="2xl"
              bgGradient="linear(to-r, green.100, green.200)"
              fontWeight="bold"
              bgClip="text"
            >
              {event.name}
            </Text>
            {event.speakers.length !== 0 && (
              <Text color="lightgrey" fontWeight="bold">
                {event.speakers[0].name}
              </Text>
            )}
            <Text color="white">{event.description}</Text>
            {event.public_url !== "" && (
              <Link
                bgGradient="linear(to-r, blue.100, blue.200)"
                fontWeight="bold"
                bgClip="text"
                _hover={{ bgGradient: "linear(to-r, blue.200, blue.300)" }}
                href={event.public_url}
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </Link>
            )}
          </VStack>
        </VStack>
      </HStack>
    );
  }

  return (
    <Box mt="20">
      <VStack spacing="5">
        {info.map((event, index) => {
          if (props.private) {
            return outputInfo(event, index);
          } else if (event.permission === "public") {
            return outputInfo(event, index);
          } else return null;
        })}
      </VStack>
    </Box>
  );
}
