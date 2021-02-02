import { check } from "../utils/auth";

/**
 *
 * @param {binding.value 指令参数传入的需要的权限} Vue
 */
function install(Vue) {
  Vue.directive("permission", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
