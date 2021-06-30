<template>
    <div class="m-products-list">
        <ul>
          <li v-for="item in nav" :key="item.key" @click='changeActive(item)' :class="{'s-nav-active': item.active}">{{item.name}}</li>
        </ul>
        <el-row>
            <item v-for='(item,i) in productList' :key='i' :meta='item'/>
        </el-row>
      </div>
</template>
<script>
import Item from './item.vue'
import API from '@/api'
export default {
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      productList: [{
        image: 'https://img1.baidu.com/it/u=260184381,3672962965&fm=26&fmt=auto&gp=0.jpg',
        title: '火鸡老店',
        type: 'food',
        score: 4.1,
        commentNum: 1221,
        comment: [{
          username: 'xxxx',
          evalaute: '好吃'
        }],
        tab: ['火锅', '沙河'],
        address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
        avg_price: 64,
        dealItems: [{
          title: '火鸡宴，建议10-14人使用',
          price: 909,
          counterPrice: 1150,
          saleNum: 0,
          priceType: '元'
        }]
      },
      {
        image: 'https://img1.baidu.com/it/u=260184381,3672962965&fm=26&fmt=auto&gp=0.jpg',
        title: '火鸡老店',
        type: 'food',
        score: 4.1,
        commentNum: 1221,
        comment: [{
          username: 'xxxx',
          evalaute: '好吃'
        }],
        tab: ['火锅', '沙河'],
        address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
        avg_price: 64,
        dealItems: [{
          title: '火鸡宴，建议10-14人使用',
          price: 909,
          counterPrice: 1150,
          saleNum: 0,
          priceType: '元'
        }]
      }]
    }
  },
  components: {
    Item
  },
  created () {
    API.goodsList().then(resp => {
      console.log(resp.data)
      this.productList = resp.data
    })
  },
  methods: {
    changeActive (item) {
      this.nav.forEach(i => {
        if (i.key === item.key) {
          i.active = true
        } else {
          i.active = false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
     .m-products-list {
        margin-top: 10px;
        background: #FFF;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        color: #333;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 20px;
        padding: 11px 20px;
        ul {
            padding: 0;
            margin: 0;
            li {
            width: 96px;
            height: 20px;
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            &.s-nav-active {
                color: #31BCAD;
            }
            }
            padding-bottom: 2px;
            .s-price {
            position: absolute;
            &:before,
            &:after {
                content: " ";
                position: absolute;
                right: 8px;
                top: 0;
                border: 4px solid transparent;
                border-bottom-color: #ddd;
                width: 0;
                height: 0;
            }
            &:after {
                top: 12px;
                border-bottom-color: transparent;
                border-top-color: #ddd;
            }
            }
        }
    }
</style>
