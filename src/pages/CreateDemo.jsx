import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../supabaseClient';

const CreateDemo = () => {
  const [headline, setHeadline] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('demos')
      .insert([{ headline }]);

    if (error) {
      console.error('Error creating demo:', error);
    } else {
      console.log('Demo created:', data);
      navigate("/");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Box w="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Create New Demo
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="headline" isRequired>
              <FormLabel>Headline</FormLabel>
              <Input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Enter demo headline"
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Create Demo
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreateDemo;