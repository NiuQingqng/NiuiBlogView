<template>
    <div>
      <el-card class="box-card">
        <div class="content">
          <p v-html="article.articleContent"></p>
        </div>
      </el-card>
    </div>
</template>
<script>
    export default {
       name:'DetailContent',
       props:{
         article:{
            type:Object,
            default(){
              return {}
            }
          }
       }
    }
</script>
<style scoped>

</style>
