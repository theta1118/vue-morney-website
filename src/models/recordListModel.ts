import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  //获取数据
  data:[] as RecordItem[],
  create(record:RecordItem){
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  //保存数据
  save(){
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.data));
  }
};
export default recordListModel;
