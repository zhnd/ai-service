export interface UserSearchProps {
  openCreateDialog: () => void;
  searchUsers: (data: { name: string }) => void;
}
