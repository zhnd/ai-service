import { createUser } from "@/db/services/users/mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateUserProps } from "./types";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
type FormValues = z.infer<typeof formSchema>;

export const useCreateUserService = (props: CreateUserProps) => {
  const { toggleCreateDialog } = props;
  const queryClient = useQueryClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "InfoList"] });
      toggleCreateDialog();
      form.reset();
    },
  });

  const onSubmit = async (values: FormValues) => {
    mutation.mutate({
      name: values.name,
    });
  };

  return {
    form,
    onSubmit,
  };
};
