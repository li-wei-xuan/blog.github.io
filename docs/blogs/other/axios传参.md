---
title: axios传参
date: 2022-12-02
tags:
 - JavaScript
 - vue
categories:
 - other
---

## axios发送请求时params和data的区别
```
使用axios发送请求时，配置项params和data两者其实是不相同的

params是添加到url的请求字符串中的,用于get请求

data是添加到请求体(body)中的，用于post请求
```

## post和get的例子

### 正确例子
```js
  export function getUserList(params) { //获取用户列表
    return request({
      url: '/admin/customer/list',
      baseURL: baseUrl,
      method: 'get',
      withCredentials: false,
      params
    })
  }

  export function changeStatus(data) { //修改状态
    return request({
      url: '/admin/customer/changeStatus',
      baseURL: baseUrl,
      method: 'post',
      withCredentials: false,
      data
    })
  }
```

### 错误例子

```js
  情况一：
      export function getUserList(data) { //获取用户列表
        return request({
          url: '/admin/customer/list',
          baseURL: baseUrl,
          method: 'get',
          withCredentials: false,
          data
        })
      }

  注：将params修改为data，是不能请求成功的，因为get请求中不存在data这个选项。

  情况二：
    export function changeStatus(params) { //修改状态
      return request({
        url: '/admin/customer/changeStatus',
        baseURL: baseUrl,
        method: 'post',
        withCredentials: false,
        params
      })
    }
    
  注：将data修改为params，请求参数会出现在请求地址后面，数组和对象会出现错误。
```
