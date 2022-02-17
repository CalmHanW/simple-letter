/*
 * @Author: your name
 * @Date: 2022-02-12 21:35:02
 * @LastEditTime: 2022-02-14 12:47:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-chrome-ext/js/content.js
 */
setTimeout(function() {
  var val = window.localStorage.getItem('isShow') || false;
  if (!val) {
    alert("～～hello, 王老板，你好呀～～😊");
    alert("如果用一个时间轴来记录开始的话，到今天，我们就在一起一年啦～～✌️");
    alert("时间过的好快，像做梦一样～～");
    alert("元旦节发你的表情包就知道你猜不出来 👀");
    alert("那就我来揭晓答案吧");
    var person = prompt("那你先说一句好听的话 👀","");
    if (person != null && person != ""){
      alert("从2020到2021年，用光了我所有的运气才让我遇到你");
      alert("你是我 2021 唯一的收获");
      alert("既轰轰烈烈，又平平淡淡");
      alert("满满的仪式感就是简单的生活本身");// 😘
      alert("下一个一年，让我们继续一起努力吧😘");
      alert("done啦");
      alert("等等");
      alert("😘😘😘😘😘😘");
      alert("拜拜");
    }
  }
  window.localStorage.setItem('isShow', true);
}, 3000)
