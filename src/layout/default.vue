<template>
        <el-container class='layout-default'>
            <el-header height=''>
                <MyHeader/>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
            <el-footer height=''><MyFooter/></el-footer>
        </el-container>
</template>
<script>
import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'
// import Page from '@/components/page'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
<style lang='less' scoped>
    .layout-default {
   -webkit-font-smoothing: antialiased;
   font-family: "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue", "MIcrosoft YaHei", sans-serif !important;
   background-color: #F8F8F8;
   position: relative;
   .el-header,.el-main,.el-footer{
        width: 1190px;
        margin: 0 auto;
        padding: 0 !important;
        overflow: unset !important;
    }
    .el-header {
        background: #F8F8F8;
        color: #999;
        width: 100%;
        font-size: 12px;
        height:148px;
        padding: 0 !important;
    }
    .el-footer{
      width:100%;
        margin-bottom:0;
        margin-top:30px;
    }
 }
 </style>
