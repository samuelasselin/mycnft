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
import axios from "axios";
import { CollectibleType } from "../../types/CollectiblesTypes";
import { getAssetImageSource } from "../../utils/IpfsConverter";

interface AssetProps {
  collectible: CollectibleType;
  username: string;
}

export const Asset: React.FC<AssetProps> = ({ collectible, username }) => {
  const router = useRouter();

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
          <title>MyCnfts</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${name}`} />
          <meta name="twitter:description" content="MyCnfts" />
          <meta
            name="twitter:image"
            content={"https://og-image.vercel.app/Hello%20World.png"}
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

export async function getServerSideProps(context) {
  const { asset, username } = context.query;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/asset/${asset}`
  );

  const { collectible } = response.data;
  return { props: { collectible: collectible, username: username } };
}
