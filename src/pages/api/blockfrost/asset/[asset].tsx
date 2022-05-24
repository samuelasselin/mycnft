import { resHandler } from "../../../../middleware/ResHandler";
import { BlockFrost } from "../../../../middleware/BlockFrost";

const handler = async (req, res) => {
  const {
    query: { asset },
  } = req;

  const collectible = await BlockFrost.assetsById(asset);

  if (collectible) resHandler(res, 200, { collectible });
  else {
    emptyCollectible(res);
  }
};

const emptyCollectible = (res) => {
  resHandler(res, 200, { collectible: null });
};

export default handler;
