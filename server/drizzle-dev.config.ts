import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';


if(!process.env.LOCAL_DATABASE_URL){
  throw new Error('DATABASE_URL environment variable is not set');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.LOCAL_DATABASE_URL!,
  },
});
