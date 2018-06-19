<template>
  <div v-if="wikiLists">
    <div class="wiki">
      <div class="wiki-banner">
        <div class="info-wrap">
          <div class="banner-info">
            <div class="title">{{banner.title}}</div>
            <div class="desc">{{banner.desc}}</div>
          </div>
        </div>
      </div>
      <div class="wiki-container">
        <div class="wiki-warp">
          <div class="lists"
               v-for="(item,index) in getContent"
               :key="index">
            <div class="item-title">{{item.name}}</div>
            <div class="item-content">
              <ul>
                <li v-for="son in item.son"
                    :key="son.id">
                  <a :href="son.href">
                    <div class="img-block"
                         v-lazy:background-image=" defauly_host + son.more.thumbnail"></div>
                    <p class="title">{{son.name}}</p>
                    <p class="desc">{{son.description}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

export default {
  name: 'Wiki-content',
  props: [
    'wikiLists'
  ],
  data () {
    return {
      defauly_host: 'http://www.t-firefly.com/upload/',
      banner: {
        title: '维基教程',
        desc: '学习、创新、协助'
      }
    }
  },
  computed: {
    getContent () {
      const wikiContent = []
      for (let i in this.wikiLists) {
        if (this.wikiLists.hasOwnProperty(i)) {
          wikiContent.push(this.wikiLists[i])
        }
      }
      console.log(wikiContent)
      return wikiContent
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.wiki
  margin-top 4.875rem /* 78/16 */
  background-color $color-background
  position relative
  .wiki-banner
    height 16.0625rem /* 257/16 */
    background url('~images/Wiki/Banner.png')
    position relative
    .info-wrap
      box-sizing border-box
      width 75rem /* 1200/16 */
      color #fff
      height 100%
      padding 6.0625rem /* 97/16 */
      margin 0 auto
      .banner-info
        position absolute
        left 40.5rem /* 280/16 */
        .title
          font-size 1.625rem /* 26/16 */
          margin-bottom 1.25rem /* 20/16 */
        .desc
          font-size 1rem /* 16/16 */
  .wiki-container
    width 75rem /* 1200/16 */
    margin 0 auto
    padding-bottom 3.125rem /* 50/16 */
    .wiki-warp
      margin-top 3.125rem /* 50/16 */
      .lists
        margin-bottom 1.25rem /* 20/16 */
        .item-title
          margin-bottom 0.625rem /* 10/16 */
          height 2.625rem /* 42/16 */
          line-height 2.625rem /* 42/16 */
          background-color $bg-color
          color #fff
          text-align left
          padding-left 1.25rem /* 20/16 */
          border-radius 0.3125rem /* 5/16 */
        .item-content
          width 100%
          height 100%
          ul
            overflow hidden
            li
              float left
              width 15rem /* 240/16 */
              height 16.75rem /* 268/16 */
              background-color #fff
              box-sizing border-box
              padding-bottom 2.125rem /* 34/16 */
              border($color-border)
              &:hover
                box-shadow 0 0 38px rgba(255, 102, 0, 0.2) inset
                transition all 0.15s ease
                .img-block
                  transform scale(1.1)
                  transition all 0.33s linear
              a
                width 100%
                height 100%
                display block
                .title
                  color $bg-color
                  font-size 1.0625rem /* 17/16 */
                  margin-bottom 0.625rem /* 10/16 */
                .desc
                  font-size 13px
                .img-block[lazy=loaded], .img-block[lazy=error], .img-block[lazy=loading]
                  width auto /* 200/16 */
                  height 12.125rem /* 194/16 */
                  background-repeat no-repeat
                  background-size contain
                  background-position 50%
                  margin 0 auto
                  // vertical-align middle
              &:hover .title
                color $color-theme
</style>
