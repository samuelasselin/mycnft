import middleware from "../middleware/database";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const apiHandler = nextConnect<NextApiRequest, NextApiResponse>();
export const handler = apiHandler.use(middleware);
