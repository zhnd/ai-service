import { User } from "../../schema/users";

export interface ListUsersInput {
  pageIndex: number;
  pageSize: number;
  name?: string;
}

export interface ListUsersOutput {
  data: User[];
  pagination: {
    pageIndex: number;
    pageSize: number;
    total: number;
  };
}
