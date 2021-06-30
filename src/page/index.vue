<template>
    <div class='page-index'>
        <el-row class='first'>
            <el-col :span="5"><MyMenu/></el-col>
            <el-col :span="19"><MyLife/></el-col>
        </el-row>
        <el-row>
            <el-col><Container :nav='isStyle'/></el-col>
        </el-row>
        <el-row>
          <el-col><Container :nav='recomment'/></el-col>
      </el-row>
    </div>
</template>
<script>
import MyMenu from '@/components/index/menu.vue'
import MyLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
  components: {
    MyMenu,
    MyLife,
    Container
  },
  data () {
    return {
      isStyle: {
        class: 'isStyle',
        title: '有格调',
        list: [
          {
            text: '全部',
            tab: 'all'
          },
          {
            text: '约会聚餐',
            tab: 'food'
          },
          {
            text: '丽人SPA',
            tab: 'spa'
          },
          {
            text: '电影演出',
            tab: 'movie'
          },
          {
            text: '品质出游',
            tab: 'travel'
          }
        ]
      },
      recomment: {
        class: 'youhui',
        title: '很优惠',
        list: [
          {
            text: '全部',
            tab: 'all'
          },
          {
            text: '美食',
            tab: 'food'
          },
          {
            text: '休闲',
            tab: 'xuixian'
          }
        ]
      }
    }
  }
}
</script>
<style>
  .first{
    display: flex;
  }
</style>
