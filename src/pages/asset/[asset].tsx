import React from "react";
import { useRouter } from "next/router";
import useAxios from "axios-hooks";
import { Loader } from "../../components/body/Loader";
import { AlertMessage } from "../../components/body/AlertMessage";
import AppBody from "../../layout/AppBody";
import { assetName } from "../../utils/UtilsConverter";
import { Collectible } from "../../components/Collectible";
import { Button, Stack } from "@chakra-ui/react";

export const Asset: React.FC & { layout: any } = () => {
  const router = useRouter();

  const { asset, username } = router.query;

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
      <Stack mt={16} align={"center"}>
        <Collectible key={collectible.asset_name} image={image} name={title} />

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
    );
  }
};

export default Asset;

Asset.layout = AppBody;
