<template>
  <div>compoent C</div>
</template>

<script>
export default {
  name: 'C',
  created() {
    console.log('=====render component created C=====')
  },
  mounted() {
    console.log('=====render component mounted C=====')
  },
  beforeDestroy() {
    console.log('=====render component beforeDetroy C=====')
  },
  destroyed() {
    console.log('=====render component destroyed C=====')
  },
}
</script>

<style>

</style>