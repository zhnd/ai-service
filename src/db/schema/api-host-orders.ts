import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ApiHostOrders = sqliteTable("api_host_orders", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  price: real("price").notNull(),
  refund: integer("refund", { mode: "boolean" }).notNull(),
  orderDate: text("orderDate").notNull(),
  dueDate: text("DueDate").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  apiHostId: text("apiHostId").notNull(),
});

export type ApiHostOrder = typeof ApiHostOrders.$inferSelect;
export type NewApiHostOrder = typeof ApiHostOrders.$inferInsert;
