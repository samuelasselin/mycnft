import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../middleware/DbConnect";
import User from "../../../models/user";
import { resHandler } from "../../../middleware/ResHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userData },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const user = await User.findOne({ userData });

      if (user) resHandler(res, 200, { user });
      else {
        resHandler(res, 200, {});
      }

      break;

    default:
      resHandler(res, 400, {});
      break;
  }
};

export default handler;
