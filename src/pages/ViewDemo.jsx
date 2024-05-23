import { useState, useEffect } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaSmile, FaMeh, FaFrown } from "react-icons/fa";

import { useParams } from "react-router-dom";

const ViewDemo = () => {
  const { id } = useParams();
  const [demo, setDemo] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [emojiReactions, setEmojiReactions] = useState({
    thumbsUp: 0,
    thumbsDown: 0,
    smile: 0,
    meh: 0,
    frown: 0,
  });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Logic to handle feedback submission and save to the database
    setFeedbackList([...feedbackList, feedback]);
    setFeedback("");
  };

  const handleEmojiClick = (emoji) => {
    // Logic to handle emoji reaction and save to the database
    setEmojiReactions((prevReactions) => ({
      ...prevReactions,
      [emoji]: prevReactions[emoji] + 1,
    }));
  };

  useEffect(() => {
    // Fetch the demo details from the database or API using the id
    const fetchDemo = async () => {
      // Placeholder demo data
      const demoData = { id, headline: `Demo ${id}`, content: `This is the content of demo ${id}.` };
      setDemo(demoData);
    };

    fetchDemo();
  }, [id]);

  if (!demo) {
    return (
      <Container centerContent maxW="container.md" py={10}>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Box w="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          {demo.headline}
        </Heading>
        <Text mb={6}>{demo.content}</Text>
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Reactions
            </Heading>
            <Flex justify="space-around" mb={4}>
              <Button leftIcon={<FaThumbsUp />} onClick={() => handleEmojiClick("thumbsUp")}>
                {emojiReactions.thumbsUp}
              </Button>
              <Button leftIcon={<FaThumbsDown />} onClick={() => handleEmojiClick("thumbsDown")}>
                {emojiReactions.thumbsDown}
              </Button>
              <Button leftIcon={<FaSmile />} onClick={() => handleEmojiClick("smile")}>
                {emojiReactions.smile}
              </Button>
              <Button leftIcon={<FaMeh />} onClick={() => handleEmojiClick("meh")}>
                {emojiReactions.meh}
              </Button>
              <Button leftIcon={<FaFrown />} onClick={() => handleEmojiClick("frown")}>
                {emojiReactions.frown}
              </Button>
            </Flex>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Feedback
            </Heading>
            <form onSubmit={handleFeedbackSubmit}>
              <VStack spacing={4}>
                <FormControl id="feedback" isRequired>
                  <FormLabel>Write your feedback</FormLabel>
                  <Textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback"
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full">
                  Submit Feedback
                </Button>
              </VStack>
            </form>
            <Box mt={6}>
              {feedbackList.map((fb, index) => (
                <Box key={index} p={3} borderWidth={1} borderRadius="md" mb={2}>
                  <Text>{fb}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default ViewDemo;