import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Demo App</Text>
        <Text>Create and view demos with emoji reactions and feedback.</Text>
        <Button as={Link} to="/create-demo" colorScheme="blue">
          Create New Demo
        </Button>
        <Button as={Link} to="/view-demo" colorScheme="teal">
          View Demo
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;