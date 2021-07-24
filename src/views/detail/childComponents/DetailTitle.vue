<template>
    <div>
      <el-card class="box-card">
        <div class="title">
          <h3>{{article.articleTitle}}</h3>
        </div>
        <div class="other">
          <span>最后更新时间：{{articleUpdateTime}}</span>
          <span><i class="el-icon-view"/> {{article.articleViewCount}}</span>
          <span><i class="el-icon-chat-line-round" /> {{article.articleViewCount}}</span>
        </div>
      </el-card>
    </div>
</template>
<script>
    export default {
       name:'DetailTitle',
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
            if (new Date() - this.article.articleUpdateTime<24*60*60*1000) return new Date(this.article.articleUpdateTime).toTimeString().substr(0, 8)
            return new Date(this.article.articleUpdateTime).toLocaleDateString().replace(/\//g, "-")
          }
        },
    }
</script>
<style scoped>
.other{
  color: #aaa;
  text-align: right;
  padding-right: 5%;
}
</style>
