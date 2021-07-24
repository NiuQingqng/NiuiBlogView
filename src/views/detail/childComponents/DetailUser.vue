<template>
    <div>
      <el-card class="box-card">
        <div class="title">
          <div class="avatar">
            <img :src="user.userAvatar" />
          </div>
          
          <div class="name">
            <h3>{{user.userNickname}}</h3>
          </div>
          
        </div>
        <div class="other">
          <span>{{user.userSex}} |</span>
          <span>{{userBirthday}} |</span>
          <span>{{user.userCity}}</span>
        </div>
        <div class="other">
          <p>{{user.userDescribe}}</p>
        </div>
      </el-card>
    </div>
</template>
<script>
    export default {
       name:'DetailUser',
       props:{
         user:{
            type:Object,
            default(){
              return {}
            }
          }
       },
       computed:{
          userBirthday(){
            return new Date(this.user.userBirthday).toLocaleDateString().replace(/\//g, "-")
          }
        },
    }
</script>
<style scoped>
.title img{
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

</style>
