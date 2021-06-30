<template>
    <dl class="s-item">
        <dt>
          <img :src="meta.image" alt="图片">
        </dt>
        <dd>
          <h3>
            <router-link :to="{name: 'productDeatil'}">{{meta.title}}</router-link>
          </h3>
          <p class='first'>
            <el-rate
              v-model="meta.score"
              disabled
              show-score
              text-color="#ff9900"
            ></el-rate>
            <span v-if="meta.score > 4.5">很好</span>
            <span v-else-if="meta.score > 4">好</span>
            <span v-else-if="meta.score > 3.5">不错</span>
            <span v-else-if="meta.score > 3">一般</span>
            <span v-else>很差</span>
            <span class="s-item-comment-total">{{meta.commentNum}}人评论</span>
          </p>
          <p>
              <span class="s-item-tab">
                   <span v-for="(item, i) in meta.tab" :key="i">{{item +(i===meta.tab.length-1?'':'|')}}</span>
              </span>
              <span class="s-item-addr">{{meta.address}}</span>
              <span>
                  <a href="#">
                      <i class="el-icon-location"></i>
                      查看地图
                  </a>
              </span>
          </p>
          <p>
              <span class="s-item-price">
                  人均￥{{meta.avg_price}}
              </span>
          </p>
          <ul class="deal-items">
              <li class="items" v-for="(item, index) in meta.dealItems.slice(0, 2)" :key="index">
                  <p class="deal-title">
                      {{item.title}}
                  </p>
                  <p>
                      <span class="deal-price">
                          ￥{{item.price}}
                      </span>
                      <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                        <span class="deal-sales">已售{{item.saleNum}}</span>
                  </p>
              </li>
          </ul>
        </dd>
      </dl>
</template>
<script>
export default {
  props: ['meta']
}
</script>
<style lang='less' scoped>
      .s-item {
      display: flex;
      padding: 20px 0 0;
      min-height: 125px;
      border-top: 1px solid #E5E5E5;
      font-size: 14px;
      .s-item-tab {
        font-size: 0;
      }
     a{
         text-decoration: none;
         color: #31BCAD;

     }
     h3{
         margin: 0;
         a{
          color: rgb(19, 18, 18);
         }
     }
      dt {
        width: 220px;
        padding-right: 20px;
        img {
          width: 220px;
          height: 125px;
          overflow: hidden;
        }
      }
      dd {
        flex: 1;
        margin: 0;
        width: 100px;
        h3 {
          font-weight: 500;
          font-size: 16px;
          color: #333;
        }
        .el-rate {
          display: inline-block;
          .el-rate__icon {
            font-size: 12px;
          }
        }
        >span {
          font-size: 12px;
          margin-right: 10px;
        }
        .s-item-comment-total {
          color: #f90;
        }
        .s-item-price {
          color: #f60;
        }
        .deal-items {
            padding: 0;
          .items {
            cursor: pointer;
            border-radius: 4px;
            padding: 6px 0 8px;
            &:hover {
              background-color: #F8F8F8;
              .deal-title {
                color: #13D1BE;
              }
            }
            .deal-title {
              font-size: 14px;
              line-height: 20px;
              color: #31BCAD;

            }
            .deal-price {
              font-size: 15px;
              color: #f60;
              margin-right: 10px;
            }
            .deal-old-price {
              font-size: 12px;
              color: #999;
              margin-right: 10px;
            }
            .deal-sales {
              font-size: 12px;
              color: #999;
            }
          }
        }
        p {
            margin: 0;
            line-height: 20px;
          span {
            font-size: 12px;
            padding-right: 10px;
          }
          em {
            font-style: normal;
          }
          b {
            float: right;
            border: 1px solid #31BBAC;
            background-color: rgb(255, 153, 0);
            border-color: rgb(255, 153, 0);
            color: rgb(255, 255, 255);
            padding: 0 6px;
            border-radius: 2px;
            height: 18px;
            line-height: 18px;
            font-size: 12px;
            cursor: default;
          }
          &:nth-child(1){
              span{
                padding-left: 10px;
              }
          }
        }
        ul {
          list-style: none;
          font-size: 12px;
          padding-top: 11px;
          margin-top: 5px;
          border-top: 1px dashed #ddd;
          li {
            width: 668px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .detail-type {
              width: 27px;
              height: 15px;
              line-height: 15px;
              display: inline-block;
              background: rgb(35, 147, 238);
              color: #fff;
              text-align: center;
              border-radius: 1px;
              padding: 1px 2px;
              margin-right: 10px;
            }
            &:nth-child(2) {
              .detail-type {
                background: rgb(162, 35, 204);
              }
            }
            &:nth-child(3) {
              .detail-type {
                background: rgb(234, 109, 45);
              }
            }
          }
        }
      }
    }
</style>
