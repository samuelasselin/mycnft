import type { NextApiResponse } from "next";

export const resHandler = (
  res: NextApiResponse,
  statusCode: number,
  data: object
) => {
  return res
    .setHeader("Access-Control-Allow-Origin", "*")
    .status(statusCode)
    .json(data);
};
