function clone<X>(data:X):X{
  //data是什么类型，返回值就是什么类型,这个X可以改成任意的，但是三个要保持一致
  return JSON.parse(JSON.stringify(data));
}
export default clone;
