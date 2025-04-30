import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Check if DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

// Create postgres connection with pool
const connectionString = process.env.DATABASE_URL;
const client = new Pool({
  connectionString,
  max: 10, // Maximum number of connections in the pool
  idleTimeoutMillis: 20000, // Max milliseconds a connection can be idle before being removed
  connectionTimeoutMillis: 10000, // Max milliseconds to wait for a connection
});

export const db = drizzle(client, { schema });

export * from "./schema";
