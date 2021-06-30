<template>
    <div class="choose-wrap" >
        <div class="choose" :class="disabled?'disabled':''" @click='click' v-document-click='documentClick'>
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class='mt-content' :class='{active:showWrapperActive}'>
                <h2>{{title}}</h2>
                <div :class="['wrapper',className]" v-if="className=='province'">
                    <div class="col" v-for='(data,i) in renderList' :key='i'>
                        <span  :class="{'mt-item':true,'active':item == value}"
                        v-for='(item,i) in data' :key='i'
                        @click='changeValue(item)'
                        >{{item.provinceName}}</span>
                    </div>
                </div>
                <div :class="['wrapper',className]" v-if="className=='city'">
                  <div class="col" v-for='(data,i) in renderList' :key='i'>
                      <span  :class="{'mt-item':true,'active':item == value}"
                      v-for='(item,i) in data' :key='i'
                      @click='changeValue(item)'
                      >{{item.name}}</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['value', 'title', 'list', 'disabled', 'showWrapperActive', 'className'],
  data () {
    return {

    }
  },
  computed: {
    renderList: function () {
      const col = Math.ceil(this.list.length / 12)
      const resultList = []
      for (let i = 0; i < col; i++) {
        const data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  },
  methods: {
    click (e) {
      e.stopPropagation()
      this.$emit('change_active', true)
    },
    documentClick () {
      this.$emit('change_active', false)
    },
    changeValue (value) {
      this.$emit('change', value)
    }
  }
}
</script>
<style lang='less' scoped>
    .choose-wrap {
      display: inline-block;
    .choose{
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid #E5E5E5;
        margin: 0 10px 0 20px;
        padding: 10px 0 10px 10px;
        vertical-align: middle;
        display: inline-block;
        width: 150px;
        height: 40px;
        position: relative;
        font-size: 14px;
        color: #666;
        box-sizing: border-box;
        &.disabled {
        cursor: not-allowed;
      }
        i {
          color: #666;
          height: 10px;
          position: absolute;
          right: 4px;
          top: 0;
          bottom: 0;
          margin-top: auto;
          margin-bottom: auto;
        }
    }
    .choose {
      .mt-content {
          h2 {
            font-size: 16px;
            color: #CCC;
            margin: 0;
          }
          display: none;
          position: absolute;
          cursor: default;
          top: 45px;
          left: 0;
          // width: 264px;
          height: 375px;
          padding: 20px 0 20px 15px;
          box-sizing: border-box;
          background-color: #fff;
          border: 1px solid #E5E5E5;
          box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
          border-radius: 4px;
          z-index: 1;
          &.active {
            display: block;
          }
          &::before {
              content: "";
              left: 26px;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-top: 0;
              position: absolute;
              top: -7px;
              border-bottom: 6px solid #E5E5E5;
          }
          .wrapper {
            width: 264px;
            display: flex;
            &.city {
              width: 665px;
            }
            .col {
              float: left;
               .mt-item {
                cursor: pointer;
                font-size: 12px;
                color: #666;
                display: table;
                box-sizing: border-box;
                min-width: 40px;
                height: 20px;
                padding: 1px 8px;
                margin: 6px 38px 6px 0;
                &.active {
                    background: #13D1BE;
                    border-radius: 10px;
                    color: #fff;
                }
            }
            }
        }
      }
    }
    .city-choose {
      .mt-cities {
        display: none;
        position: absolute;
        cursor: default;
        top: 45px;
        left: 0;
        min-width: 150px;
        height: 375px;
        padding: 20px 0 20px 15px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
        border-radius: 4px;
      }
    }
  }
</style>
