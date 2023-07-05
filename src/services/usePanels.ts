import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { ComputedRef } from "vue";

const getPanels = async () => {
  try {
    const response = await axios.get("/panels");
    console.log('response', response);
    return response.data();
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
