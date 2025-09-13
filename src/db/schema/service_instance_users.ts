import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const serviceInstanceUsers = sqliteTable(
  "service_instance_users",
  {
    serviceInstanceId: text("service_instance_id").notNull(),
    userId: text("user_id").notNull(),
  },
  (table) => [
    index("service_instance_users_unique").on(
      table.serviceInstanceId,
      table.userId
    ),
    index("service_instance_users_user_index").on(table.userId),
  ]
);

export type ServiceInstance = typeof serviceInstanceUsers.$inferSelect;
export type NewServiceInstance = typeof serviceInstanceUsers.$inferInsert;
