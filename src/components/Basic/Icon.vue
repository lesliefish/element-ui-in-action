<template>
  <div class="page">
    <h2>Icon图标</h2>
    <p>提供了一套常用的图标集合。</p>
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data () {
    return {
      name: 'Icon'
    }
  }
}
</script>

<style lang="less">
.page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
