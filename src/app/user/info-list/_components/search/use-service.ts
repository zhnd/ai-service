import _ from "lodash";
import { ChangeEvent, useMemo } from "react";
import { UserSearchProps } from "./types";

export const useUserSearchService = (props: UserSearchProps) => {
  const { openCreateDialog, searchUsers } = props;
  const debouncedSetSearchQuery = useMemo(
    () =>
      _.debounce((value: string) => {
        searchUsers({ name: value });
      }, 500),
    [searchUsers]
  );

  const handleSearchQueryStringOnChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    debouncedSetSearchQuery(value);
  };

  return {
    openCreateDialog,
    handleSearchQueryStringOnChange,
  };
};
