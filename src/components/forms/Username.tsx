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
import { InputField } from "../body/InputField";
import axios from "axios";
import { useWallet } from "../../hooks/UseWallet";
import { useRouter } from "next/router";

export const Username: React.FC = () => {
  const {
    wallet: { address },
  } = useWallet();

  const router = useRouter();

  const profilPage = () => {
    router.reload();
  };

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
      <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
        Please chose a username
      </Heading>
      <Text
        fontSize={{ base: "sm", sm: "md" }}
        color={useColorModeValue("gray.800", "gray.400")}
      >
        It will be your gallery link
        <strong> mcnfts.art/username</strong>
      </Text>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={async ({ username }, { setSubmitting, setErrors }) => {
          if (!username) setErrors({ username: "Username is required" });
          else {
            await axios
              .post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user`, {
                username,
                address: address,
              })
              .catch(function (error) {
                if (error.toJSON().status == 422)
                  setErrors({ username: "Username is already taken." });
                else {
                  setErrors({
                    username: "An error occured, please try again.",
                  });
                }
              });
            setSubmitting(false);
            profilPage();
          }
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
                Chose username
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
