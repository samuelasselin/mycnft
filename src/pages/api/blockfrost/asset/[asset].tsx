import { resHandler } from "../../../../middleware/ResHandler";
import { BlockFrost } from "../../../../middleware/BlockFrost";

const handler = async (req, res) => {
  const {
    query: { asset },
  } = req;

  try {
    const collectible = await BlockFrost.assetsById(asset);
    if (collectible) resHandler(res, 200, { collectible });
  } catch (e) {
    emptyCollectible(res);
  }
};

const emptyCollectible = (res) => {
  resHandler(res, 200, { collectible: null });
};

export default handler;
