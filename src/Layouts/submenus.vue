<template>
  <Submenu :name="menuInfo.key">
    <template slot="title">
        <Icon :type="menuInfo.icon" />
        {{menuInfo.label}}
    </template>
    <template v-for="option in menuInfo.children">
      <MenuItem 
        v-if="!option.children"
        :key="option.key"
        :name="option.key">
        <Icon :type="option.icon" />
        {{option.label}}
      </MenuItem>
      <submenus v-else :key="option.key" :menuInfo="option"></submenus>
    </template>
</Submenu>
</template>

<script>
import { Menu } from "view-design";
export default {
  name: 'submenus',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    },
  }

}
</script>

<style>

</style>