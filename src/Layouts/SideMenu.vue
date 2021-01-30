<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" width="auto" :open-names="['1']" :style="{ height: '100%'}">
      <template
        v-for="option in menus"
      >
        <MenuItem
          v-if="!option.children"
          :key="option.key"
          :name="option.key">
          <Icon :type="option.icon" />
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
    return {
      menus: [
        {
          key: '1',
          label: 'option1',
          icon: 'ios-navigate',
        },
        {
          key: '2',
          label: 'option2',
          icon: 'ios-navigate',
          children: [
            {
              key: '1-1',
              label: 'options1-1',
            }
          ]
        },
         {
          key: '3',
          label: 'option3',
          icon: 'ios-navigate',
          children: [
            {
              key: '3-1',
              label: 'option3-1',
              children: [
                {
                  key: '3-1-1',
                  label: 'option3-1-1',
                }
              ]
            }
          ]
        }
      ]
    }
  }

};
</script>

<style>

</style>
