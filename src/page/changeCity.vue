<template>
    <div class='page-changeCity'>
        <el-row>
            <Province />
        </el-row>
        <el-row>
            <Hot title="热门城市:" :list="hotList" />
        </el-row>
        <el-row>
          <hot title="最近访问:" :list="rencentList" />
       </el-row>
       <el-row>
        <Category />
       </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import API from '@/api'
export default {
  components: {
    Province,
    Hot,
    Category
  },
  created () {
    API.hotCity().then(resp => {
      this.hotList = resp.data
    })
    API.recentSearch().then(resp => {
      this.rencentList = resp.data
    })
  },
  data () {
    return {
      hotList: [],
      rencentList: ['江苏', '南京', '连云港', '常州']
    }
  }
}
</script>
<style lang='less' scoped>
    .page-changeCity{
  width: 1190px;
  box-sizing: border-box;
  margin: 50px auto 0;
  background-color: #fff;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
    }
</style>
