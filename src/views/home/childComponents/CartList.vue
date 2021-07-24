<template>
    <div>
      <cart-item>
        <h3 slot="title">用户名、密码</h3>
        <div slot="content"> 
          <h4>用户1</h4>
          <p>用户名:niuniu 密码:123456</p>
          <h4>用户2</h4>
          <p>用户名:niuqing 密码:qwe123</p>
        </div>
      </cart-item>
      <cart-item>
        <span slot="title">关于本站</span>
        <span slot="oper">查看详情</span>
        <div slot="content"> 
          <h3>作者：牛牛</h3>
          <p>使用技术：后端SSM+前端Vue</p>
          <p>简介：NiuiBlog</p>
        </div>
      </cart-item>
      <cart-item>
        <span slot="title">关于本站</span>
        <span slot="oper">查看详情</span>
        <div slot="content"> 
          <h3>作者：牛牛</h3>
          <p>使用技术：后端SSM+前端Vue</p>
          <p>简介：NiuiBlog</p>
        </div>
      </cart-item>
    </div>
</template>
<script>
import CartItem from './CartItem.vue'
    export default {
  components: { CartItem },
       name:'CartList',
    }
</script>
<style scoped>

</style>
