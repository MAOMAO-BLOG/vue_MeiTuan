<template>
    <div class='province'>
        <span class='name'>按省份选择:</span>
        <Select :value='province' className='province' title="省份" @change='changeProvince'
        :list='provinceList' @change_active='changeProvinceActive' :showWrapperActive='provinceActive'/>
        <Select :value='city' className='city' title="城市"
        :list='cityList' @change='changeCity'
        @change_active='changeCityActive'
        :showWrapperActive='cityActive'
        :disabled='cityDisabled'
        />
        <span>直接搜索：</span>
        <el-select
                v-model="searchWord"
                filterable
                remote
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading">
                <el-option
                v-for="item in searchList"
                :key="item"
                :label="item"
                :value="item">
        </el-option>
      </el-select>
    </div>
</template>
<script>
import Select from './select.vue'
import API from '@/api'
import { mapActions } from 'vuex'
export default {
  components: {
    Select
  },
  created () {
    API.province().then(resp => {
      this.provinceList = resp.data
    })
  },
  data () {
    return {
      searchWord: '',
      loading: false,
      city: '城市',
      province: '省份',
      cityActive: false,
      provinceActive: false,
      showWrapperActive: false,
      cityDisabled: true,
      searchList: ['哈尔滨', '佳木斯', '牡丹江', '鹤岗'],
      provinceList: [],
      cityList: []
    }
  },
  methods: {
    remoteMethod (val) {
      // 请求后端接口
      console.log(document.cookie, localStorage)
    },
    ...mapActions(['changePosition']),
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (value) {
      this.province = value.provinceName
      this.cityDisabled = false
      this.cityList = value.cityInfoList
    },
    changeCity (value) {
      this.city = value.name
      this.changePosition(this.city)
    }

  }
}
</script>
<style lang='less' scoped>
    .province{
        margin:0 auto;
        text-align: center;
    }
</style>
