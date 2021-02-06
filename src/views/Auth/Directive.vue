<template>
  <div>
    <A v-permission="key"></A>
    <B></B>
    <!-- todo: 引入多层多个组件 -->
  </div>
</template>

<script>
import A from './components/A';
import B from './components/B';
import C from './components/C';
import { PERMISSIONS } from '../../const/permission';
export default {
  components: { A, B, C},
  data() {
    return {
      key: PERMISSIONS.authA,
    }
  },
}
</script>

<style>

</style>