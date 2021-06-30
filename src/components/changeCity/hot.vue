<template>
    <div class='m-hcity'>
        <dl>
            <dt>{{title}}</dt>
            <dd v-for='(item,i) in list' :key='i'>{{item.name}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
  props: ['title', 'list']
}
</script>
<style lang='less' scoped>
    .m-hcity {
        dl {
            display: flex;

            dt {
            font-size: 16px;
            color: #333;
            font-weight: 500;
            }

            dd {
            margin: 0 20px;
            color: #666;
            line-height: 22px;
            font-size: 14px;
            }
        }
}
</style>
