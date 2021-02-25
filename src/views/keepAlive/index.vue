<template>
  <div>
    <keep-alive include="keepAliveComponent">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'keep-alives'
}
</script>

<style>

</style>