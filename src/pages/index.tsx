import React from "react";
import { Button, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import useAxios from "axios-hooks";
import { CollectibleCard } from "../components/CollectibleCard";
import { AlertMessage } from "../components/AlertMessage";
import { useRouter } from "next/router";

const Index: React.FC<{}> = () => {
  const router = useRouter();
  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_OPENCNFT}/1/rank`,
    method: "GET",
  });

  if (loading) return <h1 />;
  if (error) return <AlertMessage />;
  const { ranking } = data;

  const getRandom = (arr, num) => {
    const bestRanked = arr.slice(0, 20);
    const shuffled = [...bestRanked].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const profilPage = (e) => {
    e.preventDefault();
    router.push("/profile");
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#FF0080",
                zIndex: -1,
              }}
            >
              MYCNFT
            </Text>
            <br /> <Text as={"span"}>Your digital arts gallery on Cardano</Text>{" "}
          </Heading>
          <Text fontSize={{ base: "lg", lg: "xl" }}>
            Show your NFTs to whoever you want in seconds through your unique
            link <strong>mycnft.io/yourusername</strong>. Take your
            <strong> link</strong> wherever your audience is, and
            <strong> bring to life your digital arts gallery ! </strong>
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"teal"}
              color={"white"}
              _hover={{
                bg: "gray.500",
              }}
              onClick={profilPage}
            >
              Start now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      {data ? (
        <Flex
          justify={"center"}
          direction={["column", "column", "row", "row"]}
          wrap={"wrap"}
          maxWidth={"800px"}
        >
          {getRandom(ranking, 4).map((collection, index) => {
            const { thumbnail } = collection;

            return (
              <CollectibleCard
                key={index}
                forCollection={false}
                image={thumbnail}
                name={null}
              />
            );
          })}
        </Flex>
      ) : null}
    </Stack>
  );
};

export default Index;
