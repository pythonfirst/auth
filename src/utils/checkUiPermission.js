/**
 * 从服务端获取用户权限
 */
export function getCurrentAuthority() {
  return [1|2|4|8|16|32|64|128 ];
}

/**
 * 判断是否有权限
 * @param {Array} key 功能点的权限标识
 */
export function check(key) {
  if (key === undefined) return true;
  const currentAuthority = getCurrentAuthority();
  // console.log('key', key, currentAuthority);
  return (currentAuthority[key[0]] & key[1]) === key[1];
}

/**
 * 判断用户是否登陆
 */
export function isLogin() {
  // const current = getCurrentAuthority();
  // return current && current[0] !== 'guest'
  return true
  
}