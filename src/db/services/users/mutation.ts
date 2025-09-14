"use server";

import { getDb } from "@/db";
import { NewUser, users } from "@/db/schema/users";

export async function createUser(newUserInput: NewUser) {
  const db = await getDb();
  await db.insert(users).values(newUserInput);
}
