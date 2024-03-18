import React, { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button, useToast, Image, Flex, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send data to backend)
    toast({
      title: "Subscribed!",
      description: `Thank you, ${name}, for subscribing!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setName("");
    setEmail("");
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to ChatGPT 3.5
      </Heading>
      <Text fontSize="xl" mb={8}>
        Experience the power of AI-driven conversations
      </Text>

      <Flex justify="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1679403766682-3b31efa571a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxMDc2Mzk3MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="ChatGPT 3.5" maxW="400px" />
      </Flex>

      <VStack as="form" onSubmit={handleSubmit} spacing={4} maxW="md" mx="auto" p={6} rounded="md" bg={useColorModeValue("gray.100", "gray.700")}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" w="full">
          Subscribe
        </Button>
      </VStack>

      <Box mt={8} maxW="2xl" mx="auto" textAlign="left">
        <Heading as="h2" size="xl" mb={4}>
          About ChatGPT 3.5
        </Heading>
        <Text fontSize="lg">ChatGPT 3.5 is a state-of-the-art language model developed by OpenAI. It utilizes deep learning techniques to generate human-like responses to text-based prompts. With its vast knowledge base and ability to understand context, ChatGPT 3.5 can engage in meaningful conversations across a wide range of topics. Whether you need assistance with problem-solving, creative writing, or simply want to have an interesting discussion, ChatGPT 3.5 is here to help.</Text>
      </Box>
    </Box>
  );
};

export default Index;
