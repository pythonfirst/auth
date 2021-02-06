<template>
  <div>
    <Authorized :permission="PERMISSION.authC">
      <C></C>
    </Authorized>
    <D></D>
  </div>
</template>

<script>
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import { PERMISSION } from '../../const/permission';
export default {
  components: { A, B, C, D},
}
</script>

<style>

</style>