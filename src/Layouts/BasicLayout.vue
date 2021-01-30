<template>
  <div class="layout">
    <SideMenu />
    <Layout :style="{marginLeft: '200px'}">
        <Headers></Headers>
        <Content :style="{padding: '0 16px 16px'}">
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
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
