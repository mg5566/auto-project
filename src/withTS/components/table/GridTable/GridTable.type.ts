import { WidgetBase } from "../../Widget/WidgetList.type";
import { ColumnBase } from "../../charts/PieChart.type";

// Type 정의
export type TableColumns = ColumnBase[];
export type TableRows = {
  [key: string]: string;
}[];
export interface TableData extends WidgetBase {
  panelType: 'TABLE' | 'GRID',
  columns: TableColumns,
  rows: TableRows,
  [key: string]: any,
};
