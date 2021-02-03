<template>
  <div>
    <A v-permission="'dashboard_analysis='"></A>
    <B></B>
    <!-- todo: 引入多层多个组件 -->
  </div>
</template>

<script>
import A from './components/A'
import B from './components/B'
import C from './components/C'
export default {
  components: { A, B, C}
}
</script>

<style>

</style>