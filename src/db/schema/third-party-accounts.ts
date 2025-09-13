import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { thirdPartyAccountStatus, thirdPartyAccountType } from "./enums";

export const thirdPartyAccounts = sqliteTable("third_party_accounts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userName: text("userName").notNull(),
  password: text("password").notNull(),
  orderDate: text("orderDate"),
  status: text("status", { enum: thirdPartyAccountStatus }).notNull(),
  accountType: text("accountType", { enum: thirdPartyAccountType }),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type ThirdPartyAccount = typeof thirdPartyAccounts.$inferSelect;
export type NewThirdPartyAccount = typeof thirdPartyAccounts.$inferInsert;
