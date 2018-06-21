<template>
  <div class="advertise">
    <el-row type="flex"
            justify="center"
            class="container">
      <el-col :span="6">
        <img src="./1a1f9928a1014e846894daa10a0230b3.jpg"
             alt="">
        <div class="overlay">
          <div>
            产品的介绍
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <img src="./25d016912a8596bd1fbb81e400955c94.png"
             alt="">
        <div class="overlay"></div>
      </el-col>
      <el-col :span="6">
        <img src="./4aee42f34ede14d7427583065eb7276d.jpg"
             alt="">
        <div class="overlay"></div>
      </el-col>
      <el-col :span="6">
        <img src="./be5ad1f33e202b07d961de9d9f417fd3.png"
             alt="">
        <div class="overlay"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'common-advertise'
}
</script>
<style lang="stylus" scoped>
.advertise
  // margin-top 20px
  padding 30px 0
  background-color #f7f7f7
  .container
    width 1200px
    margin 0 auto
    border 1px solid #ccc
    border-radius 5px
    .el-col
      // height 180
      // line-height 300px
      border-right 1px solid #eee
      position relative
      background-image linear-gradient(#fff, #f1f1f1)
      img
        width 100%
        height 100%
      .overlay
        background rgba(0, 0, 0, 0.5)
        opacity 0
        position absolute
        height 96%
        top 50%
        left 50%
        width 96%
        color #fff
        text-align center
        transition all 0.3s ease 0s
        transform translateX(-50%) translateY(-50%) scale(0)
        div
          position absolute
          top 50%
          left 50%
          transform translateX(-50%) translateY(-50%)
      &:hover
        .overlay
          opacity 1
          transform translateX(-50%) translateY(-50%) scale(1)
          background linear-gradient(135deg, rgba(20, 199, 87, 0.8) 0%, rgba(20, 199, 87, 0.8) 13%, rgba(95, 245, 130, 0.8) 34%, rgba(37, 242, 225, 0.8) 52%, rgba(37, 191, 242, 0.8) 74%, rgba(37, 191, 242, 0.8) 91%, rgba(37, 167, 242, 0.8) 100%)
</style>
