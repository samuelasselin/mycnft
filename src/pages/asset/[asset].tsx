import React from "react";
import { useRouter } from "next/router";
import useAxios from "axios-hooks";
import { Loader } from "../../components/body/Loader";
import { AlertMessage } from "../../components/body/AlertMessage";
import AppBody from "../../layout/AppBody";
import { assetName } from "../../utils/UtilsConverter";
import { Collectible } from "../../components/Collectible";
import { Button, Stack } from "@chakra-ui/react";
import Head from "next/head";

export const Asset: React.FC<{}> = () => {
  const router = useRouter();
  const { asset, username } = router.query;

  if (!asset) {
    return <Loader title={`Loading ...`} />;
  }

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/asset/${asset}`,
    method: "GET",
  });

  if (loading) return <Loader title={`Loading ...`} />;
  if (error) return <AlertMessage />;

  const { collectible } = data;

  const profilePage = () => {
    router.push(`/${username}`);
  };

  if (collectible) {
    const { onchain_metadata: onChainMetaData } = collectible;
    const { image, name } = onChainMetaData;

    const title = assetName(name, collectible.asset_name, false);

    return (
      <AppBody>
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="MyCnfts" />
          <meta name="twitter:description" content="MyCnfts description" />
          <meta
            name="twitter:image"
            content="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          />
        </Head>
        <Stack mt={16} align={"center"}>
          <Collectible
            key={collectible.asset_name}
            image={image}
            name={title}
          />

          {username ? (
            <Button
              onClick={profilePage}
              size={"sm"}
              colorScheme="teal"
              textAlign={"center"}
            >
              Checkout {username} gallery
            </Button>
          ) : null}
        </Stack>
      </AppBody>
    );
  }
};

export default Asset;
