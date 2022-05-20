import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import _ from "lodash";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UserCollections } from "./UserCollections";
import { SetStateWithPrev } from "../utils/SetStateWithPrev";
import { useWallet } from "../hooks/UseWallet";
import { capitalizeFirstLetter } from "../utils/UtilsConverter";

interface AssetsProps {
  address: string;
  username: string;
}

const UserAssets: React.FC<AssetsProps> = ({ address, username }) => {
  const { setWallet } = useWallet();

  useEffect(() => {
    const setUsernameInState = async () => {
      await SetStateWithPrev(setWallet, {
        username: username,
      });
    };

    setUsernameInState();
  }, []);

  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/units/${address}`,
  });

  if (loading) return <Loader title={"Loading ..."} />;
  if (error) return <AlertMessage />;

  const { collectiblesWithMetaData } = data;

  if (collectiblesWithMetaData.length > 0) {
    const assetsByCollection = _.groupBy(collectiblesWithMetaData, "policy_id");

    return (
      <>
        <Box px={10} margin={10} w={"100%"}>
          <Text fontWeight={800} fontSize={"2xl"}>
            <strong>{capitalizeFirstLetter(username)} collections</strong>
          </Text>
          <hr />
        </Box>
        <Flex
          justify={"center"}
          direction={["column", "column", "row", "row"]}
          wrap={"wrap"}
        >
          {Object.entries(assetsByCollection).map(
            ([policyId, collectibles]) => (
              <UserCollections
                key={policyId}
                policyId={policyId}
                collectibles={collectibles}
              />
            )
          )}
        </Flex>
      </>
    );
  }

  return <h1>No collectibles</h1>;
};

export default UserAssets;
