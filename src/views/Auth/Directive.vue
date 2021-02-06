<template>
  <div>
    <A v-permission="key"></A>
    <B></B>
  </div>
</template>

<script>
import A from './components/A';
import B from './components/B';
import { PERMISSIONS } from '../../const/permission';
export default {
  components: { A, B},
  data() {
    return {
      key: PERMISSIONS.authA,
    }
  },
}
</script>

<style>

</style>