<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" width="auto" :open-names="[]" :style="{ height: '100%'}">
      <template
        v-for="option in menuList"
      >
        <MenuItem
          v-if="!option.children"
          :key="option.index"
          :name="option.index">
          <Icon :type="option.meta.icon" />
          {{option.label}}
        </MenuItem>
        <submenus v-else :key="option.key" :menuInfo="option"></submenus>
      </template>
    </Menu>
</Sider>
</template>

<script>
import submenus from './submenus'
export default {
  name: 'SideMenu',
  components: {
    submenus,
  },
  data() {
    const menuList = this.getMenuList(this.$router.options.routes);
    return {
      menus: [
        {
          index: '1',
          label: 'option1',
          icon: 'ios-navigate',
        },
        {
          index: '2',
          label: 'option2',
          icon: 'ios-navigate',
          children: [
            {
              index: '1-1',
              label: 'options1-1',
            }
          ]
        },
        {
          index: '3',
          label: 'option3',
          icon: 'ios-navigate',
          children: [
            {
              index: '3-1',
              label: 'option3-1',
              children: [
                {
                  index: '3-1-1',
                  label: 'option3-1-1',
                }
              ]
            }
          ]
        }
      ],
      menuList,
    }
  },
  methods: {
    getMenuList(routes, key='') {
      let menuList = [];
      routes.forEach((route,index) => {
        if (route.name && !route.hiddenInMenu) {
          const newRoute = {...route}
          newRoute.index = key ? `${key}-${index}` : `${index}`;  // menuitem 的key/name
          if (newRoute.children) {
            delete newRoute.children;
            newRoute.children = this.getMenuList(route.children, index);
          }
          menuList.push(newRoute)
        } else if (!route.name && !route.hiddenInMenu && route.children) {
          menuList.push(...this.getMenuList(route.children));
        }
      });
      console.log('menuList', menuList);
      return menuList
    }
  },
};
</script>

<style>

</style>
