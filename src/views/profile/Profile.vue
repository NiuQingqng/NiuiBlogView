<template>
    <div>
        <user-info :user="userDetail.user"/>
        <article-list :articles="userDetail.articles" :isShowDel='true'/>
    </div>
</template>
<script>
import {getUserFindOneDetail} from  "@/network/user.js"
import UserInfo from './childComponents/UserInfo.vue'
import ArticleList from '../../components/content/article/ArticleList.vue'
    export default {
  components: { UserInfo, ArticleList },
       name:'Profile',
        data(){
         return {
           userId:null,
           userDetail:{},
         }
        },
       created(){
        this.userId=this.$route.params.userId
        getUserFindOneDetail(this.userId).then(res=>{
                   this.userDetail = res
                   console.log(res);
               })
       },
    }
</script>
<style scoped>

</style>
