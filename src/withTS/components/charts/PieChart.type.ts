import { WidgetBase } from "../Widget/WidgetList.type";

export type ColumnBase = {
  label: string,
  prop: string,
  align: string,
  width: string,
  value: string,
  type: string,
  backgroundColor?: string
}

export type PieChartColumns = ColumnBase[];

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
