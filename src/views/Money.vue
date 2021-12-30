<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmount"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
<!--    sync的作用：-->
<!--    加上.sync这个修饰符，如果你触发了'update:dataSource'-->
<!--    它就会把你传的数组[...this.dataSource,name])赋值给它之前的 :data-source-->
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';

  //如何在ts里面声明一个类型

  //js的写法是：
  // var record ={
  //   tags:['1','2'],
  //   notes:'xxx',
  //   type:'-',
  //   amount:100
  // }

  type Record = {
    //key:类型
    //如果有初始值，就不用加类型
    tags:string[]
    notes:string
    type:string
    amount:number
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue{
      tags=['衣','食','住','行','彩票']
      record:Record ={
        tags:[],notes:'',type:'-',amount:0
      };

    onUpdateTags(value:string[]){
       this.record.tags = value;
    }
    onUpdateNotes(value:string){
        this.record.notes = value;
    }
    onUpdateAmount(value:string){
        this.record.amount = parseFloat(value);
    }
  }
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
 @import "~@/assets/style/helper.scss";
</style>
