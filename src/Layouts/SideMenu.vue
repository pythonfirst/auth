<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" width="auto" :open-names="[]" :style="{ height: '100%'}">
      <template
        v-for="option in menuList"
      >
        <MenuItem
          v-if="!option.children"
          :key="option.index"
          :name="option.index"
          :to="option.path"
          >
          <Icon :type="option.meta.icon" />
          {{option.label}}
        </MenuItem>
        <submenus v-else :key="option.key" :menuInfo="option"></submenus>
      </template>
    </Menu>
</Sider>
</template>

<script>
import { check } from '../utils/checkUiPermission';
import submenus from './submenus';
export default {
  name: 'SideMenu',
  components: {
    submenus,
  },
  data() {
    const menuList = this.getMenuList(this.$router.options.routes);
    return {
      menuList,
    }
  },
  methods: {
    /**
     * 
     * @param {Array} routes 路由表
     * @param {} key 生成memu-item的name值
     */
    getMenuList(routes, i='') {
      let menuList = [];
      routes.forEach((route, index) => {
        // 存在name && 没有设置隐藏 && 权限检测 （如果没有设置key默认不需要权限
        if (route.name && !route.hiddenInMenu && check(route?.meta?.key)) {
          const newRoute = {...route}
          newRoute.index = i ? `${i}-${index}` : `${index}`;  // menuitem 的key/name
          if (newRoute.children) {
            delete newRoute.children;
            newRoute.children = this.getMenuList(route.children, newRoute.index);
          }
          menuList.push(newRoute)
        } else if (!route.name && !route.hiddenInMenu && route.children && check(route?.meta?.key)) {
          menuList.push(...this.getMenuList(route.children));
        }
      });
      // console.log('menuList', menuList);
      return menuList
    }
  },
};
</script>

<style>

</style>
