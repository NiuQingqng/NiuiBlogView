<template>
    <div>
      <article-list-item class="article-list-item" v-for="(article,index) in articles" :article="article" :key="index" />
    </div>
</template>
<script>
    import ArticleListItem from './ArticleListItem.vue'
    export default {
      components: { ArticleListItem },
      name:'ArticleList',
      props:{
        articles:{
            type:Array,
            default(){
                return []
            }
        }
      }
    }
</script>
<style scoped>
.article-list-item{
  margin-bottom: 0px;
}
</style>
