import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { ComputedRef } from "vue";
import { WidgetData } from "../withTS/components/Widget/WidgetList.type";

const getPanel = async (panelId: string) => {
  try {
    const response = await axios.get<WidgetData>(`/panel/${panelId}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const usePanel = (panelId: string, enabled: ComputedRef<boolean>) => {
  return useQuery({
    queryKey: ["panel", panelId],
    queryFn: () => getPanel(panelId),
    enabled,
  });
};
