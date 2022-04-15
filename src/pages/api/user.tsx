import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

// Find user by wallet address
handler.get(async (req: any, res: any) => {
  const { address } = req.body;

  const user = await req.db.collection("user").findOne({ address });
  res.json(user);
});

// Create user with wallet address and username
handler.post(async (req: any, res: any) => {
  const { username, address } = req.body;

  const doc = await req.db.collection("user").updateOne();
  res.json({ message: "ok" });
});

export default handler;

// export async function getStaticProps(context) {
//   const res = await fetch("http://localhost:3000/api/user");
//   const json = await res.json();
//   return {
//     props: {
//       data: json,
//     },
//   };
// }
