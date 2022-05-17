import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  SimpleGrid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CollectibleType } from "../types/CollectiblesTypes";
import { Collectible } from "./Collectible";

interface CollectionModalProps {
  collectibles: CollectibleType[];
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  collectibles,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        View all ({collectibles.length})
      </Button>

      <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={useColorModeValue("gray.50", "gray.900")}>
            <SimpleGrid columns={4} spacing={5} margin={10}>
              {collectibles.map((collectible, index) => {
                return (
                  <Collectible
                    key={index}
                    forCollection={false}
                    collectible={collectible}
                  />
                );
              })}
            </SimpleGrid>
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
