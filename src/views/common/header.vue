<template>
  <div class="layout">
    <Row type="flex"
         justify="center"
         class="header">
      <Col span="15">
      <router-link to="/"
                   tag="div"
                   class="logo">
      </router-link>
      <div class="nav-bar">
        <ul>
          <li>
            <a href="">产品中心
              <i class="bg-hover"></i>
            </a>
          </li>
          <li>
            <a href="">wiki文档
              <i class="bg-hover"></i>
            </a>
          </li>
          <li>
            <a href="">下载固件
              <i class="bg-hover"></i>
            </a>
          </li>
          <li>
            <a href="">产品中心
              <i class="bg-hover"></i>
            </a>
          </li>
          <li>
            <a href="">产品中心
              <i class="bg-hover"></i>
            </a>
          </li>
        </ul>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'common-header'
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.header
  background-color transparent
  height 80px
  line-height 80px
  .logo
    float left
    margin-top 10px
    margin-bottom 10px
    width 50px
    height 60px
    bg-image('./nav_logo-t')
    background-size 50px 60px
  .nav-bar
    float left
    margin-left 30px
    ul
      overflow hidden
      li
        float left
        a
          display block
          width 100%
          height 100%
          font-size 14px
          padding 0 20px
          position relative
          i.bg-hover
            position absolute
            top 0
            left 50%
            width 0
            height 100%
            margin-left 0
            background-color #000
            opacity 0.1
        &:hover
          a
            color $color-theme
            z-index 10
            i.bg-hover
              -webkit-transition all 0.33s linear 0s
              margin-left -50% /* ->50% */
              width 100% /* ->100% */
</style>
