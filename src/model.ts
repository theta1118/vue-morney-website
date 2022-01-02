const localStorageKeyName = 'recordList';
const model = {
  //获取数据
  clone(data:RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },

  //保存数据
  'save'(data: RecordItem[]){
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(data));
  }
};

export default model;
