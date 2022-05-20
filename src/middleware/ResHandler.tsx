import type { NextApiResponse } from "next";

export const resHandler = (
  res: NextApiResponse,
  statusCode: number,
  data: object
) => {
  return res.status(statusCode).json(data);
};
