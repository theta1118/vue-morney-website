<!--重复的东西放到一个组件里面-->
<!--不重复的东西通过插槽弄到里面-->
<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Layout'
  }
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    border: 1px solid lightgreen;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    border: 1px solid cornflowerblue;
    overflow: auto;
    flex-grow: 1;
  }

</style>
