<template>
  <div class="header">
    <div class="header-nav"
         :class="{isFixed:isHeaderFixed}"
         ref="headerNav">
      <!-- header版心 -->
      <el-row type="flex"
              justify="center"
              class="container">
        <!-- 左侧logo -->
        <el-col :span="2"
                class="logo">
          <router-link to="/"
                       tag="div">
          </router-link>
        </el-col>
        <!-- 中间nav-bar主体 -->
        <el-col :span="18"
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
              <li data-panel="#wiki-header">
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
        </el-col>
        <!-- 右侧login功能区 -->
        <el-col :span="4"
                class="login">
          <ul>
            <li>
              <i class="el-icon-search"></i>
            </li>
            <li>
              <i class="el-icon-info"></i>
            </li>
            <li>
              <i class="el-icon-goods"></i>
            </li>
            <li>
              <i class="el-icon-more"></i>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="header-panel">
      <!-- <pro-header></pro-header> -->
      <wiki-header id="wiki-header"></wiki-header>
    </div>
  </div>
</template>
<script>
import wikiHeader from './wiki-header'
// import ProHeader from './product-header'
export default {
  name: 'common-header',
  data () {
    return {
      isHeaderFixed: false
    }
  },
  components: {
    wikiHeader
    // ProHeader
  },
  methods: {
    handelHeaderFixed () {
      // 页面卷曲高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 顶部导航自身高度
      let offsetHeight = this.$refs.headerNav.clientHeight
      if (scrollTop > offsetHeight) {
        this.isHeaderFixed = true
        return
      }
      this.isHeaderFixed = false
    },
    isShowPanelList () {
      $('.nav-list li').bind('mouseover', function (e) {
        if ($(this).attr('data-panel') === 'undefined') {
          return
        }
        let target = $(this).attr('data-panel')
        $(target).addClass('isShow')
      })
    },
    isHidePanelList () {
      $('.nav-list li').bind('mouseout', function (e) {
        if ($(this).attr('data-panel') === 'undefined') {
          return
        }
        let target = $(this).attr('data-panel')
        $(target).removeClass('isShow')
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handelHeaderFixed)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handelHeaderFixed)
  }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.header
  // overflow hidden
  padding 0
  .header-nav
    color #fff
    z-index 100
    position fixed
    width 100%
    font-size 0
    // transform translate3d(0, -60px, 0)
    .container
      width 1200px
      margin 0 auto
      background-color transparent
      height 70px
      line-height 70px
      // background-color $color-theme
      // padding 0 20px
      font-size 14px
      .logo
        margin-top 5px
        margin-bottom 50px
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
              box-sizing border-box
              color #fff
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
                background-color #fff
                opacity 0.25
            &:hover
              a
                color #fff
                z-index 10
                i.bg-hover
                  -webkit-transition all 0.3s ease-out
                  margin-left -50% /* ->50% */
                  width 100% /* ->100% */
      .login
        ul
          li
            float left
            width 25%
            line-height 70px
            // &:first-child
            // width 40%
    &.isFixed
      // border-bottom 1px solid #dadada
      // transform translate3d(0, 0px, 0)
      box-shadow 0 2px 4px rgba(0, 0, 0, 0.04)
      background-image linear-gradient(#ff9800, #ff6600)
      transition background-image 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s, transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)
  .header-panel
    // display none
    >div
      position absolute
      opacity 0
      visibility hidden
      transform translate3d(0, -230px, 0)
      transition all 0.3s ease
    .isShow
      opacity 1
      position fixed
      z-index 100
      top 0
      left 0
      right 0
      bottom 0
      visibility visible
      box-shadow inset 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.16)
      transform translate3d(0, 70px, 0)
      transition all 0.3s ease
</style>
