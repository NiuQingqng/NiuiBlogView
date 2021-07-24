<template>
    <div @click="articleItemClick">
      <el-card class="box-card">
        <div class="title">
          <h4>{{article.articleTitle}}</h4>
        </div>
        <div class="content">
          <p> {{article.articleSummary}}</p>
        </div>
        <div class="other">
          <span>{{articleUpdateTime}}</span>
          <span><i class="el-icon-chat-line-round" /> {{article.articleCommentCount}}</span>
          <span><i class="el-icon-view"/> {{article.articleViewCount}}</span>
        </div>
        <div class="img"></div>
        <div class="img">
          <el-button type="text" v-if="isShowDel" @click.stop="delclick(article.articleId)">删除</el-button>
        </div>
      </el-card>
    </div>
</template>
<script>
    import {delArticle} from '@/network/article.js'
    export default {
       name:'Article',
       data(){
        return {
          
        }
       },
        props:{
          article:{
            type:Object,
            default(){
              return {}
            }
          },
          isShowDel:{
            type:Boolean,
            default(){
              return false
            }
          }
        },
        computed:{
          articleUpdateTime(){
            if (new Date() - this.article.articleUpdateTime<24*60*60*1000) return "今天"+new Date(this.article.articleUpdateTime).toTimeString().substr(0, 8)
            return new Date(this.article.articleUpdateTime).toLocaleDateString().replace(/\//g, "-")
          }
        },
        methods:{
          articleItemClick(){
            this.$router.push('/detail/'+this.article.articleId)
          },
          delclick(articleId){
            delArticle(articleId).then(res=>{
              if(res>0){
                this.$alert('已删除！', {
                      confirmButtonText: '确定',
                    });
                   this.$router.go(0)
                   
                  }else{
                    this.$alert('删除失败！', {
                      confirmButtonText: '确定',
                    });
                  }
            })
          }
        },


    }
</script>
<style scoped>
.box-card{
  border-radius: 0;
}
.other{
  color: #aaa;
}
</style>
