import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const isDevelopment = process.env.NODE_ENV === "development";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "sqlite",
  ...(isDevelopment
    ? {
        dbCredentials: {
          url: "file:./local.db",
        },
      }
    : {
        driver: "d1-http",
        dbCredentials: {
          accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
          databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
          token: process.env.CLOUDFLARE_D1_TOKEN!,
        },
      }),
});
