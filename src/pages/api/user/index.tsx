import dbConnect from "../../../middleware/DbConnect";
import User from "../../../models/user";
import { resHandler } from "../../../middleware/ResHandler";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user = await User.create(req.body);
        if (user) resHandler(res, 200, { user });
        else {
          resHandler(res, 400, {});
        }
      } catch (error) {
        let statusCode = 400;
        if (error.code == 11000) {
          statusCode = 422;
        }
        resHandler(res, statusCode, { error });
      }
      break;
    default:
      resHandler(res, 400, {});
      break;
  }
};

export default handler;

// case "GET":
// try {
//   const users = await User.find({});
//   res.status(200).json({ success: true, data: users });
// } catch (error) {
//   res.status(400).json({ success: false });
// }
// break;
