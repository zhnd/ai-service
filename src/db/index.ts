import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzleSqlite } from "drizzle-orm/libsql/node";

export const getDb = () => {
  // 检查是否在 Cloudflare Workers 环境中
  try {
    const { env } = getCloudflareContext();
    // 如果能获取到 Cloudflare 上下文，说明在 Workers 环境中，使用 D1
    console.log("Using D1 database in Cloudflare Workers");
    return drizzleD1(env.DB, { casing: "snake_case" });
  } catch (error) {
    // 如果获取不到 Cloudflare 上下文，说明在本地开发环境，使用 SQLite
    console.log("Using SQLite database in local development");
    return drizzleSqlite({
      connection: "file:./local.db",
      casing: "snake_case",
    });
  }
};
