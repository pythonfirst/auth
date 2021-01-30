<template>
  <div class="layout">
    <SideMenu />
    <Layout :style="{marginLeft: '200px'}">
        <Headers></Headers>
        <Content :style="{padding: '0 16px 16px'}">
          <router-view></router-view>
        </Content>
    </Layout>
  </div>
</template>
<script>
import SideMenu from './SideMenu'
import Headers from './Header'

export default {
  components: {
    SideMenu,
    Headers,
  }
    
}
</script>
<style scoped>
</style>
