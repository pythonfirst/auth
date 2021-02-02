<template>
  <div>compoent C</div>
</template>

<script>
export default {
  name: 'C',
  created() {
    console.log('=====directive created C=====')
  },
  mounted() {
    console.log('=====directive mounted C=====')
  },
  beforeDestroy() {
    console.log('=====directive beforeDetroy C=====')
  },
  destroyed() {
    console.log('=====directive destroyed C=====')
  },
}
</script>

<style>

</style>