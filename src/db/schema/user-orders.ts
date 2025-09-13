import { sql } from "drizzle-orm";
import { real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userOrders = sqliteTable("user_orders", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  price: real("price").notNull(),
  orderDate: text("orderDate").notNull(),
  refund: real("refund").notNull(),
  startTime: text("startTime").notNull(),
  endTime: text("endTime").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  userId: text("userId").notNull(),
});

export type UserOrder = typeof userOrders.$inferSelect;
export type NewUserOrder = typeof userOrders.$inferInsert;
