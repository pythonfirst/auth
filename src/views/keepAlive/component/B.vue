<template>
  <div>keep alive compoent B</div>
</template>

<script>
export default {
  name: 'B',
  created() {
    console.log('=====keep alive default created B====')
  },
  mounted() {
    console.log('=====keep alive default mounted B====')
  },
  beforeDestroy() {
    console.log('=====keep alive default beforeDetroy B====')
  },
  destroyed() {
    console.log('=====keep alive default destroyed B====')
  },
  activated() {
    console.log('=====keep alive default activated B====')
  },
  deactivated() {
    console.log('=====keep alive default deactivated B====')
  },
}
</script>

<style>

</style>