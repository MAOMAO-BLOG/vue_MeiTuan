<template>
    <div  class="m-product-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,i) in classicList" :key="i">
              <Select :title="item.title" :list="item.subList"/>
            </dd>
          </dl>
          <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item,i) in areaList" :key="i">
              <Select :title="item.title" :list="item.sub_list"/>
            </dd>
          </dl>
    </div>
</template>
<script>
import Select from './select.vue'
import API from '@/api'
export default {
  components: {
    Select
  },
  created () {
    API.classify().then(resp => {
      this.classicList = resp.data
    })
  },
  data () {
    return {
      classicList: [],
      areaList: [
        {
          title: '推荐商圈',
          sub_list: [
            {
              name: '望京',

              id: 120000
            },
            {
              name: '昌平',
              id: 12222
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
    .m-product-category {
      padding: 15px 20px 0;
      background: #FFF;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
      color: #333;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      .classic {
      display: flex;
      padding-bottom: 10px;
      dd {
        margin-top: -17px;
        margin-left: 0;
      }
      dt {
        width: 80px;
        &:nth-child(2) {
          border-radius: 100px;
          background: #13D1BE;
          color: #FFF;
          height: 22px;
          line-height: 22px;
          width: 40px;
          box-sizing: border-box;
          margin-right: 40px;
          text-align: center;
        }
      }
      &:nth-child(1) {
        dd {
          border-bottom: 1px solid #ddd;
        }
      }
    }
}
</style>
