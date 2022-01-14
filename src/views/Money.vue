<template>
  <Layout class-prefix="layout">
    <!--    触发这个submit的点击事件-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem filed-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags/>
    <!--    sync的作用：-->
    <!--    加上.sync这个修饰符，如果你触发了'update:dataSource'-->
    <!--    它就会把你传的数组[...this.dataSource,name])赋值给它之前的 :data-source-->
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';
// const {model} = require('@/model.js');//在ts里面引入js,析构语法
// console.log(model);

//创建版本号，为了做数据迁移作准备
// const version = window.localStorage.getItem('version') || '0';
// const recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList') ||'[]');
//
//   if(version==='0.0.1'){
//     //数据库升级，数据库迁移
//     recordList.forEach(record=>{
//       record.createdAt = new Date(2021,0,1);
//     });
//     //保存数据
//     window.localStorage.setItem('recordList',JSON.stringify(recordList));
//   }
// window.localStorage.setItem('version','0.0.2');

//如何在ts里面声明一个类型

//js的写法是：
// var record ={
//   tags:['1','2'],
//   notes:'xxx',
//   type:'-',
//   amount:100
// }

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordlist;
  }
  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
    // localStorage.set('recordList',JSON.stringify(this.recordList));
    //把recordList保存到localstorage里面就可以了
    //用JSON.stringify把它序列化一下，把recordList序列化一下，但是这个方法不太好
    // 如果你在别的地方点击，不一定会保存，所以使用 @watch 方法更好
    //record2拥有和record完全一样的属性，保存的时候永远保存的是它的副本
  }
}
</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
