import { relations } from "drizzle-orm";
import { ApiHostOrders } from "./api-host-orders";
import { apiHosts } from "./hosts";
import { serviceInstances } from "./service-instances";
import { serviceInstanceUsers } from "./service_instance_users";
import { userOrders } from "./user-orders";
import { users } from "./users";

export const userOrdersRelations = relations(userOrders, ({ one }) => ({
  user: one(users, {
    fields: [userOrders.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  serviceInstances: many(serviceInstanceUsers),
}));

export const hostOrdersRelations = relations(ApiHostOrders, ({ one }) => ({
  apiHost: one(apiHosts, {
    fields: [ApiHostOrders.apiHostId],
    references: [apiHosts.id],
  }),
}));

export const serviceInstanceUsersCrossRelations = relations(
  serviceInstanceUsers,
  ({ one }) => ({
    serviceInstance: one(serviceInstances, {
      fields: [serviceInstanceUsers.serviceInstanceId],
      references: [serviceInstances.id],
    }),
  })
);

export const apiHostsRelations = relations(apiHosts, ({ many }) => ({
  serviceInstances: many(serviceInstances),
}));

export const serviceInstancesRelations = relations(
  serviceInstances,
  ({ one, many }) => ({
    apiHost: one(apiHosts, {
      fields: [serviceInstances.apiHostId],
      references: [apiHosts.id],
    }),
    users: many(serviceInstanceUsers),
  })
);
