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
  height 14.375rem /* 230/16 */
  // line-height 14.375rem /* 230/16 */
  box-sizing border-box
  background-color #f0f0f0
  overflow hidden
  .wikiheader-container
    box-sizing border-box
    width 75rem /* 1200/16 */
    height 100%
    margin 0 auto
    padding 1.875rem 0 /* 30/16 */
    padding-left 7.1875rem /* 115/16 */
    text-align left
    .wikiheader-lists
      float left
      margin-right 3.6875rem /* 59/16 */
      .title
        font-size 0.875rem /* 14/16 */
        color #3c3c3c
        position relative
        margin-bottom 1.125rem /* 18/16 */
        &::before
          content ''
          position absolute
          top 0
          left -7px
          width 0.125rem /* 2/16 */
          height 0.875rem // * 12/16 *//* 14/16 *//* 12/16 */
          line-height 1rem
          background-color #ff6600
      .list-item
        li
          margin-bottom 0.75rem /* 12/16 */
        a
          font-size 0.75rem /* 12/16 */
          color #666
          &:hover
            color #ff6600
      &:last-child
        margin-right 0
    .wikiheader-lists.aio
      .list-item
        max-width 11.5rem /* 184/16 */
        li
          &:nth-child(-n+8)
            display inline-block
            &:nth-child(even)
              padding-left 1.375rem /* 22/16 */
</style>
