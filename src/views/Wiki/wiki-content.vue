<template>
  <div>
    <div class="wiki-content">
      <!-- wiki banner -->
      <div class="wiki-banner">
        <div class="info-wrap">
          <div class="banner-info">
            <div class="title">{{banner.title}}</div>
            <div class="desc">{{banner.desc}}</div>
          </div>
        </div>
      </div>
      <!-- wiki warp -->
      <div class="wiki-container">
        <div class="wiki-warp"
             v-loading='!wikiLists.length'
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <!-- title -->
          <div class="lists"
               v-for="(item,index) in customOrder"
               :key="index">
            <div class="item-title">{{item.name}}</div>
            <!-- content -->
            <div class="item-content">
              <el-row>
                <el-col :xs="12"
                        :sm="8"
                        :md="5"
                        v-for="son in item.son"
                        :key="son.id">
                  <a :href="son.wiki">
                    <div class="img-block"
                         :style="{'background-image': 'url(' + son.more.headerImg + ')'}">

                    </div>
                    <p class="title">{{son.name}}</p>
                    <p class="desc">{{son.description}}</p>
                  </a>
                  <!-- <div class="info-btns">
                    <div>了解详情</div>
                    <div>立即购买</div>
                  </div> -->
                </el-col>
              </el-row>
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
  props: {
    wikiLists: {
      type: Array
    }
  },
  data () {
    return {
      defauly_host: 'http://firefly.cn/upload/',
      banner: {
        title: '维基教程',
        desc: '学习、创新、协助'
      }
    }
  },
  computed: {
    customOrder () {
      let oldContentList = this.wikiLists
      // 目标索引
      let targetIndex
      // 上一个数组索引
      let preIndex
      if (!targetIndex) {
        $(oldContentList).each(function (i, v) {
          if ($(this)[0].id === 39) {
            preIndex = i
          }
          if ($(this)[0].id === 49) {
            targetIndex = i
          }
        })
      }
      oldContentList.splice(preIndex, 0, oldContentList[targetIndex])
      // 因为有插入元素，当前索引要+1
      oldContentList.splice(targetIndex + 1, 1)
      return oldContentList
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.wiki-content
  // margin-top 78px
  background-color $color-background
  position relative
  .wiki-banner
    width 100%
    height 100%
    // padding-bottom 5%
    background url('~images/Wiki/Banner.png') center no-repeat
    background-size cover
    .info-wrap
      box-sizing border-box
      position relative
      // width 1200px
      color #fff
      height 100%
      padding 97px
      margin 0 auto
      .banner-info
        // position absolute
        // left 280px
        margin-left 5%
        text-align left
        .title
          font-size 26px
          margin-bottom 20px
        .desc
          font-size 16px
  .wiki-container
    // width 1200px
    margin 0 auto
    padding-bottom 50px
    .wiki-warp
      margin-top 50px
      .lists
        margin-bottom 20px
        .item-title
          margin-bottom 10px
          height 42px
          line-height 42px
          background-color $bg-color
          color #fff
          text-align left
          padding-left 20px
          border-radius 5px
        .item-content
          width 100%
          // height 100%
          .el-row
            overflow hidden
            .el-col
              // float left
              // width 100%
              box-sizing border-box
              height 268px
              position relative
              overflow hidden
              background-color #fff
              // padding-bottom 34px
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
                  font-size 16px
                  margin-bottom 10px
                .desc
                  font-size 13px
                .img-block
                  width auto /* 200/16 */
                  height 194px
                  background-repeat no-repeat
                  background-size contain
                  background-position 50%
                  margin 0 auto
              &:hover
                .title
                  color $color-theme
                .info-btns
                  bottom 0
                  transition all 0.3s ease 0s
                  z-index 10
              .info-btns
                padding 10px 0
                background-color #6c6c6c
                position absolute
                width 100%
                bottom -60px
                left 0
                transition all 0.3s ease 0s
                opacity 0.8
                div
                  display inline-block
                  border-radius 4px
                  height 20px
                  font-size 14px
                  line-height 20px
                  background-color $color-theme
                  color #fff
                  padding 5px
                  &:first-child
                    margin-right 10px
@media only screen and (min-width: 992px)
  .el-col-md-5
    width 20%
@media screen and (min-width: 1200px)
  .wiki-container, .info-wrap
    width 1200px
@media screen and (max-width: 1200px)
  .wiki-container, .info-wrap
    width 96%
</style>
