<template>
  <div>
    <div class="wiki-header">
      <div class="wikiheader-container">
        <div class="wikiheader-lists aio">
          <div class="title">开源·行业主板</div>
          <ul class="list-item">
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
            <li>
              <a href="">AIO-3399J</a>
            </li>
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
            <li>
              <a href="">AIO-3288J</a>
            </li>
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
            <li>
              <a href="">AIO-3128C</a>
            </li>
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
            <li>
              <a href="">AIO-3128C</a>
            </li>
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
            <li>
              <a href="">Firefly-RK3399</a>
            </li>
          </ul>
        </div>
        <div class="wikiheader-lists">
          <div class="title">工业平板电脑</div>
          <ul class="list-item">
            <li>
              <a href="">IPC-MA10R800-A3399J</a>
            </li>
            <li>
              <a href="">IPC-MA10R800-A3399J</a>
            </li>
            <li>
              <a href="">IPC-MA10R800-A3288J</a>
            </li>
            <li>
              <a href="">IPC-MA10R800-A3128J</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: 'wiki-header',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.wiki-header
  width 100%
  height 230px
  // line-height 14.375rem /* 230/16 */
  box-sizing border-box
  background-color #f0f0f0
  overflow hidden
  .wikiheader-container
    box-sizing border-box
    width 1200px
    height 100%
    margin 0 auto
    padding 30px 0 /* 30/16 */
    padding-left 115px
    text-align left
    .wikiheader-lists
      float left
      margin-right 359px
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
    .wikiheader-lists.aio
      .list-item
        max-width 184px
        li
          &:nth-child(-n+8)
            display inline-block
            &:nth-child(even)
              padding-left 22px
</style>
