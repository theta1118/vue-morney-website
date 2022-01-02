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
