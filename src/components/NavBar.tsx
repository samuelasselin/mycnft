import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
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
          Connect to nami
        </Button>
      );
    } else {
      return <Button colorScheme={"teal"}>Share my profil</Button>;
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.200", "gray.800")} px={4}>
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
