// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri4: any = process.env.MONGODB_URI_S1;
const clientS1 = new MongoClient(uri4);

async function connectToMongoDBS1() {
  // Get your MongoDB connection string from MongoDB Atlas.
  const connectionString: any = process.env.MONGODB_URI_S1;

  // Connect to MongoDB.
  const client = await MongoClient.connect(connectionString);

  // Return the database connection.
  return client.db(process.env.DB_NAME);
}

export const Clients = {
  clientS1,
  connectToMongoDBS1
}
