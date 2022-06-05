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
import { useWallet } from "../../hooks/UseWallet";
import { namiWalletSignIn } from "../../utils/NamiWallet";
import { TwitterShare } from "../TwitterShare";

export const NavBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { wallet, setWallet } = useWallet();

  const handleConnectWallet = async () => {
    await namiWalletSignIn(setWallet);
  };

  const { isInstalled, syncWallet, address, username } = wallet;

  if (syncWallet && !address) {
    return <h1>Loading..</h1>;
  }

  const handleNavBarButton = () => {
    if (!isInstalled) {
      return;
    } else if (isInstalled && !syncWallet) {
      return (
        <Button
          fontSize="1xl"
          fontWeight="bold"
          colorScheme={"teal"}
          onClick={() => handleConnectWallet()}
        >
          Connect to nami
        </Button>
      );
    } else {
      return (
        <TwitterShare
          hashtags={["Cardano", "MyCnfts"]}
          title={"Checkout my Cardano digital arts gallery !"}
          url={`${process.env.NEXT_PUBLIC_DOMAIN}/${username}`}
        />
      );
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.200", "gray.800")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <strong>Mycnfts beta</strong>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {handleNavBarButton()}
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
