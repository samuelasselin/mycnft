import { handler } from "../../../utils/ApiHandler";

handler.get(async (req: any, res: any) => {
  const address = req.query.address;
  console.log("get");
});

handler.delete(async (req: any, res: any) => {
  const address = req.query.address;
  console.log("delete");
});

handler.patch(async (req: any, res: any) => {
  const address = req.query.address;
  console.log("update");
});

export default handler;
