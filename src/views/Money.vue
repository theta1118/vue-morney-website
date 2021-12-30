<template>
  <Layout class-prefix="layout">
    {{recordList}}
<!--    触发这个submit的点击事件-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
  import {Component, Watch} from 'vue-property-decorator';

  //创建版本号，为了做数据迁移作准备
  const version = window.localStorage.getItem('version') || '0';
  const recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList') ||'[]');

    if(version==='0.0.1'){
      //数据库升级，数据库迁移
      recordList.forEach(record=>{
        record.createdAt = new Date(2021,0,1);
      });
      //保存数据
      window.localStorage.setItem('recordList',JSON.stringify(recordList));
    }
  window.localStorage.setItem('version','0.0.2');

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
    amount:number  //除了写数据类型（七种），也可以写类，在js里面，类也叫做构造函数
    createdAt?:Date; //类 /构造函数，createdAt可以不存在
    // createdAt:Date | undefined;//也可以写成上面那种方式
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue{
      tags=['衣','食','住','行','彩票'];
      recordList: Record[]= recordList;
      record: Record ={
        tags:[],notes:'',type:'-',amount:0
      };

    onUpdateTags(value:string[]){
       this.record.tags = value;
    }
    onUpdateNotes(value:string){
        this.record.notes = value;
    }

    saveRecord(){
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createdAt = new Date();
      this.recordList.push(record2);
      // localStorage.set('recordList',JSON.stringify(this.recordList));
      //把recordList保存到localstorage里面就可以了
      //用JSON.stringify把它序列化一下，把recordList序列化一下，但是这个方法不太好
      // 如果你在别的地方点击，不一定会保存，所以使用 @watch 方法更好
      //record2拥有和record完全一样的属性，保存的时候永远保存的是它的副本
    }

    @Watch('recordList')
    onRecordListChange(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
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
