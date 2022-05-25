import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useWallet } from "../../hooks/UseWallet";
import { namiWalletSignIn } from "../../utils/NamiWallet";
import { AlertMessage } from "./AlertMessage";
import { GrShare } from "react-icons/gr";
import { alertMessageTimeOutHandler } from "../../utils/AlertMessage";
import { useRouter } from "next/router";
export const NavBar: React.FC = () => {
  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const { wallet, setWallet } = useWallet();

  const handleConnectWallet = async () => {
    await namiWalletSignIn(setWallet);
  };

  const { isInstalled, syncWallet, address, username } = wallet;

  if (syncWallet && !address) {
    return <h1>Loading..</h1>;
  }

  const shareProfil = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_DOMAIN}/${username}`
    );
    alertMessageTimeOutHandler(setShowAlert, 2000);
  };

  const createProfile = () => {
    router.push("/profile");
  };

  const handleNavBarButton = () => {
    if (!isInstalled) {
      return (
        <Button
          fontSize="1xl"
          fontWeight="bold"
          colorScheme={"teal"}
          onClick={() => createProfile()}
        >
          Create your gallery now !
        </Button>
      );
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
        <Button
          leftIcon={<Icon as={GrShare} />}
          fontSize="1xl"
          fontWeight="bold"
          colorScheme={"teal"}
          onClick={shareProfil}
        >
          Share gallery
        </Button>
      );
    }
  };

  return (
    <>
      {showAlert ? (
        <AlertMessage status={"success"} message={"Copied !"} hero={false} />
      ) : null}
      <Box bg={useColorModeValue("gray.200", "gray.800")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <strong>MYCNFT beta</strong>
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
