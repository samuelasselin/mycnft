import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { useWallet } from "../hooks/UseWallet";
import { namiWalletSignIn } from "../utils/NamiWallet";
import truncateMiddle from "truncate-middle";

export const NavBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { wallet, setWallet } = useWallet();

  const handleConnectWallet = async () => {
    await namiWalletSignIn(setWallet);
  };

  const { isInstalled, syncWallet, address } = wallet;

  if (syncWallet && !address) {
    return <h1>Loading..</h1>;
  }

  const handleButton = () => {
    if (!isInstalled) {
      return;
    } else if (isInstalled && !syncWallet) {
      return (
        <Button colorScheme={"teal"} onClick={() => handleConnectWallet()}>
          Connect with nami
        </Button>
      );
    } else {
      return (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </MenuButton>
          <MenuList alignItems={"center"}>
            <br />
            <Center>
              <Avatar
                size={"2xl"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
            </Center>
            <br />
            <Center>
              <Text>{truncateMiddle(address, 4, 8, "...")}</Text>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Your Servers</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      );
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.200", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>MYNCFT</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {handleButton()}
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
