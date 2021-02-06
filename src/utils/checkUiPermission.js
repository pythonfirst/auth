/**
 * 从服务端获取用户权限
 */
export function getCurrentAuthority() {
  return 1|2|4|8|16|32|64|128
}


export function check(key) {
  if (key === undefined) return true;
  const currentAuthority = getCurrentAuthority();
  return currentAuthority & key;
}

