---
title: 宝塔webhook
date: 2022-12-28
tags:
 - git
categories:
 - other
---

### gitee镜像仓库
```
<!-- 用gitee镜像仓库实现github的自动拉取，加快github的拉取速度 -->

镜像仓库 -> 登录github -> 获取私人令牌(建议设置永久) -> gitee添加pull和push -> 实现自动同步
```

### webhook与gitee
```
<!-- 使用宝塔webhook来自动更新gitee仓库代码 -->
<!-- 宝塔webhook设置 -->
  添加hook，设置名称，脚本，生成密钥，地址

<!-- gitee设置 -->
  仓库管理webhoks -> 填写密钥和地址，测试连通性
```

#### 脚本
```sh
#!/bin/bash

echo ""
#输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
#判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then
          echo "param参数错误"
          echo "End"
          exit
fi
#git项目路径
gitPath="/www/wwwroot/$1"
#git网址 码云仓库地址
gitHttp="https://gitee.com/yourname/$1.git"
echo "Web站点路径：$gitPath"
#判断项目路径是否存在
if [ -d "$gitPath" ]; then
        cd $gitPath
        #判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                sudo git clone $gitHttp gittemp
                sudo mv gittemp/.git .
                sudo rm -rf gittemp
        fi
        echo "拉取最新的项目文件"
        #sudo git reset --hard origin/master
        git reset --hard origin/master
        sudo git pull        
        echo "设置目录权限"
        sudo chown -R www:www $gitPath
        echo "End"
        exit
else
        echo "该项目路径不存在"
        echo "End"
        exit
fi
```
