<template>
  <div class="footer">
    <div class="footer-info">
      <el-row type="flex"
              justify="center"
              class="container">
        <el-col :span="24">
          <div class="info-solution">
            <div class="info-img">
            </div>
            <div class="info-text">
              <div class="title">解决方案</div>
              <ul class="lists">
                <li>行业解决方案</li>
                <li>通用解决方案</li>
                <li>成功案例</li>
                <li>定制服务</li>
              </ul>
            </div>
          </div>
          <div class="line"></div>
          <el-row class="info-aboutUs">
            <el-col :span="3"
                    class="info-text">
              <div class="title">了解更多</div>
              <ul class="lists">
                <li>天启官网</li>
                <li>关于我们</li>
                <li>新闻资讯</li>
                <li>合作伙伴</li>
                <li>商务文件下载</li>
                <li>LOGO下载</li>
              </ul>
            </el-col>
            <el-col :span="3"
                    class="info-text">
              <div class="title">服务与支持</div>
              <ul class="lists">
                <li>新手教程</li>
                <li>产品选型</li>
                <li>常见问题</li>
                <li>意见反馈</li>
                <li>GitHub仓库</li>
                <li style="text-decoration: line-through; color: rgb(204, 204, 204);">
                  <i class="el-icon-circle-close"
                     style="color:red"></i>百度云盘</li>
                <li>Google Dirve</li>
              </ul>
            </el-col>
            <el-col :span="3"
                    class="info-text">
              <div class="title">关注我们</div>
              <ul class="lists">
                <li>微信公众号
                  <div class="weixin">

                  </div>
                </li>
                <li>官方微博</li>
                <li>腾讯视频</li>
                <li>Facebook</li>
                <li>Google+</li>
                <li>Youtube</li>
                <li>Tiwtter</li>
              </ul>
            </el-col>
            <el-col :span="5"
                    class="info-text">
              <div class="title">联系我们</div>
              <ul class="lists">
                <li class="list-title">商务：</li>
                <li>sales@t-firefly.com</li>
                <li class="list-title">求职：</li>
                <li>hr@t-chip.com.cn</li>
                <li class="list-title">技术支持：</li>
                <li>service@t-firefly.com</li>
                <li class="list-title">交流群（QQ）：</li>
                <li>技术交流群① (已满)：431139193</li>
                <li>技术交流群② (已满)：586343230</li>
                <li>技术交流群③：708441069</li>
                <li class="list-title">全国服务热线：</li>
                <li class="tel">4001-511-533</li>
              </ul>
            </el-col>
            <el-col :span="4"
                    class="info-text">
              <div class="title">网站导航</div>
              <ul class="lists">
                <li>天启官网</li>
                <li>开源社区</li>
                <li>商城购买</li>
              </ul>
              <div class="add">
                <div class="title">办公地址</div>
                <ul class="lists">
                  <li class="list-title">中山：</li>
                  <li class="list-title">广东省中山市东区中山四路57号宏宇大厦1座2101</li>
                  <li>查看详细地图
                    <i class="add-png"></i>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="copyright">
      <el-row type="flex"
              justify="center"
              class="container">
        <el-col :span="24"
                class="footer-copyright">
          <p>Copyright © 2017，T-Chip. All Rights Reserved. | 粤ICP备14022046号-2</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'common-footer'
}
</script>
<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixin'
.footer
  // height 482px
  width 100%
  color $text-color-footer
  background-color $bg-color-footer
  .footer-info
    height 482px
    .container
      width 1200px
      margin 0 auto
      padding 64px 0 70px 0
      text-align left
      .info-text
        display inline-block
        font-size $font-size-small
        .title
          font-size $font-size-medium-x
          margin-bottom 22px
        .lists
          li
            margin-bottom 16px
      .info-solution
        margin-right 70px
        float left
        // display inline-block
        .info-img
          display inline-block
          vertical-align top
          width 50px
          height 52px
          background-image url('./solution-bg.png')
          margin-right 14px
      .line
        float left
        height 330px
        width 1px
        background-color #797979
      .info-aboutUs
        .el-col:first-child
          margin-left 70px
        .el-col
          box-sizing border-box
        .info-text
          color $text-color-footer-info
          .title
            font-size $font-size-medium
          .lists .list-title
            margin-bottom 12px
            color #999
        .tel
          font-size $font-size-large-x
          font-weight bold
        .weixin
          width 98px
          height 98px
          margin 10px 0
          background-image url('./weixin.png')
        .add
          margin-top 45px
          .lists li:last-child
            color #6368c5
            cursor pointer
            .add-png
              display inline-block
              width 10px
              height 10px
              background-image url('./add.png')
  .copyright
    height 50px
    line-height 50px
    font-size $font-size-small
    background-color $bg-color-copyright
    color $text-color-copyright
</style>
