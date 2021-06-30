<template>
    <div class='m-menu'>
        <dl @mouseleave='mouseLeave'>
            <dt>全部分类</dt>
            <dd v-for='(item,i) in menuList' :key='i' @mouseenter='mouseEnter(item)' >
              <i class='iconfont' :class="'icon-'+item.type"></i>
                {{item.name}}
              <span >></span>
            </dd>
        </dl>
        <div class="detail" v-if='curDetail' @mouseenter='detailEnter' @mouseleave='detailLeave'>
            <template v-for='(item,i) in curDetail'>
               <h4  :key='i'>{{item.title}}</h4>
               <router-link :to="{path:'/'}" :key='i'>更多>></router-link>
               <span v-for='(item,i) in item.items' :key='i'>{{item}}</span>
            </template>
        </div>
    </div>
</template>
<script>
import API from '@/api'
export default {
  created () {
    API.leftNav().then(resp => {
      this.menuList = resp.data
    })
  },
  data () {
    return {
      curDetail: null,
      timer: null,
      menuList: []
    }
  },
  methods: {
    mouseEnter (item) {
      this.curDetail = item.items
    },
    mouseLeave () {
      this.timer = setTimeout(() => {
        this.curDetail = null
      }, 200)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>
<style lang="less" scoped>
     .m-menu {
      width: 230px;
      height: 475px;
      box-sizing: border-box;
      margin-top: -34px;
      margin-left: 35px;
      color: #FFF;
      position: relative;
      background: linear-gradient(-180deg, rgba(2, 181, 157, .85) 2%, rgba(22, 146, 183, .85) 100%);
      dt {
        height: 50px;
        padding-top: 15px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        margin-left: 15px;
        margin-bottom: 10px;
      }
      dd {
        position: relative;
        box-sizing: border-box;
        padding: 2px 12px;
        height: 26px;
        line-height: 26px;
        cursor: pointer;
        margin:0;
        span{
            display: inline-block;
            position: absolute;
            right: 14px;
        }
        &:hover {
          background: rgba(255, 255, 255, .2);

          &>i {
            opacity: 1;
          }
        }
      }
      .detail {
        padding: 0 30px;
        position: absolute;
        left: 230px;
        bottom: 0;
        width: 400px;
        height: 416px;
        background: #fff;
        z-index: 9999;
        a{
          text-decoration: none;
        position: absolute;
          right: 26px;
          top: 24px;
          font-size: 14px;
          color:#666;
          &:hover{
            color:#31BBAC;
          }
        }
        h4 {
          font-size: 16px;
          font-weight: 500;
          margin-top: 24px;
          height: 22px;
          line-height: 22px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;
          color: #222;
        }
        span {
          color: #999;
          font-size: 12px;
          line-height: 15px;
          display: inline-block;
          margin-right: 16px;
          margin-top: 10px;
          cursor: pointer;

          &:hover {
            color: #31BBAC;
          }
        }
      }
     }
</style>
