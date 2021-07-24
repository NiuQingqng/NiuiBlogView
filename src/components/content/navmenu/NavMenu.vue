<template>
    <div id="NavMenu">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="itemClick(1)">首页</el-menu-item>
            <el-submenu index="2-4">
              
              <template slot="title">分类</template>
              <el-menu-item  v-for="(category,index) in categories.slice(1,6)" @click="itemClick(index+2)" :index="index+2" :key="index+2">
              <el-link :underline="false" >{{category.categoryName}}</el-link>
            </el-menu-item>
            </el-submenu>

            <el-menu-item index="8">
              <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-menu-item>
            <el-menu-item index="9" @click="itemClick(9)">个人中心</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    import {getCategoryFindAll} from "@/network/category.js"

    export default {
      name:'NavMenu',
      data() {
        return {
          activeIndex: '1',
          input: '',
          categories:[]
        };
      },
      created(){
         getCategoryFindAll().then(res=>{
                   this.categories = res
               })
       },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        itemClick(index){
          switch(index){
            case 1:this.$router.replace('/');break;
            case 2:alert("111");break;
            case 9:
              let userId = sessionStorage.getItem("userId");
              if(userId!=null){
                this.$router.replace('/profile/'+userId)
                console.log(userId);
              }else{
                this.$router.replace('/profile');
              }
              break;
          }
        }
      }
    }
</script>
<style scoped>
.input-with-select{
  width: 300px;
}
.el-menu{
  text-align: right;
}
</style>
