<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >{{$store.state.position}}美团</el-breadcrumb-item>
        <el-breadcrumb-item >{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {

}
</script>
<style lang='less' scoped>
     .el-breadcrumb {
          font-size: 12px;
        }
</style>
