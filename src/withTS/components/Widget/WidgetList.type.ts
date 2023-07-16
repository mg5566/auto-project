import { LineChartData } from "../charts/LineChart.type";
import { PieChartData } from "../charts/PieChart.type";
import { TableData } from "../table/GridTable/GridTable.type";

export type WidgetType = "LINE_CHART" | "PIE_CHART" | "TABLE" | "GRID";

export type WidgetBase = {
  panelId: string,
  panelType: WidgetType,
  panelName: string,
}

export type WidgetData = PieChartData | TableData | LineChartData;
