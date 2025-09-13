import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateUserProps } from "./types";
import { useCreateUserService } from "./use-service";

export function CreateUser(props: CreateUserProps) {
  const { dialogOpen, toggleCreateDialog } = props;
  const service = useCreateUserService(props);
  return (
    <Dialog open={dialogOpen} onOpenChange={toggleCreateDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
          <DialogDescription>
            Enter the user&apos;s info to create a new account.
          </DialogDescription>
        </DialogHeader>

        <Form {...service.form}>
          <form onSubmit={service.form.handleSubmit(service.onSubmit)}>
            <FormField
              control={service.form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="User name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex-none justify-between items-center pt-4 mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
