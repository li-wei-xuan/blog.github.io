---
title: mac环境安装
date: 2023-02-13
tags:
 - mac
categories:
 - mac
---

### Homebrew

```
<!--使用国内镜像源安装-->
​/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

<!--查看brew当前源-->
cd "$(brew --repo)" && git remote -v

<!--切换源(阿里云)-->
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
```

### php安装与使用

```
<!--查看PHP版本-->
brew search php

<!--使用brew安装(默认最高)-->
brew install php@7.4

<!--开启php-fpm-->
sudo php-fpm

<!--关闭php-fpm-->
sudo  killall  php-fpm

<!--查找php-config-->
sudo find /usr  -name php-config  
php-config所在位置：/usr/local/Cellar/php@7.4/7.4.13_1/bin/php-config

<!--php.ini文件-->
/usr/local/etc/php/7.4/php.ini

<!--查找php-->
which php .      which php-fpm
```

### mysql安装与使用

```
<!--查看mysql-->
brew search mysql

<!--安装mysql-->
brew install mysql@5.7

<!--启动mysql-->
brew services start mysql@5.7

<!--停止mysql-->
brew services stop mysql@5.7

<!--mysql配置文件-->
/usr/local/etc/my.cnf

<!--mysql位置-->
/usr/local/Cellar/mysql@5.7/5.7.36/bin
```

### redis安装与使用

```
<!--查看redis-->
brew search redis

<!--启动redis-->
redis-server 

<!--停止redis-->
killall redis-server

<!--执行文件位置-->
/usr/local/Cellar/redis/6.2.6/bin/redis-cli
/usr/local/Cellar/redis/6.2.6/bin/redis-server

<!--配置文件-->
/usr/local/etc/redis.conf
```

### nginx安装与使用
```
<!--查看nginx-->
brew search nginx

<!--安装nginx-->
brew install nginx

<!--查看版本号-->
nginx -v

<!--启动nginx-->
sudo nginx

<!--关闭nginx-->
sudo nginx -s stop

<!--默认端口是 8080 ，配置文件的位置 -->
/usr/local/etc/nginx

<!--重加载配置文件-->
sudo nginx -s reload
```

### php-redis扩展安装
```
$ cd /usr/local/opt/php/bin

<!--使用pecl安装php-redis扩展，安装过程中会自动写入到php.ini中-->
$ ./pecl install redis

#是否开启igbinary serializer，输入yes（是），no（否）
enable igbinary serializer support? [no] :yes

#是否开启 lzf compression，输入yes（是），no（否）
enable lzf compression support? [no] :yes

#是否开启 zstd compression，输入yes（是），no（否）
enable zstd compression support? [no] :no

<!--编辑 php.ini 配置文件-->
$ vim /usr/local/etc/php/8.1/php.ini

<!--注释（或删除）文件顶部下面内容，保存-->
<!--有可能出现因不按顺序而报错-->
extension="redis.so"
extension="igbinary.so"

<!--进入扩展配置文件目录-->
$ cd /usr/local/etc/php/8.1/conf.d

<!--创建ext-redis.ini-->
$ vi ext-redis.ini

<!--写入下面内容，保存-->
extension="redis.so"

<!--创建ext-igbinary.ini-->
$ vi ext-igbinary.ini

<!--写入下面内容，保存-->
extension="igbinary.so"

<!--重启php、nginx服务-->
<!--验证是否安装成功-->
$ php -m | grep redis
```

### swoole安装与使用
```
<!--查看swoole-->
cd /usr/local/opt/php/bin

<!-- 安装swoole -->
./pecl install swoole

<!-- 修改php.ini -->
extension=swoole.so

<!--查看是否安装成功-->
php -m
```

### mac自定义命令

```
// 进入文件编辑
cd ./.zshrc
// 编辑命令
alias cdwww='cd /usr/local/var/www'
// 更新
source ./.zshrc

```

