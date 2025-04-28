import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { postgres } from "bun";

import * as schema from "./schema";

// Check if DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

// Create postgres connection with pool
const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString, {
  max: 10, // Maximum number of connections in the pool
  idle_timeout: 20, // Max seconds a connection can be idle before being removed
  connect_timeout: 10, // Max seconds to wait for a connection
  prepare: false, // PostgresJS will auto-prepare statements (recommended for Neon)
});

export const db = drizzle(client, { schema });

export * from "./schema";
