import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Flex,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CollectibleType } from "../types/CollectiblesTypes";
import { CollectibleCard } from "./CollectibleCard";
import { assetName } from "../utils/UtilsConverter";

interface CollectionModalProps {
  collectibles: CollectibleType[];
}

export const CollectiblesInCollection: React.FC<CollectionModalProps> = ({
  collectibles,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} size={"sm"} colorScheme="teal">
        View all ({collectibles.length})
      </Button>

      <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex={10} />
          <ModalBody bg={useColorModeValue("gray.50", "gray.900")}>
            <Box margin={10}>
              <Text fontWeight={800} fontSize={"2xl"}>
                <strong>Collectibles ({collectibles.length})</strong>
              </Text>
              <hr />
            </Box>
            <Flex
              justify={"center"}
              direction={["column", "column", "row", "row"]}
              wrap={"wrap"}
            >
              {collectibles.map((collectible, index) => {
                const { onchain_metadata: onChainMetaData } = collectible;
                const { image, name } = onChainMetaData;

                const title = assetName(name, collectible.asset_name, false);

                return (
                  <CollectibleCard
                    key={index}
                    forCollection={false}
                    image={image}
                    name={title}
                  />
                );
              })}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
