import { getUsers } from "@/db/services/users/query";
import { useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";

export const useInfoListService = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [listParams, setListParams] = useState<
    PaginationState & {
      name?: string;
    }
  >({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useQuery({
    queryKey: ["user", "InfoList", listParams],
    queryFn: async () =>
      await getUsers({
        pageIndex: listParams.pageIndex,
        pageSize: listParams.pageSize,
        name: listParams.name,
      }),
  });

  const onPaginationChange = (pagination: PaginationState) => {
    setListParams((prev) => ({
      ...prev,
      pagination,
    }));
  };

  const toggleCreateDialog = () => {
    setCreateDialogOpen((prev) => !prev);
  };

  const searchUsers = (data: { name: string }) => {
    setListParams((prev) => ({
      ...prev,
      name: data.name,
    }));
  };

  return {
    createDialogOpen,
    listParams,
    data,
    onPaginationChange,
    toggleCreateDialog,
    searchUsers,
  };
};
