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

export type LineChartColumns = ColumnBase[];

export type LineChartRows = {
  name: string,
  data: number[],
}[];

export interface LineChartData extends WidgetBase {
  panelType: "LINE_CHART",
  columns: LineChartColumns,
  rows: LineChartRows,
  [key: string]: any,
}
