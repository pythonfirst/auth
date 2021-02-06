<template>
  <div>
    <A v-permission="PERMISSION.authA"></A>
    <B></B>
    <!-- todo: 引入多层多个组件 -->
  </div>
</template>

<script>
import A from './components/A';
import B from './components/B';
import C from './components/C';
import { PERMISSION } from '../../const/permission';
export default {
  components: { A, B, C}
}
</script>

<style>

</style>