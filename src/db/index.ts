import { drizzle } from "drizzle-orm/d1";
import { env } from "process";

export const db = drizzle({ connection: env.DB, casing: "snake_case" });
