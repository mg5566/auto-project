import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { ComputedRef } from "vue";
import { WidgetData } from "../withTS/components/Widget/WidgetList.type";

const getPanels = async () => {
  try {
    const response = await axios.get<WidgetData[]>("/panels");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const usePanels = (enabled: ComputedRef<boolean>) => {
  return useQuery({
    queryKey: ["panels"],
    queryFn: getPanels,
    enabled,
  })
};
