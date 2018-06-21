<template>
  <div id="app">
    <Header></Header>
    <Swiper></Swiper>
    <Advertise></Advertise>
    <!-- <img src="./assets/logo.png"> -->
    <Wiki></Wiki>
    <!-- <router-view/> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'views/common/header'
import Advertise from 'views/common/advertise'
import Swiper from 'views/common/swiper'
import Footer from 'views/common/footer'
import Wiki from 'views/Wiki/wiki'
export default {
  name: 'App',
  components: {
    Header,
    Swiper,
    Footer,
    Wiki,
    Advertise
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  .el-main
    padding 0
</style>
