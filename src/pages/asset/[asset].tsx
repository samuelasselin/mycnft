import React from "react";
import { useRouter } from "next/router";
import { Loader } from "../../components/body/Loader";
import AppBody from "../../layout/AppBody";
import { assetName } from "../../utils/UtilsConverter";
import { Collectible } from "../../components/Collectible";
import { Button, Stack } from "@chakra-ui/react";
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
    const imgSrc = getAssetImageSource(image);

    return (
      <AppBody imgSrc={imgSrc} title={title}>
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
  return <Loader title={"Loading ..."} />;
};

export default Asset;

export async function getServerSideProps(context) {
  const { asset, username } = context.query;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/asset/${asset}`
  );

  const { collectible } = response.data;

  if (collectible && username) {
    return { props: { collectible: collectible, username: username } };
  } else {
    return { props: { collectible: null, username: null } };
  }
}
