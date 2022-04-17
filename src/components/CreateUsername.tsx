import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

export const CreateUsername = () => {
  const [username, setUsername] = useState("");

  const createUsername = async () => {
    const response = await axios.post("http://localhost:3000/api/user", {
      username,
    });
    console.log(response);
  };

  return (
    <Stack
      spacing={4}
      w={"full"}
      maxW={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      p={6}
      my={12}
    >
      <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
        Please chose a username
      </Heading>
      <Text
        fontSize={{ base: "sm", sm: "md" }}
        color={useColorModeValue("gray.800", "gray.400")}
      >
        This username will be use to access your{" "}
        <strong>mycnft.io/profile</strong>
      </Text>
      <FormControl id="username">
        <Input
          placeholder="Username"
          _placeholder={{ color: "gray.500" }}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <Stack spacing={6}>
        <Button colorScheme={"teal"} onClick={createUsername}>
          Choose
        </Button>
      </Stack>
    </Stack>
  );
};
