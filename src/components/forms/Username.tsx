import {
  Button,
  FormControl,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import { InputField } from "../../utils/InputField";

export const Username: React.FC = () => {
  return (
    <Stack
      spacing={4}
      w={"full"}
      maxW={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      p={6}
      my={20}
    >
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        lineHeight={1.1}
        fontSize={{ base: "2xl", md: "3xl" }}
      >
        Please chose a username
      </Heading>
      <Text
        fontSize={{ base: "sm", sm: "md" }}
        color={useColorModeValue("gray.800", "gray.400")}
      >
        Username will be use to access your <strong>mycnft.io/profile</strong>
      </Text>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={async ({ username }, { setSubmitting, setErrors }) => {
          if (!username) setErrors({ username: "Required" });
          await axios.post("http://localhost:3000/api/user", {
            username,
          });
          await new Promise((r) => setTimeout(r, 2000));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl id="username">
              <InputField placeholder="Enter username" name="username" />
            </FormControl>
            <Stack spacing={6}>
              <Button
                mt={6}
                colorScheme={"teal"}
                type="submit"
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
