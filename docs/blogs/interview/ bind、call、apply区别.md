---
title: bind、call、apply 区别
date: 2022-10-10
tags:
 - interview
categories:
 - interview
---
## bind、call、apply的作用
关于[call](#call的用法)、[apply](#apply的用法)、[bind](#bind的用法)函数，它们主要用来改变this指向的。
<!-- https://blog.csdn.net/weixin_40856652/article/details/124293144 -->
### call的用法
```
fn.call(thisArg, arg1, arg2, arg3, ...)
```
**下面的代码中，我们obj1对象也想使用obj对象中的sayHello方法；我们就可以使用call方法调用obj.sayHello, 并将obj.sayHello中的this修改为obj1，把 ‘设计师’, ‘画画’ 这两个参数出给obj.sayHello。**
```JavaScript
    let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: "lihua",
        age: 30
    }
    obj1.sayHello(); // Uncaught TypeError: obj1.sayHello is not a function
    obj.sayHello.call(obj1, '设计师', '画画'); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
```

### apply的用法
```
apply(thisArg, [argsArr])
```
**fn.apply的作用和call相同：修改this指向，并立即执行fn。区别在于传参形式不同，apply接受两个参数，第一个参数是要指向的this对象，第二个参数是一个数组，数组里面的元素会被展开传入fn,作为fn的参数。**
```JavaScript
    let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: "lihua",
        age: 30
    }

    obj.sayHello.apply(obj1, ['设计师', '画画']); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
```

### bind的用法
```
bind(thisArg, arg1, arg2, arg3, ...)
```
**fn.bind的作用是只修改this指向，但不会立即执行fn；会返回一个修改了this指向后的fn。需要调用才会执行:bind(thisArg, arg1, arg2, arg3, ...)()。bind的传参和call相同。**
```js
    let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: "lihua",
        age: 30
    }

    obj.sayHello.bind(obj1, '设计师', '画画'); // 无输出结果
    obj.sayHello.bind(obj1, '设计师', '画画')(); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
```


## bind、call、apply的区别
### 相同点
```
三个都是用于改变this指向；
接收的第一个参数都是this要指向的对象；
都可以利用后续参数传参。
```
### 不同点
```
call和bind传参相同，多个参数依次传入的；
apply只有两个参数，第二个参数为数组；
call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。
```
