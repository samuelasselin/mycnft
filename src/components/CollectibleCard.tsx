import {
  Box,
  Image,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CollectibleType } from "../types/CollectiblesTypes";
import { getAssetImageSource } from "../utils/IpfsConverter";
import LazyLoad from "react-lazyload";
import { CollectiblesInCollection } from "./CollectiblesInCollection";

interface CollectibleProps {
  collectionData?: any;
  collectibles?: CollectibleType[];
  forCollection: boolean;
  name: string;
  image: string;
}

export const CollectibleCard: React.FC<CollectibleProps> = ({
  collectibles,
  forCollection,
  name,
  image,
  collectionData,
}) => {
  return (
    <Box
      maxW={"350px"}
      minW={"350px"}
      m={3}
      role={"group"}
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${getAssetImageSource(image)})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <LazyLoad>
          <Image
            rounded={"lg"}
            fallback={
              <Stack alignItems={"center"} mt={100}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#FF0080"
                  size="xl"
                />
              </Stack>
            }
            src={getAssetImageSource(image)}
          />
        </LazyLoad>
      </Box>
      {name ? (
        <Stack pt={10} align={"center"}>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {name}
            </Text>
          </Stack>

          {forCollection ? (
            <>
              <Text color={"gray.500"} fontSize={"md"}>
                Floor price : {collectionData?.floor_price / 1000000 || "N/A"}
              </Text>
              <CollectiblesInCollection collectibles={collectibles} />
            </>
          ) : null}
        </Stack>
      ) : null}
    </Box>
  );
};
