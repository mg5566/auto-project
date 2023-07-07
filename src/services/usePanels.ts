import { useQuery } from "@tanstack/vue-query";
import { ComputedRef } from "vue";

const getPanels = async () => {
  try {
    const response = await fetch("/panels");
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
export const usePanels = (enabled: ComputedRef<boolean>) => {
  return useQuery({
    queryKey: ["panels"],
    queryFn: getPanels,
    enabled,
  })
};
