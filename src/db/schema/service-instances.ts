import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { apiHosts } from "./hosts";

export const serviceInstances = sqliteTable("service_instances", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  endPoint: text("endPoint").notNull(),
  maxUserCount: integer("maxUserCount").notNull(),
  userName: text("userName").notNull(),
  password: text("password").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  userId: text("userId"),
  apiHostId: text("apiHostId")
    .notNull()
    .references(() => apiHosts.id),
});

export type ServiceInstance = typeof serviceInstances.$inferSelect;
export type NewServiceInstance = typeof serviceInstances.$inferInsert;
