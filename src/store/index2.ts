import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  ...recordStore,//...可以自动引入，直接把数组/函数的引用复制过来（默认都是浅拷贝，直接把地址复制过来），这就是模块化
  ...tagStore,

  //tag store
};

console.log(store);

export default store;
