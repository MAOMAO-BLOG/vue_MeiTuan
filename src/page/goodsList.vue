<template>
    <div  class="page-product">
        <el-row class="m-crumbs">
            <Crumbs />
        </el-row>
        <el-row>
            <el-col :span=19>
                <el-row>
                    <Category />
                </el-row>
                <el-row>
                    <List />
                </el-row>
            </el-col>
            <el-col :span=4>
                nav+map
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Crumbs from '@/components/products/crumbs.vue'
import Category from '@/components/products/category.vue'
import List from '@/components/products/list.vue'
export default {
  components: {
    Crumbs,
    Category,
    List
  }
}
</script>
<style lang='less' scoped>
    .page-product{
        padding-top: 33px;
        font-size: 14px;
        .m-crumbs{
        margin: 10px 0;
        }
    }
</style>
