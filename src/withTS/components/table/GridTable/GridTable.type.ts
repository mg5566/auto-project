import { Widget } from "../../Widget/WidgetList.type";

  // Type 정의
export type TableColumns = {
  label: string,
  prop: string,
  align: string,
  width: number,
  value?: string,
  type: string,
  backgroundColor?: string
}[];
export type TableRows = {
  [key: string]: string;
}[];
export interface TableData extends Widget {
  panelType: 'TABLE' | 'GRID',
  columns: TableColumns,
  rows: TableRows,
  [key: string]: any,
};
