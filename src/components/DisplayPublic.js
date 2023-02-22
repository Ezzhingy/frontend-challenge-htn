import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function DisplayPublic() {
  const navigate = useNavigate();

  const handleLogoutRedirect = () => {
    navigate("/");
  };

  return (
    <Box h="100vh" bg="base.900" pt="10">
      <Button
        bgGradient="linear(to-r, blue.100, blue.200)"
        color="white"
        px="5"
        mx="5"
        _hover={{ bgGradient: "linear(to-r, blue.200, blue.300)" }}
        position="absolute"
        right="0"
        onClick={handleLogoutRedirect}
      >
        Go Back
      </Button>
    </Box>
  );
}
