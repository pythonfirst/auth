const PERMISSIONS = {
  /**
   * [index, key]
   * index代表权限空间
   * key代表功能点权限值，只能有一位为1.
   * key 值满32位进1
   */
  
  // dashboard
  dashboard: [0,0],
  dashboardAnalysis: [0, 1],
  dashboardChart: [0, 2],
  dashboardChartColumn: [0, 4],

  // auth
  auth: [0, 8],
  authDirective: [0, 16],
  authComponent: [0, 32],
  authC: [0, 64],
  authA: [0, 128],
}