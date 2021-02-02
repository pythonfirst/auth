<template>
  <div>
    <Authorized :role="'dashboard_analysis='">
      <C></C>
    </Authorized>
    <D></D>
  </div>
</template>

<script>
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
export default {
  components: { A, B, C, D}
}
</script>

<style>

</style>