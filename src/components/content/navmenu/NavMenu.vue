<template>
    <div id="NavMenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">分类博客</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">社区</el-menu-item>
            <el-menu-item index="4">创作中心</el-menu-item>
            <el-menu-item index="5">社区</el-menu-item>
            <el-menu-item index="6">创作中心</el-menu-item>
            <el-menu-item index="7">
              <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-menu-item>
            
            <el-menu-item index="8">创作中心</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
      name:'NavMenu',
      data() {
        return {
          activeIndex: '1',
          input: '',
          select: ''
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
<style scoped>
#NavMenu {
  font-size: 18px;
  background-color: blue;
}
</style>
