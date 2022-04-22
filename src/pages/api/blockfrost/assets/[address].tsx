import type { NextApiRequest, NextApiResponse } from "next";
import { BlockFrost } from "../../../../middleware/BlockFrost";
import { resHandler } from "../../../../middleware/ResHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { address },
  } = req;

  const assets = await BlockFrost.addresses(address as any);
  const units = assets?.amount.filter((a) => a.quantity == "1");

  if (units) resHandler(res, 200, { units });
  else {
    resHandler(res, 200, { units: [] });
  }

  // const nfts = await Promise.all(
  //   assetsUnits.map(async (e) => {
  //     return await BlockFrost.assetsById(e as any);
  //   })
  // );
};

export default handler;
