<template>
    <div class="cartitem">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <slot name="title"></slot>
          <el-button style="float: right; padding: 3px 0" type="text"><slot name="oper"></slot></el-button>
        </div>
        <slot name="content"></slot>  
      </el-card>
    </div>
</template>
<script>
    export default {
       name:'CartItem',
    }
</script>
<style scoped>
.cartitem{
  margin-bottom: 10px;
}
</style>
