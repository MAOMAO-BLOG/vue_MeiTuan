<template>
    <el-row class='m-header m-header-topbar'>
        <el-col :span="14">
            <geo/>
        </el-col>
        <el-col :span="10">
            <MyNav/>
        </el-col>
      </el-row>
</template>
<script>
import Geo from './geo.vue'
import MyNav from './nav.vue'
export default {
  components: {
    Geo,
    MyNav
  }
}
</script>
<style lang='less'>
     .m-header.m-header-topbar{
         padding:8px 16px;
      width: 1190px!important;
      box-sizing: border-box;
      z-index: 9999;
      height: 40px;
      margin:0 auto;
      line-height: 40px;
      z-index: 9;
      /* justify-content: space-between; */
    }
</style>
