import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../middleware/DbConnect";
import User from "../../../models/user";
import { resHandler } from "../../../middleware/ResHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { address },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const user = await User.findOne({ address: address });

      if (user) resHandler(res, 200, { user });
      else {
        resHandler(res, 400, {});
      }

      break;

    case "PUT":
      try {
        const user = await User.findOneAndUpdate(address as any, req.body, {
          new: true,
          runValidators: true,
        });

        if (user) resHandler(res, 200, { user });
        else {
          resHandler(res, 400, {});
        }
      } catch (error) {
        resHandler(res, 400, {});
      }
      break;

    default:
      resHandler(res, 400, {});
      break;
  }
};

export default handler;

// case "DELETE":
// try {
//   const deletedUser = await User.deleteOne({ address });
//
//   if (deletedUser) resHandler(res, 200, {});
//   else {
//     resHandler(res, 400, {});
//   }
// } catch (error) {
//   res.status(400).json({ success: false });
// }
// break;
