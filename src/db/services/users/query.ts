"use server";
import { and, like, type SQL } from "drizzle-orm";
import { getDb } from "../..";
import { users } from "../../schema/users";
import { ListUsersInput, ListUsersOutput } from "./types";

export async function getUsers(
  input: ListUsersInput
): Promise<ListUsersOutput> {
  const db = await getDb();
  const { pageIndex, pageSize, name } = input;

  const conditions: SQL[] = [];
  if (name) {
    conditions.push(like(users.name, `%${name}%`));
  }

  const whereCondition = conditions.length > 0 ? and(...conditions) : undefined;

  const total = await db.$count(users, whereCondition);

  const data = await db
    .select()
    .from(users)
    .where(whereCondition)
    .limit(pageSize)
    .offset(pageIndex * pageSize)
    .orderBy(users.createdAt);

  return {
    data,
    pagination: {
      pageIndex,
      pageSize,
      total,
    },
  };
}
