<template>
  <div class="hello">
    <!-- 导航弹性变化 -->
    <ul class="ul-demo">
      <li>音乐</li>
      <li>影视</li>
      <li>旅游</li>
      <li>更多</li>
    </ul>
    <span class="title">（1）导航弹性布局</span>
    <!-- 左右分裂布局 -->
    <div class="demo-two">
      <div class="demo-two-left"></div>
      <div class="demo-two-right">
        <span>Iphone7 PLUS XXXXXXXXXX</span>
        <div class="statistical">
          <span>总人数99</span>
          <span>剩余人数33</span>
        </div>
        <div class="btn">立即参与</div>
      </div>
    </div>
    <span class="title">（2）左右分裂布局</span>
    <!-- 固定比例布局 -->
    <div class="demo-three">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <span class="title">（3）固定比例布局</span>
    <!-- 某一个固定比例布局 -->
    <div class="demo-four">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
    </div>
    <span class="title">（4）某一个固定比例布局</span>
    <!-- 某多个固定比例布局 -->
    <div class="demo-five">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
    </div>
    <span class="title">（5）某多个固定比例布局</span>
    <!-- 圣杯布局 -->
    <div class="demo-six">
      <div class="header">头部</div>
      <div class="body">
        <div class="left">左边</div>
        <div class="content">内容</div>
        <div class="right">右边</div>
      </div>
      <div class="footer">底部</div>
    </div>
    <span class="title">（6）圣杯布局（两边固定， 中间自适应）</span>
    <!-- 流式布局 -->
    <div class="demo-seven">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <span class="title">（7）流式布局</span>
    <!-- 色子1 -->
    <div class="box">
      <span class="item"></span>
    </div>
    <span class="title">色子（1）</span>
    <!-- 色子2 -->
    <div class="box-two">
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <span class="title">色子（2）</span>
    <!-- 色子3 -->
    <div class="box-three">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <span class="title">色子（3）</span>
    <!-- 色子4 -->
    <div class="box-four">
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <span class="title">色子（4）</span>
    <!-- 色子5 -->
    <div class="box-five">
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <span class="title">色子（5）</span>
    <!-- 色子6 -->
    <div class="box-six">
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="column">
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-bottom: 30px;
  margin-left: 50%;
  width: 500px;
  /* height: 1000px; */
  background-color: #f5f5f5;
  transform: translate(-50%, 0);
  box-sizing: border-box;
}
/* 导航弹性布局 */
.hello .ul-demo {
  display: flex;
  padding: 0;
}
.hello .ul-demo li {
  flex: 1;
  list-style: none;
  line-height: 100px;
  background-color: #6BC3E6;
}
/* 左右分裂布局 */
.hello .demo-two {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
.hello .demo-two  .demo-two-left {
  width: 200px;
  height: 200px;
  background-color: #d4cdcd;
}
.hello .demo-two  .demo-two-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 200px;
}
.hello .demo-two  .btn {
  padding: 2px;
  align-self: flex-end;
  background: #0FD5F7;
  box-sizing: border-box;
  border-radius: 4px;
}
/* 固定比例布局 */
.hello .demo-three {
  margin: 20px 0;
  width: 100%;
  display: flex;
}
.hello .demo-three .item {
  flex: 1;
  margin-right: 4px;
  height: 100px;
  background-color: pink;
}
.hello .demo-three .item:nth-last-of-type(1) {
  margin-right: 0;
}
/* 某一个固定比例布局 */
.hello .demo-four {
  margin: 20px 0;
  width: 100%;
  display: flex;
}
.hello .demo-four .item {
  flex: 1;
  margin-right: 4px;
  height: 100px;
  background: green;
}
.hello .demo-four .item:nth-last-of-type(1) {
  margin-right: 0;
}
.hello .demo-four .item.item2 {
  flex: 0 0 55%; /* 属性的放大比例（默认为0） 属性的缩小比例（默认为1） 属性占据的固定空间（剩余空间） */
}
/* 某多个固定比例布局 */
.hello .demo-five {
  margin: 20px 0;
  width: 100%;
  display: flex;
}
.hello .demo-five .item {
  flex: 1;
  margin-right: 4px;
  background-color: yellow;
  height: 100px;
}
.hello .demo-five .item:nth-last-of-type(1) {
  margin-right: 0;
}
.hello .demo-five .item.item2 {
  flex: 0 0 50%;
}
.hello .demo-five .item.item4 {
  flex: 0 0 30%;
}
/* 圣杯布局 */
.demo-six {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}
.demo-six div {
  flex: 1;
}
.demo-six .body {
  display: flex;
}
.demo-six .header,
.demo-six .footer{
  height: 50px;
  line-height: 50px;
  background-color: #737070;
}
.demo-six .body .left,
.demo-six .body .content,
.demo-six .body .right {
  height: 100px;
  line-height: 100px;
}
.demo-six .body .left {
  background-color: #EDEFED;
}
.demo-six .body .content {
  background-color: #D1ECCD;
}
.demo-six .body .right  {
  background-color: #F9DEF9;
}
.demo-six .body .left,
.demo-six .body .right {
  flex: 0 0 15%;
}
/* 流式布局 */
.demo-seven {
  width: 100%;
  margin: 20px 20px;
  display: flex;
  flex-wrap: wrap;
}
.demo-seven .item {
  margin-bottom: 5px;
  margin-right: 4px;
  flex: 0 0 110px;
  height: 100px;
  border: 1px solid red;
}
/* 色子1 */
.box,
.box-two,
.box-three {
  padding: 10px;
  display: flex;
  align-items:center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 50%;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: pink;
  border-radius: 5px;
  transform: translate(-50%, 0);
  box-sizing: border-box;
}
.box .item {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
}
/* 色子（2） */
.box-two {
  justify-content: space-between;
}
.box-two .item,
.box-three .item,
.box-four .item,
.box-five .item,
.box-six .item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
}
.box-two .item:nth-of-type(1) {
  align-self: flex-start;
}
.box-two .item:nth-of-type(2) {
  align-self: flex-end;
}
/* 色子（3） */
.box-three {
  justify-content: space-between;
}
.box-three .item:nth-of-type(1) {
  align-self: flex-start;
}
.box-three .item:nth-last-of-type(1) {
  align-self: flex-end;
}
/* 色子（4） */
.box-four {
  padding: 10px;
  margin-top: 20px;
  margin-left: 50%;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: pink;
  border-radius: 5px;
  transform: translate(-50%, 0);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
}
.box-four .column{
  display: flex;
  flex-basis: 100%; /* 占比100% */
  justify-content: space-between;
}
.box-four .column:nth-last-of-type(1) {
  align-items: flex-end;
}
/* 色子5 */
.box-five,
.box-six {
  padding: 10px;
  margin-top: 20px;
  margin-left: 50%;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-color: pink;
  border-radius: 5px;
  transform: translate(-50%, 0);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.box-five .column {
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
}
.box-five .column:nth-of-type(2) .item:nth-of-type(1),
.box-five .column:nth-of-type(2) .item:nth-of-type(3){
  align-self: flex-end;
}
.box-five .column:nth-of-type(2) .item:nth-of-type(2) {
  margin-top: -10px;
}
/* 色子6 */
.box-six .column {
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
}
</style>
