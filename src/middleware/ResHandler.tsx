import type { NextApiResponse } from "next";

export const resHandler = (
  res: NextApiResponse,
  statusCode: number,
  data: object
) => {
  return res
    .setHeader(
      "Access-Control-Allow-Origin",
      "https://mycnft-samuelasselin.vercel.app"
    )
    .status(statusCode)
    .json(data);
};
