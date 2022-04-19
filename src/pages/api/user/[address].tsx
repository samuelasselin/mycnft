import dbConnect from "../../../middleware/database";
import User from "../models/user";

const handler = async (req, res) => {
  const {
    query: { address },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.findOne({ address: address });
        res.status(200).json({ success: true, user: user || null });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const user = await User.findOneAndUpdate(address, req.body, {
          new: true,
          runValidators: true,
        });
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, user: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedUser = await User.deleteOne({ address });
        if (!deletedUser) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, user: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
