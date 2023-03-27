---
title: vuepress使用jsDelivr进行CDN加速
date: 2022-12-28
keys:
 - '18c3660888faaed8348796b5b8c89fbc'
tags:
 - vuepress
categories:
 - other
---

### github加速
```
1、新建GitHub公共仓库
2、添加需要存放的图片、音频等等
3、发布releases，填写版本号
4、使用 https://cdn.jsdelivr.net/gh/用户名/仓库名称@发布版本号/文件路径 访问

注意：
  jsdelivr加速的文件不能超过50M，可以使用多个
  发布版本号：可以不填，默认master
  文件路径：建议放在文件夹下面
```

### vuepress加速
```js
// 在config.js中，添加以下代码

configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV
    //判断是否是生产环境
    if(NODE_ENV === 'production'){
      return {
        output: {
          publicPath: 'https://cdn.jsdelivr.net/gh/用户名/仓库名称/'
        },
        resolve: {
          //配置路径别名
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }else{
      return {
        resolve: {
          //配置路径别名
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }
  }
```
