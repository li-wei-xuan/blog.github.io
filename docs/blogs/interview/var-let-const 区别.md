---
title: var-let-const 区别
date: 2022-10-08
tags:
 - interview
categories:
 - interview
---
### 使用var声明变量  
```js
  // var 声明的变量是函数作用域
  var num = 123
  function test() {
      var age = 12 //在函数内部声明，在函数外部不能访问
      console.log(age) //12
      console.log(num) //123,函数内部可以访问全局作用域中的变量num
  }
  test();
  console.log(age) //age is not defined

  // var声明的变量会有变量提升
  console.log(num) //undefined
  var num = "123"
  function test() {
      console.log(age) //undefined
      var age = 12;
  }
  test();

  // 全局作用域中声明的变量会被挂载到全局对象的window中
  var num = 123;
  console.log(num) //123
  console.log(window.num) //123
  console.log(num === window.num) //true

  // 同一作用域下，可以重复声明相同的变量名
  var a = 12
  var a = 23
  var a = 34
  console.log(a) //34
```

### 使用let声明变量  
```js
   //使用let声明的变量具有块级作用域的特点
   {
     let num = '20'
     console.log(num) //20
   }
   console.log(num) //num is not defined

   //let声明的变量有暂时性死区，没有变量提升，必须先声明再使用，
   console.log(num)//Cannot access 'num' before initialization
   let num = 66
   {
     console.log(a) //Cannot access 'a' before initialization
     let a = 6
   }

   //全局作用域中使用let声明的变量不会挂载到window对象中
   let num = 123
   console.log(num) //123
   console.log(window.num) //undefined
   console.log(num === window.num) //false

   //同一作用域下不能使用let重复声明相同的变量
   let num = 12
   let num = 32 //'num' has already been declared

   //不同作用域下，let可以声明相同变量名的变量
   let num = 22
   function test() {
     let num = 23
     {
       let num = 24
       console.log(num) //24
     }
     console.log(num) //23
   }
   console.log(num) //22
   test()

   //相同作用域下不能重复声明并不受var关键字的限制
   var a = 66
   let a = 33 //'a' has already been declared
```

### 使用const声明常量
:::tip
const除以下这两点不同之外，其他的特性与let的特性一致，也是具有块级作用域、变量不能提升，同一个作用域下不能重复声明等特点。
```js
    //const声明常量必须赋初始值
    const a = 22 //合法有效
    const b //Missing initializer in const declaration

    //const声明的常量不能更改
    const a = 6;//合法有效
    a = 7;//Assignment to constant variable
    const obj = {};
    let o = {};
    // obj=o; //报错

    obj.name = "南山行者";//合法有效
    console.log(obj);


    const arr = [1, 2, 3];
    //arr=obj;//报错
    arr.push(3);//合法有效
    arr.shift();//合法有效
    console.log(arr);
```
:::

###  应用实例
:::tip
1. setTimeout定时器会在循环结束之后再执行，因为定时器是异步的操作，循环会先于它执行完毕。当循环执行完了之后，循环退出时，保存的变量的值就是循环执行结束的值：5。这个时候再去执行setTimeout的延时操作，获取的变量i都是同一个值5。  
2. 如果将循环变量i使用let声明，结局会完全不同，因为let是块级作用域的。JavaScript引擎会给每个循环生成一个新的循环变量保存在对应的块级作用域中。每个setTimeout引用的都是不同变量的实例,所以输出的结果就是循环执行过程中每个循环变量的值:0,1,2,3,4
```js
    //for循环中的let和var
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)//5，5，5，5，5
        }, 1000)
    }
    console.log(i);//5

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)//0，1，2，3，4
        }, 1000)
    }
    console.log(i);//i is not defined


```
:::

### 总结
```
  不推荐使用var，推荐使用let和const,优先使用const,其次是let  
  var 存在变量提升 而 let 与 const 不存在变量提升  
  var定义的变量可以声明多次，而let、const定义的变量只能声明  
  var、let声明的变量可以再次赋值，而const声明的变量不能再次赋值  
  var声明的变量没有自身的作用域，而ler、const声明的变量有自身的作用域  
 ```
