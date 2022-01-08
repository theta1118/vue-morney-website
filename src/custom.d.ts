type RecordItem = {
  //key:类型
  //如果有初始值，就不用加类型
  tags:string[]
  notes:string
  type:string
  amount:number  //除了写数据类型（七种），也可以写类，在js里面，类也叫做构造函数
  createdAt?:Date //类 /构造函数，createdAt可以不存在
  // createdAt:Date | undefined;//也可以写成上面那种方式
}

type Tag ={
  id:string;
  name:string;
}
type TagListModel={
  data:Tag[]
  fetch:()=>Tag[]
  create:(name:string)=>'success'| 'duplicated' //联合类型（字符串的自类型）类似于枚举
  update:(id:string,name:string)=>'success' | 'not found'| 'duplicated'
  remove:(id:string)=>boolean
  save:()=>void
}

interface Window{
  tagList:Tag[];
  createTag:(name:string)=>void;
  findTag:(id:string)=>Tag|undefined;
  removeTag:(id:string)=>boolean;
  updateTag:(id:string,name:string)=>'success' | 'not found'| 'duplicated'//等价于TagListModel['update']
  recordList:RecordItem[];
  createRecord:(record:RecordItem)=>void;
}
