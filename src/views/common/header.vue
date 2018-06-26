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
          <div class="hidden-md-and-down">
            <ul class="nav-list">
              <li v-for="(item,index) in getHeader"
                  :key="index">
                <a :href="item.navhref"
                   :data-panel="'#headernav'+index">{{item.navname}}
                  <i class="bg-hover"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="nav-bar-btn hidden-lg-and-up">
            <i class="el-icon-menu"
               style="color:red"></i>
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
      <div v-for="(item,index) in getHeader"
           :key="index"
           :id="'headernav'+index"
           class="isNone panel"
           v-if="item.nav_son.length != 0">
        <div class="panel-container">
          <div class="wikiheader-lists"
               v-for="(val,key) in item.nav_son"
               :key="key">
            <div class="title"
                 v-text="val.sec_navname"></div>
            <ul v-if="val.sec_navname === '开源 · 行业主板'"
                class="list-item aio">
              <li v-for="(son,index) in val.sec_nav_son"
                  :key="index">
                <a :href="son.goods_link"
                   v-text="son.name"></a>
              </li>
            </ul>
            <ul v-else
                class="list-item">
              <li v-for="(son,index) in val.sec_nav_son"
                  :key="index">
                <a :href="son.goods_link"
                   v-text="son.name"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else></div>
    </div>
    <div class="slider-menu hidden-lg-and-up">
      <i class="el-icon-close close"></i>
      <div class="menu-content"></div>
    </div>

    <!-- <wiki-header id="headernav2"
                 class="isNone"></wiki-header> -->
  </div>
  </div>
</template>
<script>
import wikiHeader from './wiki-header'
// import ProHeader from './product-header'
export default {
  name: 'common-header',
  props: [
    'headerNav'
  ],
  data () {
    return {
      isHeaderFixed: false
    }
  },
  components: {
    wikiHeader
    // ProHeader
  },
  computed: {
    getHeader () {
      if (this.headerNav !== 'undefined') {
        const headerList = this.headerNav.navmenu
        // console.log(headerList)
        return headerList
      }
    }
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
      let panel = $('.header-panel') // panel容器
      let activeTarget
      let activeMenu
      let timer
      let mouseInPanel = false
      panel.on('mouseenter', function (e) {
        mouseInPanel = true
        // console.log('1:' + mouseIn)
      }).on('mouseleave', function (e) {
        mouseInPanel = false
        if (activeMenu) {
          activeMenu.removeClass('isShow')
          activeMenu.addClass('isNone')
        }
        panel.hide()
      })
      $('.nav-bar').on('mouseenter', function (e) {
        panel.show()
      })
        .on('mouseenter', 'li', function (e) {
          // 如果当前没有展开的列表
          if (!activeMenu) {
            activeTarget = $(e.target)
            activeMenu = $(activeTarget.attr('data-panel'))
            activeMenu.removeClass('isNone')
            activeMenu.addClass('isShow')
          }
          // 如果当前存在定时器
          if (timer) {
            clearTimeout(timer)
          }

          timer = setTimeout(function () {
            if (mouseInPanel) {
              return
            }
            activeMenu.removeClass('isShow')
            activeMenu.addClass('isNone')
            activeMenu = null
            activeTarget = $(e.target)
            activeMenu = $(activeTarget.attr('data-panel'))
            activeMenu.removeClass('isNone')
            activeMenu.addClass('isShow')
          }, 200)
        })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handelHeaderFixed)
    this.isShowPanelList()
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
  // position relative
  // padding: 0;
  .header-nav
    color #fff
    z-index 2100
    position relative
    top 0
    left 0
    width 100%
    background-color #fff
    // transform translate3d(0, -60px, 0)
    .container
      margin 0 auto
      background-color transparent
      height 78px
      line-height 78px
      // background-color $color-theme
      // padding 0 20px
      font-size 14px
      .logo
        // margin-top: 5px;
        // margin-bottom 50px
        width 78px
        height 78px
        background url('./nlogo@2x.png') no-repeat center
        background-size 78px 78px
      .nav-bar
        margin-left 30px
        .nav-list
          overflow hidden
          li
            float left
            position relative
            a
              display block
              box-sizing border-box
              color #666
              width 100%
              height 100%
              font-size 14px
              padding 0 20px
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
                color #ff6600
                z-index 10
                i.bg-hover
                  -webkit-transition all 0.3s ease-out
                  margin-left -50% /* ->50% */
                  width 100% /* ->100% */
        .nav-bar-btn
          text-align right
          overflow hidden
          i
            font-size 24px
            line-height 78px
            color #555
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
      position relative
      box-shadow 0 2px 4px rgba(0, 0, 0, 0.04)
      background-image #ccc
      transition background-image 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s, transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)
  .header-panel
    z-index 2099
    height 230px
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    >.panel.isNone
      opacity 0
      visibility hidden
      // display none
      background-color #f0f0f0
      box-sizing border-box
      transform translate3d(0, -230px, 0)
      transition all 0.3s ease-out
    >.panel.isShow
      visibility visible
      // display block
      opacity 1
      background-color #f0f0f0
      box-sizing border-box
      // padding-top: 70px;
      transform translate3d(0, 70px, 0)
      transition all 0.3s ease-out
      box-shadow inset 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.16)
    .panel
      background-color #f0f0f0
      box-sizing border-box
      position absolute
      top 0
      left 0
      right 0
      .panel-container
        box-sizing border-box
        // width 1200px
        // height 100%
        margin 0 auto
        padding 30px 0
        padding-left 115px
        text-align left
        position relative
        .wikiheader-lists
          float left
          margin-right 50px
          .title
            font-size 14px
            color #3c3c3c
            position relative
            margin-bottom 18px
            &::before
              content ''
              position absolute
              top 0
              left -7px
              width 2px
              height 14px
              line-height 1rem
              background-color #ff6600
          .list-item
            li
              margin-bottom 12px
              a
                font-size 12px
                color #666
                &:hover
                  color #ff6600
          &:last-child
            margin-right 0
          .list-item.aio
            max-width 184px
            li
              &:nth-child(-n+8)
                display inline-block
                &:nth-child(even)
                  padding-left 22px
  .slider-menu
    max-width 400px
    position fixed
    top 0
    right 0
    width 100%
    height 600px
    background-color rgba(255, 255, 255, 0.9)
    z-index 2200
    transition all 0.3s ease 0s
    .close
      position absolute
      right 10px
      top 15px
      font-size 24px
    .menu-content
      padding 50px 30px
      width 100%
      height 100%
      box-sizing border-box
      position absolute
      top 0
      margin-bottom 0
      pointer-events auto
      // background-color rgba(0, 0, 0, 0)
@media screen and (min-width: 1200px)
  .container, .panel-container
    width 1200px
@media screen and (max-width: 1200px)
  .container, .panel-container
    width 95%
</style>
