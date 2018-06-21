<template>
  <el-row>
    <el-col :span="24"
            type="flex">
      <el-carousel height="680px">
        <el-carousel-item v-for="(item,index) in imgList"
                          :key="index">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'common-swiper',
  data () {
    return {
      imgList: ['http://firefly.cn/upload/admin/20180504/6f82c5b6aee6503bc806a93f2a972579.jpg', 'http://firefly.cn/upload/admin/20180508/c1e95537129d1004a4587d3e6db687bd.jpg', 'http://www.t-firefly.com/upload/admin/20180418/1f8ff9bd0cdad5c9ae721bab26f65a38.jpg', 'http://www.t-firefly.com/upload/admin/20180418/362d6f36abb66eaf0b41b1a506a5b117.jpg']
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-carousel >>> .el-carousel__arrow
  background-color #6c6c6c
.el-carousel >>> .el-carousel__arrow--left
  left 236px
.el-carousel >>> .el-carousel__arrow--right
  right 236px
.el-carousel
  .el-carousel__item
    width 100%
    height 100%
    .el-carousel__item:nth-child(2n)
      background-color #99a9bf
    .el-carousel__item:nth-child(2n + 1)
      background-color #d3dce6
</style>
