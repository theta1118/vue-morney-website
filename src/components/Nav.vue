<template>
<!--  class后面接一个属性选择器，就只会影响到这一个div-->
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    ｜
    <router-link to="/labels">
      <Icon name="labels"/>
      标签</router-link>
    ｜
    <router-link to="/statistics">
      <Icon name="statistics"/>
      统计</router-link>
  </div>
</template>

<script lang="ts">

  export default {
    name: "Nav"
  };
</script>

<!--scoped是指有范围的，这个Nav只在当前组件起作用-->
<style lang="scss" scoped>
  .nav{border: 1px solid red;}
</style>
