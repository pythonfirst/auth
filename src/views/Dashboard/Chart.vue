<template>
  <div>chart page</div>
</template>

<script>
export default {
  name: 'chart',
  created() {
  console.log('===== created chart=====')
  },
  mounted() {
    console.log('===== mounted chart=====')
  },
  beforeDestroy() {
    console.log('===== beforeDetroy chart=====')
  },
  destroyed() {
    console.log('===== destroyed chart=====')
  },
  activated() {
    console.log('===== activated chart=====')
  },
  deactivated() {
    console.log('===== deactivated chart=====')
  },
};
</script>

<style>

</style>
