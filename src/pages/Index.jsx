import { useState, useEffect } from "react";
import { Container, Text, VStack, Button, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const [demos, setDemos] = useState([]);

  useEffect(() => {
    // Fetch the list of demos from the database or API
    // For now, we'll use a placeholder list
    const fetchDemos = async () => {
      const demoList = [
        { id: 1, headline: "Demo 1" },
        { id: 2, headline: "Demo 2" },
      ];
      setDemos(demoList);
    };

    fetchDemos();
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          List of Demos
        </Heading>
        {demos.map((demo) => (
          <Box key={demo.id} p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
            <Text fontSize="xl">{demo.headline}</Text>
            <Button as={Link} to={`/view-demo/${demo.id}`} colorScheme="teal" mt={2}>
              View Demo
            </Button>
          </Box>
        ))}
        <Button as={Link} to="/create-demo" colorScheme="blue" mt={6}>
          Create New Demo
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;