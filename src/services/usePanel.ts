import { useQuery } from "@tanstack/vue-query";
import { ComputedRef } from "vue";

const getPanel = (panelId: string) => async () => {
  try {
    const response = await fetch(`/panel/${panelId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
export const usePanel = (panelId: string, enabled: ComputedRef<boolean>) => {
  return useQuery({
    queryKey: ["panel", panelId],
    queryFn: getPanel(panelId),
    enabled,
  });
};
