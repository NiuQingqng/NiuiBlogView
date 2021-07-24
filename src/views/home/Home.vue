<template>
    <div class="home">
        <el-row :gutter="10">
            <el-col :sm="1" :md="1" :lg="2" :xl="2"><div class="grid-content hidden-xs-only"></div></el-col>
            <el-col :xs="24" :sm="22" :md="22" :lg="14" :xl="14">
                <div>
                    <article-list :articles="articles" />    
                </div>
            </el-col>
            <el-col :lg="6" :xl="6">
                <div class="hidden-md-and-down">
                    <cart-list/>
                </div>
            </el-col>
            <el-col :sm="1" :md="1" :lg="2" :xl="2"><div class="hidden-xs-only"></div></el-col>
        </el-row>
    </div>
    
</template>
<script>
    import 'element-ui/lib/theme-chalk/display.css';
    import ArticleList from '@/components/content/article/ArticleList.vue'

    import {getArticleFindAll} from "@/network/article.js"
    import CartList from './childComponents/CartList.vue';
    export default {
       components: {
           ArticleList, 
              CartList,
           },
       name:'Home',
       data(){
           return {
               articles:[]
           }
       },
       created(){
           //调用本地方法请求数据
           this.getArticleFindAll()
       },
       methods:{
           getArticleFindAll(){
               //调用network方法请求数据
               getArticleFindAll().then(res=>{
                   this.articles = res
               })
           }
       }
    }
</script>
<style scoped>
    .home{
        margin-top: 20px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    
</style>
