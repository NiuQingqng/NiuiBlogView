<template>
    <div>
      <el-card class="box-card">
        <div class="title">
          <p>{{article.articleTitle}}</p>
        </div>
        <div class="content">
          <p>{{article.articleContent}}</p>
        </div>
        <div class="other">
          <span>{{article.articleLikeCount}}</span>
          <span>{{article.articleSummary}}</span>
          <span>{{articleUpdateTime}}</span>
          <span>{{article.articleCommentCount}}</span>
          <span>{{article.articleViewCount}}</span>
        </div>
        <div class="img"></div>
      </el-card>
    </div>
</template>
<script>
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
          }
        },
        computed:{
          articleUpdateTime(){
            return new Date(this.article.articleUpdateTime).toLocaleDateString().replace(/\//g, "-") + " " + new Date(this.article.articleUpdateTime).toTimeString().substr(0, 8)
          }
        }

    }
</script>
<style scoped>
.box-card{
  border-radius: 0;
}
</style>
