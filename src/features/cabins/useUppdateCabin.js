import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUppdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUppdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: uppdateCabin, isLoading: isUppdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUppdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUppdating, uppdateCabin };
}
