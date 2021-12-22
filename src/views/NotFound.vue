<template>
  <div>
    <div>当前页面不存在，请检查网址是否正确</div>
    <div>
<!--      一般使用这种写法，比较高级-->
      <router-link to="/">返回首页</router-link>
<!--      还有一种方式，使用a标签-->
<!--      <a href="#/">返回首页</a>-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
name: "NotFound"
}
</script>

<style lang="scss" scoped>

</style>
