import { CreateButton } from "@/components/buttons";
import { Input } from "@/components/ui/input";
import { UserSearchProps } from "./types";
import { useUserSearchService } from "./use-service";

export function UserSearch(props: UserSearchProps) {
  const service = useUserSearchService(props);
  return (
    <div className="pb-2 flex justify-between items-center">
      <Input
        placeholder="Filter users..."
        className="max-w-sm"
        onChange={service.handleSearchQueryStringOnChange}
      />
      <CreateButton onClick={service.openCreateDialog} />
    </div>
  );
}
