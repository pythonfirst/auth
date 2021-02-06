<template>
  <div>
    <Authorized :permission="key">
      <C></C>
    </Authorized>
    <D></D>
  </div>
</template>

<script>
import C from './components/C';
import D from './components/D';
import { PERMISSIONS } from '../../const/permission';
export default {
  components: { C, D},
  data() {
    return {
      key: PERMISSIONS.authC,
    }
  },
}
</script>

<style>

</style>