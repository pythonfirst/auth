<template>
  <div>compoent B</div>
</template>

<script>
export default {
  name: 'B',
  created() {
    console.log('=====directive created B=====')
  },
  mounted() {
    console.log('=====directive mounted B=====')
  },
  beforeDestroy() {
    console.log('=====directive beforeDetroy B=====')
  },
  destroyed() {
    console.log('=====directive destroyed B=====')
  },
}
</script>

<style>

</style>