---
title: CSS居中方式
date: 2022-12-02
tags:
 - css
 - interview
categories:
 - interview
---

## 居中方式
居中方式分为三种：水平居中，垂直居中，水平垂直居中

## 水平居中

### 行内元素

```css
/* 利用text-align:center可以实现行内元素水平居中
对行内元素(inline)，行内块(inline-block)，行内表(inline-table)，inline-flex也有效果 */

  <div class="center">
      test
  </div>

  div {
    height: 50px;
    border: 1px soild black;
  }
  .center{
    text-align:center;
  }

```

### 块级元素
```css
/* 通过把固定宽度的块级元素的margin-left和margin-right设成auto,就可以使块级元素水平居中 */

  <div>
      <p class="center"></p>
  </div>

  div {
    height: 50px;
    border: 1px soild black;
  }
  .center{
    margin: 0 auto;
  }

```

### 多块级元素
```css
/* 方法一：利用inline-block */

/* 通过改变块级元素为inline-block和父容器的text-align属性来实现多块级元素水平居中 */

  <div id="app">
      <div class="center">
         第一个块级元素
      </div>
      <div class="center">
          第二个块级元素
      </div>
      <div class="center">
          第三个块级元素
      </div>
  </div>

  #app {
      height:100px;
      border: 1px soild black;
      text-align: center;
  }
  .center {
      width: 200px;
      padding:1rem;
      color:white;
      background:black;
      display: inline-block;   
  }

/* 方法二：利用flex布局 */
  #app {
      height:100px;
      border: 1px soild black;
      display: flex;
      justify-content: center;
  }
  .center {
      width: 200px;
      padding:1rem;
      color:white;
      background:black;
  }
```

## 垂直居中
### 单行行内元素

```css
/* 通过设置内联元素的高度(height)和行高(line-height)相等，从而使元素垂直居中 */

  <div id="app">
    第一个块级元素
  </div>

  #app {
    height: 100px;
    border: 1px soild black;
    line-height: 100px;
  }

```

### 多行元素
```css
/* 方法一：利用表格布局 */
/* 利用表格布局的vertical-align:middle可以实现子元素的垂直居中 */

  <div class="center">
      <p class="cell">
          The more technology you learn,<br>
          the more you realize how little you know.
      </p>
  </div>

  .center {
      display: table;
      height: 140px;
      border: 2px dashed #f69c55;
  }
  .cell {
      display: table-cell;
      vertical-align: middle;
  }

/* 方法二：利用flex布局 */
  .center {
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 2px dashed #f69c55;
  }

```
### 块级元素
#### 固定高度的块级元素
```css
/* 已知居中元素的高度和宽度，通过绝对定位元素距离顶部50%，并设置margin-top向上偏移元素高度的一半，就可实现垂直居中。 */
  <div class="parent">
      <div class="child">世界上有 10 种人，懂二进制的和不懂二进制的。</div>
  </div>

  .parent {
      height: 140px;
      position: relative;
      border: 2px dashed #f69c55;
  }
  .child {
      position: absolute;
      top: 50%;
      height: 100px;
      margin-top: -50px;
      color:#fff;
      background: #000;
  }

```
#### 未知高度的块级元素
```css
/* 高度未知，借助CSS3中的transform属性向Y轴反向偏移50%的方法实现垂直居中，部分浏览器可能存在兼容性问题。 */
  <div class="parent">
     <div class="child">世界上有 10 种人，懂二进制的和不懂二进制的。</div>
  </div>
  .parent {
     height: 140px;
     position: relative;
     border: 2px dashed #f69c55;
  }
  .child {
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     background: black;
     color: #fff;
     padding: 1rem;
     width: 12rem;
  }

```

## 水平垂直居中
### 固定宽高
```css
  <div class="parent">
     <div class="child">世界上有 10 种人，懂二进制的和不懂二进制的。</div>
  </div>
  .parent {
     height: 140px;
     border: 2px dashed #f69c55;
  }
  .child {
     margin: 0 auto;
     line-height: 140px;
  }
```
### 未知宽高元素
```css
  利用2D变化，在水平和垂直方向都反向平移宽高的一半
  .topTitle {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
```

### 利用flex布局
```
  利用flex布局，其中justify-content用于设置或检索弹性盒子元素在主轴上方向上的对齐方式,
  而align-items属性定义flex子项在flex容器的当前行的侧轴方向上的对齐方式。
```
