import dbConnect from "../../../../middleware/DbConnect";
import { resHandler } from "../../../../middleware/ResHandler";
import { BlockFrost } from "../../../../middleware/BlockFrost";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const collectibles = await Promise.all(
        req.body.units.map(async (e) => {
          return await BlockFrost.assetsById(e.unit as any);
        })
      );

      resHandler(res, 200, { collectibles });

      break;
    default:
      resHandler(res, 400, {});
      break;
  }
};

export default handler;
