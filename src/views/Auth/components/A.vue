<template>
  <div>compoent A</div>
</template>

<script>
export default {
  name: 'A',
  created() {
    console.log('=====directive created A=====')
  },
  mounted() {
    console.log('=====directive mounted A=====')
  },
  beforeDestroy() {
    console.log('=====directive beforeDetroy A=====')
  },
  destroyed() {
    console.log('=====directive destroyed A=====')
  },
}
</script>

<style>

</style>