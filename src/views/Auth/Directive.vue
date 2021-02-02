<template>
  <div>
    v-permissions
    <A v-permission="['dashboard_analysis']"></A>
    <B></B>
    <Authorized :role="['dashboard_analysis']">
      <C></C>
    </Authorized>
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