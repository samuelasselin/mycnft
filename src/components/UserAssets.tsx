import React from "react";
import useAxios from "axios-hooks";
import { Loader } from "./Loader";
import { AlertMessage } from "./AlertMessage";
import _ from "lodash";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { UserCollections } from "./UserCollections";

interface AssetsProps {
  address: string;
}

const UserAssets: React.FC<AssetsProps> = ({ address }) => {
  const [{ data, loading, error }] = useAxios({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/blockfrost/units/${address}`,
  });

  if (loading) return <Loader title={"Loading ..."} />;
  if (error) return <AlertMessage />;

  const assetsByCollection = _.groupBy(
    data.collectiblesWithMetaData,
    "policy_id"
  );

  if (assetsByCollection) {
    return (
      <>
        <Box px={10} margin={10} w={"100%"}>
          <Text fontWeight={800} fontSize={"xl"}>
            Collections
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
