export type WidgetType = "PIE_CHART" | "TABLE" | "GRID";

export type Widget = {
  panelId: number,
  panelVer: number,
  panelType: WidgetType,
  panelName: string,
}

