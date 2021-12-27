<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
      @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'"
      @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';//用到了vue,就必须倒入vue
  import {Component,Prop} from "vue-property-decorator";

  @Component //它的作用就是告诉下面的东西是vue的组件
  export default class Types extends Vue{
    type = '-'; //赋值语句会自动变成实例属性 // '-'表示支出，'+'表示收入

    selectType(type:string){
      if(type !== '-' && type !==  '+'){
        throw new Error('type is unknown');
      }
      this.type = type;
    }
  }
</script>

<style lang="scss" scoped>
  .types{
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li{
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>
