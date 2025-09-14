import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle as drizzleD1 } from "drizzle-orm/d1";

export const getDb = async () => {
  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) {
    const { drizzle: drizzleSqlite } = await import("drizzle-orm/libsql/node");
    return drizzleSqlite({
      connection: "file:./local.db",
      casing: "snake_case",
    });
  }
  const { env } = getCloudflareContext();
  console.info("Using D1 database in Cloudflare Workers");
  return drizzleD1(env.DB, { casing: "snake_case" });
};
