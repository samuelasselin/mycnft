import { handler } from "../../../utils/ApiHandler";

handler.post(async (req: any, res: any) => {
  const { address, username } = req.body;
  const user = await req.db.collection("user").updateOne({ address, username });
  res.json(user);
});

export default handler;
