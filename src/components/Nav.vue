<template>
<!--  class后面接一个属性选择器，就只会影响到这一个div-->
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#money"/>
      </svg>
      记账
    </router-link>
    ｜
    <router-link to="/labels">标签</router-link>
    ｜
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">

  let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try{
    importAll(require.context('../assets/icons',true,/\.svg$/));
  }catch (error){
    console.log(error);
  }

  export default {
    name: "Nav"
  };
</script>

<!--scoped是指有范围的，这个Nav只在当前组件起作用-->
<style lang="scss" scoped>
  .nav{border: 1px solid red;}
</style>
