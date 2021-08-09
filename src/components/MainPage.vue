<template>
    <el-container>
      <el-header>Element UI ....</el-header>
      <el-container>
        <el-aside width="200px">
        <el-menu :default-openeds="['1', '2', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>Basic</template>
        <el-menu-item-group>
          <el-menu-item @click="toPage('Layout')" index="1-1">Layout 布局</el-menu-item>
          <el-menu-item @click="toPage('Container')" index="1-2">Container 布局容器</el-menu-item>
          <el-menu-item @click="toPage('Color')" index="1-3">Color 色彩</el-menu-item>
          <el-menu-item @click="toPage('Typography')" index="1-4">Typography 字体</el-menu-item>
          <el-menu-item @click="toPage('Border')" index="1-5">Border 边框</el-menu-item>
          <el-menu-item @click="toPage('Icon')" index="1-6">Icon 图标</el-menu-item>
          <el-menu-item @click="toPage('Switch')" index="1-9">Switch 图标</el-menu-item>
          <el-menu-item @click="toPage('Button')" index="1-7">Button 按钮</el-menu-item>
          <el-menu-item @click="toPage('Link')" index="1-8">Link 文字链接</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toPage (szPage) {
      this.$router.push('/' + szPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #96d5f1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
}

.el-footer {
  background-color: #dadbdd;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: left;
}

.el-menu-item {
  text-align: left;
}
body > .el-container {
  bottom: 40px;
}
</style>
