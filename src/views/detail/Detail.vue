<template>
    <div class="detail">
        <el-row :gutter="10">
            <el-col :sm="1" :md="1" :lg="2" :xl="2"><div class="grid-content hidden-xs-only"></div></el-col>
            <el-col :lg="5" :xl="5">
                <div class="hidden-md-and-down">
                    <detail-user :user="articleDetail.user" />  
                </div>
            </el-col>
            <el-col :xs="24" :sm="22" :md="22" :lg="15" :xl="15">
                <div>
                    <detail-title :article="articleDetail.article" />
                    <detail-content :article="articleDetail.article" />
                    <detail-comment-list :comments="articleDetail.comments" :articleId="articleId" :articleUserId="articleDetail.article.articleUserId"/>
                </div>
            </el-col>
            <el-col :sm="1" :md="1" :lg="2" :xl="2"><div class="grid-content hidden-xs-only"></div></el-col>
        </el-row>
    </div>
</template>
<script>
    import 'element-ui/lib/theme-chalk/display.css';
    import {getArticleFindOneDetail} from "@/network/article.js"
    import DetailTitle from './childComponents/DetailTitle.vue'
    import DetailContent from './childComponents/DetailContent.vue'
    import DetailCommentList from './childComponents/DetailCommentList.vue'
    import DetailUser from './childComponents/DetailUser.vue'
    export default {
        components: { 
          DetailTitle,
          DetailContent,
                DetailCommentList,
                DetailUser 
        },
       name:'Detail',
       data(){
         return {
           articleId:null,
           articleDetail:{}
         }
       },
       created(){
        this.articleId=this.$route.params.articleId
        getArticleFindOneDetail(this.articleId).then(res=>{
                   this.articleDetail = res
               })
       },
       methods:{
        
       }
    }
</script>
<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .detail{
        margin-top: 20px;
    }
</style>
