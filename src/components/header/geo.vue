<template>
    <div class="m-geo">
        <div class="position">
            <i class='el-icon-location-information' />
            {{$store.state.position}}
            <router-link class='changeCity' :to="{name:'changeCity'}">切换城市</router-link>
            [ <a v-for='(item,i) in nearCity' :key='i'>{{item.name}}  </a> ]
        </div>
        <div v-if='!$store.state.user.info.userName' class="m-user">
            <router-link class="login" :to="{name:'login'}">登录</router-link>
            <router-link class="register" :to="{name:'register'}">注册</router-link>
        </div>
    </div>
</template>
<script>
import API from '@/api'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      nearCity: []
    }
  },
  created () {
    API.curPosition().then(resp => {
      this.changePosition(resp.data.name)
      this.nearCity = resp.data.nearCity
    })
  },
  methods: {
    ...mapActions(['changePosition'])
  }
}
</script>
<style lang='less'>
     .m-geo {
    color: #666;
    font-size: 12px;
    text-align: center;
    margin-top:-8px;
    text-align: start;
    .position,.m-user {
      display: inline-block;
    }
    .position{
        .changeCity{
                text-decoration: none;
                border:1px solid #ccc;
        }
        .changeCity {
        background: #F4F4F4;
        border: 1px solid #E5E5E5;
        border-radius: 2px;
        color: #666;
        padding: 0 2px;
        &:hover {
            color: #31BBAC;
        }
        }
    }
    .m-user{
        a{
            text-decoration: none;
        }
        .login,
        .register {
        font-size: 12px;
        line-height: 40px;
        color: #999;
        margin: 0 5px;
        &.login {
            color: #31BBAC;
            margin: 0 5px 0 20px;
        }
        &:hover {
            color: #31BBAC;
        }
        }
    }
}
</style>
