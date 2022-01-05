<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.filedName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
            :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue{
    @Prop({default:''}) readonly value!:string;

    @Prop({required:true}) filedName!:string;
    @Prop() placeholder?:string;

    //watch只会在变化的时候才会触发
    // @Watch('value')//这行删掉的原因是，因为input的值一旦被用户变化，就会触发@update:value事件，所以就没有必要再加一个watch了
      onValueChanged(value:string){
        this.$emit('update:value',value);
      }
  }
</script>

<style lang="scss" scoped>
  .formItem{
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name{
      padding-right: 16px;
    }
    input{
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>
