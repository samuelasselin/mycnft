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
import { Collectibles } from "./Collectibles";
import { useWallet } from "../hooks/UseWallet";
import { TwitterShare } from "./TwitterShare";

interface CollectibleProps {
  collectibleData?: CollectibleType;
  collectibles?: CollectibleType[];
  collectionData?: any;
  forCollection?: boolean;
  sharable?: boolean;
  name: string;
  image: string;
}

export const Collectible: React.FC<CollectibleProps> = ({
  collectibles,
  forCollection = false,
  sharable = false,
  name,
  image,
  collectionData,
  collectibleData,
}) => {
  const { wallet } = useWallet();
  const { username } = wallet;

  const shareCollectible = () => {
    if (sharable) {
      const { asset } = collectibleData;

      return (
        <TwitterShare
          hashtags={["Cardano", "MyCnfts"]}
          title={"Checkout my new Nft !"}
          url={`${process.env.NEXT_PUBLIC_DOMAIN}/asset/${asset}?username=${username}`}
        />
      );
    }
  };

  return (
    <>
      <Box
        maxW={"350px"}
        minW={"250px"}
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
                  <strong>
                    Floor price :{" "}
                    {collectionData?.floor_price / 1000000 || "N/A "}
                  </strong>
                </Text>
                <Collectibles collectibles={collectibles} />
              </>
            ) : null}
            {shareCollectible()}
          </Stack>
        ) : null}
      </Box>
    </>
  );
};
