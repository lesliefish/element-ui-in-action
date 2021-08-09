<template>
  <div class="page">
    <h2>Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h3>基础用法</h3>
    <p>基本用法</p>
    <div>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>

    <h3>文字描述</h3>
    <p>文字描述</p>
    <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </el-switch>

    <p>扩展的 value 类型</p>
    <div>
      <el-tooltip :content="'Switch value: ' + value" placement="top">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0"
        >
        </el-switch>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Switch",
  data() {
    return {
      value: false,
      value1: false,
      value2: false
    };
  },
};
</script>

<style lang="less">
.page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.el-row {
  margin-bottom: 20px;
}
h3 {
  height: 30px;
}
p {
  height: 20px;
  line-height: 1;
}
</style>
