let inputlimit=(rule, value, callback) => {
  let len;
  if (!value) {
    len=0;
  }else{
    len=getRealLength(value);
  }
  if (len>255) {
    callback(new Error('输入的内容不能超过255个字节。'));
  }else{
    callback();
  }
}
let textarealimit=(rule, value, callback) => {
  let len;
  if (!value) {
    len=0;
  }else{
    len=getRealLength(value);
  }
  if (len>4000) {
    callback(new Error('输入的内容不能超过4000个字节。'));
  }else{
    callback();
  }
}
export default{
  // 统计字符串字节长度
  getRealLength(val) {  
    var str = new String(val);  
    var bytesCount = 0;  
    for (var i = 0 ,n = str.length; i < n; i++) {  
        var c = str.charCodeAt(i);  
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
            bytesCount += 1;  
        } else {  
            bytesCount += 2;  
        }  
    }  
    return bytesCount;  
  },
  // 输入框长度限制
  inputlimit(){
    return inputlimit;
  },
  textarealimit(){
    return textarealimit;
  },
}