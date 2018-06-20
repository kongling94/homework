<template>
  <div id="app">
    <Header></Header>
    <Swiper></Swiper>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'views/common/header'
import Swiper from 'views/common/swiper'
import Footer from 'views/common/footer'
export default {
  name: 'App',
  components: {
    Header,
    Swiper,
    Footer
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
</style>
