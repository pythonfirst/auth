/**
 * 从服务端获取用户权限
 */
export function getCurrentAuthority() {
  return ['dashboard', 'dashboard_analysis', 'dashboard_chart', 'auth', 'auth_directive']
}

/**
 * 
 * @param {Array} authority 服务端返回的用户角色
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
  const current = getCurrentAuthority();
  return current && current[0] !== 'guest'
  
}