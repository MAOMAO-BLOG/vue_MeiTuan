<template>
    <div class='search-panel'>
        <el-row class="m-header-searchbar">
            <el-col :span='3' class="left">
                <a href="//bj.meituan.com">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="美团">
                </a>
            </el-col>
            <el-col :span='15' class='center'>
                <div class="wrapper">
                    <el-input v-model='searchWord' placeholder="搜索商家或地点" @focus='focus' @blur='blur'></el-input>
                    <el-button type="primary">
                        <span class="el-icon-search"></span>
                    </el-button>
                    <dl class="hotPlace" v-if='isHotPlace'>
                        <dt>热门搜索</dt>
                        <dd v-for="(item,i) in hotList" :key='i'>
                            <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if='isSearchList'>
                        <dd v-for="(item,i) in searchList" :key='i'>
                            <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link v-for='(item,i) in hotList' :key='i' :to="{name:'goods',params:{name:item}}">{{item}}
                    </router-link>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import API from '@/api'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      searchList: [],
      hotList: []
    }
  },
  created () {
    API.requestHot().then(resp => {
      this.hotList = resp.data
    })
    API.requestSearch().then(resp => {
      resp = resp.data.list.filter(item => item.indexOf(this.searchWord) > -1)
      this.searchList = resp
    })
  },
  computed: {
    isSearchList () {
      return this.isFocus && this.searchWord
    },
    isHotPlace () {
      return this.isFocus && !this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      this.isFocus = false
    }
  }
}
</script>
<style lang='less'>
    .m-header-searchbar {
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        background: #fff;
        align-items: start;
        padding-bottom: 35px;
        box-sizing: border-box;

        .left {
            width: 280px;
            padding-top: 15px;
            display: inline-block;
            padding-left: 145px;
            box-sizing: border-box;

            img {
                width: 126px;
                height: 46px;
            }
        }

        .center {
            flex: 1;
            width: auto;
            text-align: center;
            display: inline-block;
            padding-top: 15px;

            .wrapper {
                margin-top: 10px;
                border: 1px solid #13D1BE;
                border-radius: 4px;
                width: 450px;
                box-sizing: border-box;
                position: relative;
                white-space: nowrap;
                height: 33px;
                margin-left: 80px;

                .el-input {
                    width: 462px;

                }

                input {
                    border: 0;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    outline: none;
                    height: 28px;
                    line-height: 33px;
                }

                .el-button {
                    position: absolute;
                    width: 66px;
                    border: none;
                    top: -1px;
                    right: -1px;
                    background: #13D1BE;
                    font-size: 16px;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    vertical-align: -1px;
                    height: 33px;
                    line-height: 33px;
                    text-align: center;

                    span {
                        font-weight: bold;
                        display: inline-block;
                        color: #fff;
                        width: 25px;
                        height: 25px;
                        z-index: 99;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-top: -9.5px;
                        margin-left: -12.5px;
                    }
                }

                .hotPlace,
                .searchList {
                    background: #fff;
                    width: 383px;
                    position: absolute;
                    top: 33px;
                    left: 0;
                    padding: 10px;
                    background: #fff;
                    font-size: 12px;
                    box-sizing: border-box;
                    border: 1px solid #E5E5E5;
                    border-top: none;
                    z-index: 999;
                    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .1);
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }

                dl {
                    margin: 0;
                    padding: 0;
                    width: 380px;
                    height: auto;
                    text-align: left;

                    dt {
                        color: #999;
                        font-weight: bold;
                        text-align: center;
                    }

                    dd {
                        color: #666;
                        margin-bottom: 3px;
                        margin-top: 5px;
                        margin-left: 10px;
                        cursor: pointer;

                        a {
                            color: #666;
                            text-decoration: none;

                            &:hover {
                                color: #31BBAC;
                            }
                        }
                    }
                }
            }

            .suggest {
                width: 552px;
                overflow: hidden;
                padding-left: 40px;
                line-height: 1;
                margin-top: 8px;
                height: 14px;

                a {
                    color: #999;
                    margin-right: 10px;
                    margin-bottom: 3px;
                    display: inline-block;
                    font-size: 12px;
                    text-decoration: none;
                    color: #666;

                    &:hover {
                        color: #31BBAC;
                    }
                }
            }
        }
    }
</style>
