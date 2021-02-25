<template>
  <div>keep alive compoent A</div>
</template>

<script>
export default {
  name: 'A',
  created() {
    console.log('=====keep alive created A=====')
  },
  mounted() {
    console.log('=====keep alive mounted A=====')
  },
  beforeDestroy() {
    console.log('=====keep alive beforeDetroy A=====')
  },
  destroyed() {
    console.log('=====keep alive destroyed A=====')
  },
  activated() {
    console.log('=====keep alive activated A=====')
  },
  deactivated() {
    console.log('=====keep alive deactivated A=====')
  },
}
</script>

<style>

</style>