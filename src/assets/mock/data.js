import Mock from "mockjs";
const Random = Mock.Random;
const todoList = function todoList() {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      id: Random.natural(),
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      user_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }
  return {
    data: articles
  };
};
const arrayDemo =function getArray() {
  let arraydemo={
    'str|2-4':"lison"
  }
  return {data:arraydemo}
} 
const user={
  id:"@id()",//得到的随机ID，对象
  username:"@cname()",//随机生成中文名字
  date:"@date('yyyy-MM-dd')",//随机生成日期
  avatar:"@image('200*200','red','#fff','avatar)",//随机生成图片地址
  description:"@paragraph()",//描述
  ip:"@ip()",//IP地址
  email:"@email()"//email
}
export {user, todoList,arrayDemo};
