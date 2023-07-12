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

export type PieChartData = {
  columns: PieChartColumns,
  rows: PieChartRows,
  [key: string]: any,
}
