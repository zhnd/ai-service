import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const apiHosts = sqliteTable("api_hosts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull().unique(),
  ip: text("ip").notNull().unique(),
  domainName: text("domainName").notNull().unique(),
  sshPort: integer("sshPort").notNull(),
  sshPassword: text("sshPassword").notNull(),
  orderDate: text("orderDate").notNull(),
  dueDate: text("DueDate").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type ApiHost = typeof apiHosts.$inferSelect;
export type NewApiHost = typeof apiHosts.$inferInsert;

