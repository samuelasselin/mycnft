import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { GrTarget, GrShare, GrGallery } from "react-icons/gr";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const SimpleThreeColumns = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Feature
          icon={<Icon as={GrGallery} w={7} h={7} />}
          title={"Easily share or consult your arts"}
          text={""}
        />
        <Feature
          icon={<Icon as={GrShare} w={7} h={7} />}
          title={"Flex your new acquisitions"}
          text={""}
        />
        <Feature
          icon={<Icon as={GrTarget} w={7} h={7} />}
          title={"Quickly consult floor price"}
          text={""}
        />
      </SimpleGrid>
    </Box>
  );
};

export default SimpleThreeColumns;
