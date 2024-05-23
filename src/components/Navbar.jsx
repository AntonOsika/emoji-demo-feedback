import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold">Demo App</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/create-demo" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }}>
            Create Demo
          </Link>
          <Link as={RouterLink} to="/view-demo" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }}>
            View Demo
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;