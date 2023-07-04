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
export type TableData = {
  columns: TableColumns,
  rows: TableRows,
  [key: string]: any,
};
