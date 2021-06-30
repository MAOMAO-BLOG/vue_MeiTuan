<template>
    <div class='category'>
        <dl class='m-category'>
            <dt>按拼音首字母选择:</dt>
            <dd v-for='item in list' :key='item'>
                <a :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section " v-for="(item, index) in cityGroup" :key="index" :id="'city-'+ index">
            <dt>{{index}}</dt>
            <dd>
               <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import API from '@/api'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: {}
    }
  },
  methods: {
    changeCity (city) {
      console.log(city)
    }
  },
  async created () {
    const result = await API.cityList()
    this.cityList = result.data
    console.log(this.cityList)
    const obj = {}; let arr = []; const newObj = {}
    this.cityList.forEach(item => {
      if (!obj[item.firstChar.toLocaleUpperCase()]) {
        obj[item.firstChar.toLocaleUpperCase()] = []
      }
      obj[item.firstChar.toLocaleUpperCase()].push(item.name)
    })
    for (const key in obj) {
      // 对属性名进行排序
      arr.push(key)
    }
    arr = arr.sort()
    for (const i of arr) {
      newObj[i] = obj[i]
    }
    this.cityGroup = newObj
  }
}
</script>
<style lang='less' scoped>
    .m-category {
        display: flex;
        margin-bottom: 30px;
        dt {
            font-size: 16px;
            color: #333;
            font-weight: 500;
        }
        dd {
            font-size: 15px;
            color: #666;
            margin: 0 6px;
            width: 24px;
            height: 24px;
            padding: 4px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border-radius: 50%;
            &:hover {
            background: #F8F8F8;
            }
        }
        a {
            color: #41b883;
            text-decoration: none;
        }
    }
    .m-categroy-section {
        display: flex;
        padding: 13px 30px 13px 10px;
        border-radius: 10px;

        &:hover {
            background: #F8F8F8;
        }
        dt {
            box-sizing: border-box;
            vertical-align: top;
            padding-top: 10px;
            display: inline-block;
            text-align: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #fff;
            background: #13D1BE;
            box-shadow: 0 4px 5px 0 rgba(39, 178, 164, .22);
        }
        dd {
            flex: 1;

            span {
            margin: 10px 20px;
            color: #666;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
            &:hover {
                color:#13D1BE;
            }
            &:target {
                color: aquamarine;
            }
            }
        }
}
</style>
