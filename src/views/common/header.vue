<template>
  <div class="header">
    <div class="layout header-nav">
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
          <ul class="nav-list">
            <li>
              <a href="">产品中心
                <i class="bg-hover"></i>
              </a>
            </li>
            <li>
              <a href="">解决方案
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
              <a href="">新闻中心
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
          <li>
            <Button type="ghost"
                    shape="circle"
                    icon="ios-search">Search</Button>
          </li>
          <li>
            <Icon type="person"
                  size="20"></Icon>
          </li>
          <li>
            <Icon type="ios-cart-outline"
                  size="20"></Icon>
          </li>
          <li>
            <Icon type="ios-world-outline"
                  size="20"></Icon>
          </li>
        </ul>
        </Col>
      </Row>
    </div>
    <div class="header-panel">
      <pro-header></pro-header>
      <wiki-header></wiki-header>
    </div>
  </div>
</template>
<script>
import wikiHeader from './wiki-header'
import ProHeader from './product-header'
export default {
  name: 'common-header',
  components: {
    wikiHeader,
    ProHeader
  }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.header
  // overflow hidden
  .header-nav
    border-bottom 1px solid #dadada
    box-shadow 0 2px 4px rgba(0, 0, 0, 0.04)
    background-image linear-gradient(#fff, #f1f1f1)
    color #6c6c6c
    z-index 100
    position fixed
    width 100%
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
        .nav-list
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
                  -webkit-transition all 0.3s ease-out
                  margin-left -50% /* ->50% */
                  width 100% /* ->100% */
      .login
        ul
          li
            float left
            width 20%
            line-height 80px
            &:first-child
              width 40%
  .header-panel
    // display none
    position absolute
    opacity 0
    visibility hidden
    transform translate3d(0, -230px, 0)
    transition all 0.3s ease
&.active
  .header-nav
    box-shadow none
  .header-panel
    opacity 1
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    visibility visible
    box-shadow inset 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.16)
    transform translate3d(0, 80px, 0)
    transition all 0.3s ease
</style>
