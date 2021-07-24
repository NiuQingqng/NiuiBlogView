<template>
    <div class="">
      <el-card class="box-card">
        <div class="docomment"  @click="inputclick">
            <el-input v-model="docomment" placeholder="请输入内容" suffix-icon="el-icon-edit">
              <el-button slot="append" @click="btnclick">发表评论</el-button>
            </el-input>
        </div>
        <div class="comment" v-for="(comment,index) in comments" :key="index">
          <div class="content">
            <div>
              <p>
                <span>{{comment.user.userNickname}}：</span>
                <span>{{comment.commentContent}}</span>
              </p>
            </div>
            <div>
              <span>{{comment.commentCreateTime | articleUpdateTime}}</span>
              <el-button type="text">回复</el-button>
              <el-button type="text" v-if="(userId==comment.commentUserId)||(userId==articleUserId)" @click="delclick(comment.commentId)">删除</el-button>
              <span>{{comment.commentLikeCount}}</span>
            </div>
          </div>
        </div>
      </el-card>
    </div>
</template>
<script>
    import {sendComment,delComment} from  "@/network/comment.js"
    export default {
       name:'DetailCommentList',
       props:{
         comments:{
            type:[],
            default(){
              return []
            }
          },
          articleId:null,
          articleUserId:null,
          
       },
       data(){
         return {
           docomment:null,
           userId:null
         }
       },
       created(){
         this.userId=sessionStorage.getItem("userId");
       },
      
       methods:{
         inputclick(event){
            if(this.userId==null){
                this.$alert('请先登录', {
                  confirmButtonText: '确定',
                  callback: action => {
                    if(action=="cancel"){
                      event.target.blur()
                    }
                    if(action=="confirm"){
                      this.$router.push('/profile');
                    }
                  }
              });
            }
         },
         btnclick(){
          sendComment(this.userId,this.articleId,this.docomment).then(res=>{
                  if(res>0){
                   this.$router.go(0)
                  }else{
                    this.$alert('发表评论失败！', {
                      confirmButtonText: '确定',
                    });
                  }
                   
               })
         },
         delclick(commentId){
           delComment(commentId).then(res=>{
                  if(res>0){
                   this.$router.go(0)
                   
                  }else{
                    this.$alert('删除评论失败！', {
                      confirmButtonText: '确定',
                    });
                  }
                   
               })
         }
       },
       filters:{
          articleUpdateTime(time){
            if ((new Date())-time<=60*1000) return "刚刚"
            if ((new Date())-time<=60*60*1000) return parseInt(((new Date())-time)/(60*1000))+"分钟前"
            if ((new Date())-time<=24*60*60*1000) return "今天"+new Date(time).toTimeString().substr(0, 8)
            return new Date(time).toLocaleDateString().replace(/\//g, "-")
          }
        },
    }
</script>
<style scoped>
.content{
  border-bottom: solid 1px #eee;
  padding: 10px;
}
</style>
