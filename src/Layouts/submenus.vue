<template>
  <Submenu :name="menuInfo.index">
    <template slot="title">
        <Icon v-if="menuInfo.meta.icon" :type="menuInfo.meta.icon" />
        {{menuInfo.label}}
    </template>
    <template v-for="option in menuInfo.children">
      <MenuItem
        :to="option.path"
        v-if="!option.children"
        :key="option.index"
        :name="option.index">
        <!-- <Icon :type="option.meta.icon" /> -->
        {{option.label}}
      </MenuItem>
      <submenus v-else :key="option.index" :menuInfo="option"></submenus>
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