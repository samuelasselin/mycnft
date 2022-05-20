import type { NextApiRequest, NextApiResponse } from "next";
import { BlockFrost } from "../../../../middleware/BlockFrost";
import { resHandler } from "../../../../middleware/ResHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { address },
  } = req;

  const assetsUnit = await BlockFrost.addresses(address as any);

  const units = assetsUnit?.amount.filter((a) => a.quantity == "1");

  if (units.length > 0) {
    const collectiblesWithMetaData = await Promise.all(
      units.map(async (e) => {
        return await BlockFrost.assetsById(e.unit as any);
      })
    );

    if (collectiblesWithMetaData.length > 0)
      resHandler(res, 200, { collectiblesWithMetaData });
    else {
      emptyCollectibles(res);
    }
  } else {
    emptyCollectibles(res);
  }
};

const emptyCollectibles = (res) => {
  resHandler(res, 200, { collectiblesWithMetaData: [] });
};

export default handler;
