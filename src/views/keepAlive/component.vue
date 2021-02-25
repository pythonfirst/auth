<template>
  <div>
    <keep-alive>
      <A v-if="isShow"></A>
    </keep-alive>
    <keep-alive :include="/B/">
      <B v-if="isShow"></B>
    </keep-alive>
    <Button @click="isShow=!isShow">{{isShow ? '隐藏' : '显示'}}</Button>
  </div>
</template>

<script>
import A from './component/A'
import B from './component/B'

export default {
  name: "keepAliveComponent",
  components: { A, B },
  data() {
    return {
      isShow: true,
    }
  },
  created() {
    console.log('=====created component=====')
  },
  mounted() {
    console.log('=====mounted component=====')
  },
  beforeDestroy() {
    console.log('=====beforeDetroy component=====')
  },
  destroyed() {
    console.log('=====destroyed component=====')
  },
  activated() {
    console.log('=====activated component=====')
  },
  deactivated() {
    console.log('=====deactivated component=====')
  },
}
</script>

<style>

</style>