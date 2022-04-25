import type { NextApiRequest, NextApiResponse } from "next";
import { BlockFrost } from "../../../../middleware/BlockFrost";
import { resHandler } from "../../../../middleware/ResHandler";
import { FetchIncrementBy } from "../../../../utils/infiniteScrollFetchBy";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { address },
  } = req;

  const assetsUnit = await BlockFrost.addresses(address as any);
  const units = assetsUnit?.amount.filter((a) => a.quantity == "1");

  const collectiblesWithMetaData = await Promise.all(
    units.slice(0, FetchIncrementBy).map(async (e) => {
      return await BlockFrost.assetsById(e.unit as any);
    })
  );

  if (units.length > 0 && collectiblesWithMetaData.length > 0)
    resHandler(res, 200, { units, collectiblesWithMetaData });
  else {
    resHandler(res, 200, { units: [], collectiblesWithMetaData: [] });
  }
};

export default handler;
