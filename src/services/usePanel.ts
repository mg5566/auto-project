import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { ComputedRef } from "vue";
import { PieChartData } from "../withTS/components/charts/PieChart.type";
import { TableData } from "../withTS/components/table/GridTable/GridTable.type";

const getPanel = (panelId: string) => async () => {
  try {
    const response = await axios.get<PieChartData | TableData>(`/panel/${panelId}`)
    return response.data;
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
