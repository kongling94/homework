<template>
  <div class="layout header">
    <!-- header版心 -->
    <Row type="flex"
         justify="center"
         class="container">
      <!-- 左侧logo -->
      <Col span="2"
           class="logo">
      <router-link to="/"
                   tag="div">
      </router-link>
      </Col>
      <!-- 中间nav-bar主体 -->
      <Col span="16"
           class="nav-bar">
      <div>
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
      <!-- 右侧login功能区 -->
      <Col span="6"
           class="login">
      <ul>
        <li>登陆</li>
        <li>购物车</li>
        <li>搜索</li>
        <li>语言</li>
      </ul>
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
  border-bottom 1px solid #dadada
  box-shadow 0 2px 4px rgba(0, 0, 0, 0.04)
  background-image linear-gradient(#fff, #f1f1f1)
  color #6c6c6c
  .container
    width 1200px
    margin 0 auto
    background-color transparent
    height 80px
    line-height 80px
    // background-color $color-theme
    padding 0 20px
    font-size 14px
    .logo
      margin-top 10px
      margin-bottom 10px
      width 50px
      height 60px
      bg-image('./nav_logo-t')
      background-size 50px 60px
    .nav-bar
      margin-left 30px
      ul
        overflow hidden
        li
          float left
          a
            display block
            color #6c6c6c
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
    .login
      ul
        li
          float left
          width 25%
</style>
