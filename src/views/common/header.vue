<template>
  <!-- 1: header Start -->
  <div class="header">
    <!-- 1.1 导航条的滚动固定 -->
    <div class="header-nav"
         :class="{isFixed:isHeaderFixed}"
         ref="headerNav">
      <!--  header版心 -->
      <el-row type="flex"
              justify="center"
              class="container">
        <!-- 1.1.1: 左侧logo -->
        <el-col :span="2"
                class="logo">
          <a href='http://www.t-firefly.com/'>
          </a>
        </el-col>
        <!-- 1.1.2: 中间nav-bar主体 -->
        <el-col :span="14"
                class="nav-bar">
          <!-- 响应式: 在1200px以下隐藏 -->
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
          <!-- 响应式: 在1200px以下展示 -->
          <div class="nav-bar-btn hidden-lg-and-up">
            <i class="el-icon-menu"
               @click="handleOpen"></i>
          </div>
        </el-col>
        <!-- 1.1.3: 右侧login功能区 -->
        <el-col :span="8"
                class="login">
          <ul>
            <!-- 语言切换 -->
            <li>
              <el-dropdown placement="bottom">
                <span class="el-dropdown-link">
                  <i class="iconfont icon-language"></i> 中
                </span>
                <el-dropdown-menu slot="dropdown"
                                  class="language_dropdown">
                  <el-dropdown-item>
                    <a href="http://en.t-firefly.com/"></a>英文 / EN
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </li>
            <!-- 登陆/注册 -->
            <li v-if="!this.isLogin">
              <el-dropdown placement="bottom">
                <span class="el-dropdown-link">
                  <i class="iconfont icon-denglu"></i>
                </span>
                <el-dropdown-menu slot="dropdown"
                                  class="login_dropdown">
                  <el-dropdown-item>
                    <a href="http://account.t-firefly.com">立即登录</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="http://account.t-firefly.com">立即注册</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li v-else>
              <el-dropdown placement="bottom">
                <span class="el-dropdown-link">
                  <i class="iconfont icon-denglu"></i> {{this.userInfo.user_nickname}}
                </span>
                <el-dropdown-menu slot="dropdown"
                                  class="login_dropdown">
                  <el-dropdown-item>
                    <a href="https://store.t-firefly.com//user.php">我的账户</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="https://store.t-firefly.com//user.php?act=order_list">我的订单</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="https://store.t-firefly.com//user.php?act=address_list">收货地址</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="https://store.t-firefly.com//user.php?act=invoice_list">发票资料</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="https://store.t-firefly.com//user.php?act=bonus">我的优惠</a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="/user/index/logout.html">退出登陆</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <!-- 搜索 -->
            <li class="search">
              <div class="searchInput"
                   ref="searchInput">
                <i class="el-icon-search"
                   @click="showSearchForm"
                   ref="searchIcon">
                </i>
                <input placeholder="请输入内容"
                       v-model="keyword"
                       name="keyword"
                       @keyup.enter="submitSearch">
                </input>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <!-- 1.2: panel展开 -->
    <div class="header-panel">

      <div v-for="(item,i) in getHeader"
           :key="i"
           :id="'headernav'+i"
           class="isNone panel"
           v-if="item.nav_son.length != 0">

        <div class="panel-container"
             v-if="item.navname!= '产品中心'">
          <div class="wikiheader-lists"
               v-for="(val,key) in item.nav_son"
               :key="key">
            <div class="title"
                 v-text="val.name"></div>

            <ul v-if="val.id === 1"
                class="list-item aio">
              <li v-for="(son,son_index) in val.son"
                  :key="son_index">
                <a :href="son.href"
                   v-text="son.name"></a>
              </li>
            </ul>

            <ul v-else
                class="list-item">
              <li v-for="(son,son_index) in val.son"
                  :key="son_index">
                <a :href="son.href"
                   v-text="son.name"></a>
              </li>
            </ul>
          </div>
        </div>

        <div v-else
             class="panel-container prod">
          <div class="left-wrap">
            <div class="wikiheader-lists"
                 v-for="(val,key) in item.nav_son"
                 :key="key">
              <div class="title"
                   v-text="val.name"></div>
              <ul class="list-item aio"
                  v-if="val.id === 1">
                <li v-for="(son,son_index) in val.son"
                    :key="son_index">
                  <a :href="son.href"
                     v-text="son.name"
                     :data-src="son.more.headerImg"
                     :data-desc="son.description"
                     v-on:mouseenter="getHeaderForShow"></a>
                </li>
              </ul>
              <ul class="list-item"
                  v-else>
                <li v-for="(son,son_index) in val.son"
                    :key="son_index">
                  <a :href="son.href"
                     v-text="son.name"
                     :data-src="son.more.headerImg"
                     :data-desc="son.description"
                     v-on:mouseenter="getHeaderForShow"></a>
                </li>
              </ul>

            </div>
          </div>
          <div class="show-img"
               ref="showImg">
            <img src='http://www.t-firefly.com/upload/portal/20180528/68c0489c1c031d8f564c1bac2e1ce573.png'
                 alt=""
                 srcset="">
            <p class="title">Core-3399J</p>
            <p class="desc">六核64位高性能核心板</p>

          </div>

        </div>
      </div>

      <div v-else></div>
    </div>
    <!-- 1.3 侧边导航条 -->
    <div class="slider-menu hidden-lg-and-up"
         ref="sliderMenu">
      <!-- 关闭按钮 -->
      <a class="close"
         @click="handleClose">
        <i class="el-icon-close"></i>
      </a>
      <!-- 内容区域 -->
      <div class="menu-content">
        <el-menu active-text-color="#ff6600"
                 :unique-opened=uniqueOpened
                 background-color="#F9F9F9"
                 :collapse-transition=collapseTransition
                 class="menu-content-vertical">
          <el-submenu v-for="(item,item_i) in getHeader"
                      :key="item.id"
                      :index="parseInt(1+item_i)">
            <!-- 1级标题 -->
            <template slot="title">
              <span slot="title">{{item.navname}}</span>
            </template>
            <!-- 2级菜单 -->
            <el-submenu v-for="(sub,sub_i) in item.nav_son"
                        :key="sub_i"
                        :index="1+item_i+'-'+sub_i">
              <span slot="title">{{sub.name}}</span>
              <el-menu-item v-for="(sub_son, i) in sub.son"
                            :key="i"
                            :index="1+item_i +'-'+ sub_i +'-'+ i">
                <a :href="sub_son.href">{{sub_son.name}}</a>
              </el-menu-item>
            </el-submenu>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>

    <!-- <wiki-header id="headernav2"
                 class="isNone"></wiki-header> -->
  </div>
  </div>
</template>
<script>
import wikiHeader from './wiki-header'
import { mapState } from 'vuex'
// import ProHeader from './product-header'
export default {
  name: 'common-header',
  props: {
    headerNav: {
      type: Array
    }
  },
  data () {
    return {
      isHeaderFixed: false,
      isSliderShow: false,
      uniqueOpened: true,
      collapseTransition: true,
      screenWidth: document.body.clientWidth,
      keyword: '',
      searchList: []
    }
  },
  components: {
    wikiHeader
    // ProHeader
  },
  computed: {
    getHeader () {
      const headerList = []
      if (this.headerNav !== 'undefined') {
        for (const key in this.headerNav) {
          if (this.headerNav.hasOwnProperty(key)) {
            headerList[key] = this.headerNav[key]
          }
        }
        return headerList
      }
    },
    ...mapState([
      'userInfo',
      'isLogin'
    ])
  },
  methods: {
    /* 顶部导航的固定 */
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
    /* 导航条panel信息的展示 */
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
    },
    /* 1200px以下按钮触发侧边栏 */
    handleOpen () {
      $(this.$refs.sliderMenu).addClass('open')
    },
    handleClose () {
      $(this.$refs.sliderMenu).removeClass('open')
    },
    handleResize () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    handleNavProduct () {
      let imgSrc = $(this).attr('data-src')
      let desc = $(this).attr('data-desc')
      let title = $(this).html()
      // console.log(imgSrc, desc, title)
      if (typeof imgSrc === 'undefined') {
        return
      }
      $('.show-img img').attr('src', imgSrc)
      $('.show-img .desc').html(desc)
      $('.show-img .title').html(title)
    },
    getHeaderForShow (e) {
      let imgSrc = $(e.target).attr('data-src')
      let desc = $(e.target).attr('data-desc')
      let title = $(e.target).html()
      if (typeof imgSrc === 'undefined') {
        return
      }
      $('.show-img img').attr('src', imgSrc)
      $('.show-img .desc').html(desc)
      $('.show-img .title').html(title)
    },
    showSearchForm () {
      let searchInput = this.$refs.searchInput
      $(searchInput).toggleClass('isShow')
    },
    submitSearch () {
      // console.log(this.formData.keyword)
      // this.$api.form('/doc/Search', this.formData, {
      //   'headers': { 'Content-Type': 'application/x-www-form-urlencoded' }
      // }, res => {
      //   if (res.status === 200) {
      //     console.log(res)
      //   }
      // })
      let url = 'http://www.t-firefly.com/doc/Search?keyword=' + this.keyword
      window.location.href = url
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.searchList = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.searchResult) {
          this.searchResult[key].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.searchList = result
      }, 50)
    },
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        let sliderMenu = $(this.$refs.sliderMenu)
        let isHave = sliderMenu.hasClass('open')
        setTimeout(function () {
          if (that.screenWidth > 1200 && isHave) {
            sliderMenu.removeClass('open')
          }
          that.timer = false
        }, 400)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handelHeaderFixed)
    this.isShowPanelList()
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handelHeaderFixed)
  }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.login_dropdown, .language_dropdown
  a
    color #666
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
        a
          display block
          width 100%
          height 100%
      .nav-bar
        margin-left 30px
        margin-right 30px
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
                // i.bg-hover
                //   -webkit-transition all 0.3s ease-out
                //   margin-left -50% /* ->50% */
                //   width 100% /* ->100% */
        .nav-bar-btn
          text-align right
          overflow hidden
          i
            font-size 24px
            line-height 78px
            color #555
      .login
        // text-align center
        ul
          overflow hidden
          li
            color #666
            float right
            width 20%
            line-height 78px
            position relative
            overflow hidden
            // &:first-child
            // width 40%
            .el-dropdown-link
              padding-left 10px
            .iconfont
              font-size 18px
            &:hover
              color #ff6600
            &.search
              width 60%
              padding 24px 15px
              box-sizing border-box
              .searchInput
                transform translateX(192px)
                // border 1px solid #ff6600
                height 30px
                line-height 30px
                width 100%
                border-radius 4px
                transition all 0.5s
                .el-icon-search
                  font-size 18px
                  padding-left 0 5px
                input
                  height 30px
                  outline none
                  display inline-block
                &.isShow
                  transform translateX(0)
                  border-width 1px
                  border-style solid
                  border-color #ff6600
                  // transition border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
                  transition all 0.5s
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
    top 78px
    left 0
    right 0
    bottom 0
    >.panel.isNone
      opacity 0
      visibility hidden
      // display none
      background-color #f0f0f0
      box-sizing border-box
      // transform translate3d(0, 330px, 0)
      transition all 0.3s ease-out
    >.panel.isShow
      visibility visible
      // display block
      opacity 1
      background-color #f0f0f0
      box-sizing border-box
      // padding-top: 70px;
      // transform translate3d(0, 78px, 0)
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
        overflow hidden
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
        &.prod
          // background-color red
          padding 0
          padding-left 105px
          display flex
          .left-wrap
            width 840px
            padding 30px 0
            height auto
            float left
            overflow hidden
            .wikiheader-lists
              float left
              width 210px
              margin-right 0
              box-sizing border-box
              padding 0 10px
              &:nth-child(-n+4)
                height 235px
                .list-item
                  height 172px
                &:not(:nth-child(-n+4))
                  height 172px
                  .list-item
                    height 48px
              &:nth-child(-n+3)
                .list-item
                  border-bottom 1px solid #c8c8c8
          .show-img
            float left
            box-sizing border-box
            width 240px
            height 355px
            // padding 50px 0
            flex 1
            padding-top 40px
            background-color #f8f8f8
            color #666
            text-align center
            img
              margin 15px 0
            .title
              margin-top 30px
              font-size 18px
            .desc
              margin-top 15px
              font-size 15px
              // margin-bottom 20px
            .price
              margin-top 30px
              font-size 16px
              color #ff6600
.slider-menu
  max-width 320px
  // padding 50px 30px
  box-sizing border-box
  overflow-y scroll
  overflow-x hidden
  position fixed
  top 0
  right -320px
  width 100%
  height 600px
  background-color rgba(249, 249, 249, 0.9)
  z-index 2200
  transition all 0.3s ease 0s
  .close
    display block
    position absolute
    right 10px
    top 15px
    font-size 24px
    z-index 2201
  .menu-content
    margin-top 50px
    width 100%
    height 100%
    position absolute
    top 0
    margin-bottom 0
    pointer-events auto
    // background-color rgba(0, 0, 0, 0)
    .menu-content-vertical:not(.el-menu--collapse)
      width 100%
      height 100%
      text-align justify
    .el-menu-item a
      display block
      width 100%
      height 100%
      color #303133
      &.is-active a
        color #ff6600
.slider-menu.open
  right 0
@media screen and (min-width: 1200px)
  .container, .panel-container
    width 1200px
@media screen and (max-width: 1200px)
  .container, .panel-container
    width 95%
</style>
