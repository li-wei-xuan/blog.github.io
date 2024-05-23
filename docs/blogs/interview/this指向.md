---
title: this指向
date: 2023-05-12
tags:
 - interview
categories:
 - interview
---

| 调用方式 | 示例 | 函数中的this指向 |
| --- | --- | --- |
|通过new调用|	new method	|新对象
|直接调用|	method()|	全局对象
|通过对象调用|	obj.method()|	调用的对象
|call、apply、bind|	method.call(ctx)|	第一个参数

### 概念

```js
在js中，this的意思为“这个;当前”，是一个指针型变量，它动态指向当前函数的运行环境。

在不同的场景中调用同一个函数，this的指向也可能会发生变化，但是它永远指向其所在函数的真实调用者；
如果没有调用者，就指向全局对象 window。
```

### 全局中的this

```js
在全局作用域下，this始终指向全局对象window，无论是否是严格模式！

简写：
	console.log(this) // window
完整的写法：
	window.console.log(this) // 调用 window 下的 console 方法
```

### 函数中的this

```js
普通函数内的this分为两种情况，严格模式下和非严格模式下。

严格模式
  function test() {
    'use strict'
    console.log(this);
  }
  test(); // undefined
  window.test(); // window

非严格模式
	function test() {
    console.log(this);
  }
  test(); // window
  window.test(); // window
```

### 对象中的this

```js
对象内部方法的this指向调用这些方法的对象，也就是谁调用就指向谁。

let obj = {
  name: 'zhangsan',
  test() {
    name: 'xiaoming'
    console.log(this.name)
  },
  obj2: {
    name: 'xiaohong',
    test2() {
      name: 'xiaoli'
      console.log(this.name)
    }
  }
}
obj.test() // 返回值为 zhangsan ，说明此时this指向obj。
obj.obj2.test2() // 返回值为xiaohong，说明this指向obj2

总结：
  函数的定义位置不影响其this指向，this指向只和调用函数的对象有关。
  多层嵌套的对象，内部方法的this指向离被调用函数最近的对象。
```

### 箭头函数中的this

```js
箭头函数：this指向于函数作用域所用的对象。

箭头函数的重要特征：
	箭头函数中没有this和arguments，会捕获自己定义所处的外层执行环境，并且继承这个this值,指向当前定义时所在的对象。
	箭头函数的this指向在被定义的时候就确定了，之后永远都不会改变。
  即使使用call()、apply()、bind()等方法改变this指向也不可以
  
let obj = {
  a: 'hhh',
  fn: () => {
    console.log(this)
  }
}
obj.fn() // 对象window

let show = () => console.log(this)
let obj = { show }
show() // 对象window
window.show() // 对象window
obj.show() // 对象window
window.obj.show() // 对象window
```

### 构造函数中的this

```js
构造函数中的this是指向实例。

class Father 
{   
    //构造函数
    constructor(name, sex, age)
    {
        this.name = name
        this.sex = sex 
        this.age = age
    }
}

//实例化得到一个对象
var xiaoming = new Father('小明','男', '16')
console.log(xiaoming.name) // 小明
console.log(xiaoming.sex) // 男
console.log(xiaoming.age) // 16
```

### 原型链中的this

```js
this这个值在一个继承机制中，仍然是指向它原本属于的对象，而不是从原型链上找到它时，它所属于的对象。
```

