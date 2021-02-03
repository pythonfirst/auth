/**
 * 从服务端获取用户权限
 */
export function getCurrentAuthority() {
  return ['dashboard', 'dashboard_analysis', 'dashboard_chart', 'dashboard_chart_column', 'auth', 'auth_directive', 'auth_component']
}

/**
 * 
 * @param {String} key 路由权限key值
 */
export function check(key) {
  const current = getCurrentAuthority(); // 真实项目放到vuex中
  if (key) {
    return current.includes(key);
  } else {
    return true
  }
}

/**
 * 判断用户是否登陆
 */
export function isLogin() {
  // const current = getCurrentAuthority();
  // return current && current[0] !== 'guest'
  return true
  
}