<template>
    <div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="文章分类">
          <el-select v-model="category" placeholder="请选择...">
            <el-option  v-for="(category,index) in categories" :label="category.categoryName" :value="category.categoryId" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章摘要（可选）">
          <el-input v-model="summary"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <el-input type="textarea" rows="5" v-model="content"></el-input>
          <span class="len">{{contentLen}}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="onBack">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
    import {getCategoryFindAll} from  "@/network/category.js"
    import {saveArticle} from  "@/network/article.js"
    export default {
       name:'NewArticle',
       data(){
         return{
           userId:null,
           categories:[],
           title:null,
          category:null,
          summary:null,
          content:""
         }
       },
       created(){
         this.userId=sessionStorage.getItem("userId");
         getCategoryFindAll().then(res=>{
           this.categories=res;
         })
       },
       methods:{
         onSubmit(){
           console.log(this.userId,this.category,this.title,this.content,this.summary);
          saveArticle(this.userId,this.category,this.title,this.content,this.summary).then(res=>{
            if(res>0){
              alert("保存成功")
              this.$router.go(-1)
            }else{
              alert("保存失败")
            }
          })
         },
         onBack(){
           this.$router.go(-1)
         }
       },
       computed:{
         contentLen(){
           return this.content.length
         }
       }
    }
</script>
<style scoped>
.len{
  color: #aaa;
}
</style>
