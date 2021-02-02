<template>
  <div>compoent D</div>
</template>

<script>
export default {
  name: 'D',
  created() {
    console.log('=====render component created D=====')
  },
  mounted() {
    console.log('=====render component mounted D=====')
  },
  beforeDestroy() {
    console.log('=====render component beforeDetroy D=====')
  },
  destroyed() {
    console.log('=====render component destroyed D=====')
  },
}
</script>

<style>

</style>