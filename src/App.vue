<template>
  <div id="app">
    <!--显示当前路由组件-->
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
