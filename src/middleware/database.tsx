import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

global.mongo = global.mongo || {};

const getMongoClient = async () => {
  handleMongoClient();
  await global.mongo.client.connect();
  return global.mongo.client;
};

const database = async (req, res, next) => {
  handleMongoClient();
  req.dbClient = await getMongoClient();
  req.db = req.dbClient.db("mycnftdev");
  return next();
};

const handleMongoClient = () => {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI);
  }
};

const middleware = nextConnect();
middleware.use(database);

export default middleware;
