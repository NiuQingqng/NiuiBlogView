<template>
    <div class="userlogin">
      <el-card class="login">
        <el-form ref="form" label-width="80px">
          <el-form-item label="用户名：">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginbutton" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
<script>
    import {getUserLogin} from "@/network/user.js"
    export default {
       name:'UserLogin',
       data() {
        return {
          username:null,
          password:null,
          user:null
        };
      },
      methods:{
        onSubmit(){
          if(this.username!=null&&this.password!=null){
            getUserLogin(this.username,this.password).then(res=>{
                   this.user = res
                   if(res==null){
                     alert("账号或密码错误！")
                   }else{
                     sessionStorage.setItem("userId",res.userId);   //保存数据到sessionStorage
                     sessionStorage.setItem("userName",res.userName);   //保存数据到sessionStorage
                     this.$router.replace('/profile/'+res.userId)
                   }
               })
          }else{
            alert("账号或密码不能为空！")
          }
        }
      }
    }
</script>
<style scoped>
.userlogin{
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login{
  width: 400px;
}
.loginbutton{
  width: 200px;
}
</style>
