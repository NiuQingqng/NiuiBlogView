<template>
    <div>
      <el-card class="usercard">
        <div class="userAvatar"><img :src="user.userAvatar"/></div>
        <div class="userNickname"><span>{{user.userNickname}}</span></div>
        <div>
          <el-button round @click="newArticle">写文章</el-button>
          <el-button round>修改资料</el-button>
          <el-button round @click="logout">退出登录</el-button>
        </div>
      </el-card>
    </div>
</template>
<script>
    export default {
       name:'UserInfo',
       props:{
         user:{
           type:Object,
           default(){
             return {
               userNickname:"请求错误"
             }
           }
         }
       },
       methods:{
         logout(){
            sessionStorage.clear();
            this.$router.replace('/')
         },
         newArticle(){
           this.$router.push('/newarticle')
         }
       }
    }
</script>
<style scoped>
.usercard{
  display: flex;
  justify-content: center;
}
.usercard div{
  padding: 5px;
  display: flex;
  justify-content: center;
}
.userAvatar img{
  border-radius: 10px;
  height: 100px;
  width: 100px;
}
.userNickname{
  font-size: 28px;
}
</style>
