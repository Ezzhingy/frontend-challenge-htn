import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import leftRibbon from "./constants/left-ribbon.png";
import rightRibbon from "./constants/right-ribbon.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Pattern validation was hard-coded in, but if it wasn't, the useStates above can be used to check like so:
    // For demo sake, username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
      navigate("/displayPrivate");
    }
  };

  const handleGuestRedirect = () => {
    navigate("/displayPublic");
  };

  return (
    <Box h="100vh" bg="base.900" pt="10">
      <Box>
        <Image
          boxSize="400px"
          objectFit="contain"
          src={leftRibbon}
          alt="Left Ribbon"
          position="absolute"
          top="-10"
          opacity={[0.3, 1]}
        />
        <VStack pt="10">
          <HStack>
            <Text
              color="white"
              fontWeight="bold"
              fontSize={["xl", "2xl", "3xl"]}
            >
              Introducing the
            </Text>
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              bgGradient="linear(to-r, pink.100, yellow.100)"
              fontWeight="bold"
              bgClip="text"
            >
              Hack the North
            </Text>
          </HStack>
          <Text
            fontSize={["5xl", "6xl"]}
            bgGradient="linear(to-r, green.100, blue.200)"
            fontWeight="extrabold"
            bgClip="text"
          >
            Events
          </Text>
        </VStack>
        <Image
          boxSize="400px"
          objectFit="contain"
          src={rightRibbon}
          alt="Left Ribbon"
          position="absolute"
          top="-10"
          right="0"
          opacity={[0.3, 1]}
        />
      </Box>
      <Center mt="10">
        <form onSubmit={handleFormSubmit}>
          <VStack spacing="10">
            <Box>
              <FormControl isRequired>
                <FormLabel
                  color="white"
                  fontWeight="bold"
                  fontSize="xs"
                  fontFamily="sans-serif"
                >
                  USERNAME
                </FormLabel>
                <Input
                  placeholder="admin"
                  type="text"
                  w={{ lg: "400px", sm: "300px" }}
                  bg="base.800"
                  color="grey"
                  onChange={handleUsernameChange}
                  pattern="admin"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel
                  color="white"
                  fontWeight="bold"
                  fontSize="xs"
                  fontFamily="sans-serif"
                >
                  PASSWORD
                </FormLabel>
                <Input
                  placeholder="password"
                  type="password"
                  w={{ lg: "400px", sm: "300px" }}
                  bg="base.800"
                  color="grey"
                  onChange={handlePasswordChange}
                  pattern="password"
                />
              </FormControl>
            </Box>
            <Box>
              <Button
                bgGradient="linear(to-r, blue.100, blue.200)"
                color="white"
                px="10"
                _hover={{ bgGradient: "linear(to-r, blue.200, blue.300)" }}
                type="submit"
              >
                Log In
              </Button>
            </Box>
            <Box>
              <Button type="button" px="10" onClick={handleGuestRedirect}>
                Proceed As Guest
              </Button>
            </Box>
          </VStack>
        </form>
      </Center>
    </Box>
  );
}
