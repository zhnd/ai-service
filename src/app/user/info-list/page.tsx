"use client";

import { DataTable } from "@/components/data-table";
import { User } from "@/db/schema/users";
import { ColumnDef } from "@tanstack/react-table";
import { CreateUser } from "./_components/create";
import { UserSearch } from "./_components/search";
import { useInfoListService } from "./use-service";

export default function Page() {
  const service = useInfoListService();

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "key",
      header: "Key",
    },
    {
      accessorKey: "createdAt",
      header: "CreatedAt",
    },
    {
      accessorKey: "updatedAt",
      header: "UpdatedAt",
    },
  ];

  return (
    <>
      <UserSearch
        openCreateDialog={service.toggleCreateDialog}
        searchUsers={service.searchUsers}
      />
      <DataTable
        rowCount={service.data?.pagination.total ?? 0}
        columns={columns}
        data={service.data?.data ?? []}
        paginationState={service.listParams}
        onPaginationChange={service.onPaginationChange}
      />
      <CreateUser
        dialogOpen={service.createDialogOpen}
        toggleCreateDialog={service.toggleCreateDialog}
      />
    </>
  );
}
