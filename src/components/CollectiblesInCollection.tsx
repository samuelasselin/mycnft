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
} from "@chakra-ui/react";
import React from "react";
import { CollectibleType } from "../types/CollectiblesTypes";
import { CollectibleCard } from "./CollectibleCard";
import { Container } from "../components/Container";

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
            <Flex
              justify={"center"}
              direction={["column", "column", "row", "row"]}
              wrap={"wrap"}
            >
              {collectibles.map((collectible, index) => {
                return (
                  <CollectibleCard
                    key={index}
                    forCollection={false}
                    collectible={collectible}
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
