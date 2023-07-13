import { WidgetBase } from "../Widget/WidgetList.type";

export type PieChartColumns = {
  label: string,
  prop: null,
  align: null,
  width: null,
  value: "CAR1",
  type: null,
  backgroundColor: null
}[];

export type PieChartRows = {
  name: string,
  data: number,
}[];

export interface PieChartData extends WidgetBase {
  panelType: "PIE_CHART",
  columns: PieChartColumns,
  rows: PieChartRows,
  [key: string]: any,
}
