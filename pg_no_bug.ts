// @ts-types="npm:@types/pg@8.11.11"
import pg from "npm:pg@8.14.1";

const pool = new pg.Pool({
  connectionString:
    // CHANGE THIS TO YOUR OWN NEON DB
    "postgresql://user:password@your-own-neon-domain.eu-central-1.aws.neon.tech/neondb?sslmode=require",
});

await pool.query(`SELECT 1`);
await pool.end();
