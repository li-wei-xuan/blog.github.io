import{_ as e,o as i,c as n,a as l}from"./app-EaupiRXX.js";const s={},d=l(`<h3 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew"><span>Homebrew</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--使用国内镜像源安装--&gt;
​/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;

&lt;!--查看brew当前源--&gt;
cd &quot;$(brew --repo)&quot; &amp;&amp; git remote -v

&lt;!--切换源(阿里云)--&gt;
git -C &quot;$(brew --repo homebrew/core)&quot; remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php安装与使用" tabindex="-1"><a class="header-anchor" href="#php安装与使用"><span>php安装与使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--查看PHP版本--&gt;
brew search php

&lt;!--使用brew安装(默认最高)--&gt;
brew install php@7.4

&lt;!--开启php-fpm--&gt;
sudo php-fpm

&lt;!--关闭php-fpm--&gt;
sudo  killall  php-fpm

&lt;!--查找php-config--&gt;
sudo find /usr  -name php-config  
php-config所在位置：/usr/local/Cellar/php@7.4/7.4.13_1/bin/php-config

&lt;!--php.ini文件--&gt;
/usr/local/etc/php/7.4/php.ini

&lt;!--查找php--&gt;
which php .      which php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql安装与使用" tabindex="-1"><a class="header-anchor" href="#mysql安装与使用"><span>mysql安装与使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--查看mysql--&gt;
brew search mysql

&lt;!--安装mysql--&gt;
brew install mysql@5.7

&lt;!--启动mysql--&gt;
brew services start mysql@5.7

&lt;!--停止mysql--&gt;
brew services stop mysql@5.7

&lt;!--mysql配置文件--&gt;
/usr/local/etc/my.cnf

&lt;!--mysql位置--&gt;
/usr/local/Cellar/mysql@5.7/5.7.36/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis安装与使用" tabindex="-1"><a class="header-anchor" href="#redis安装与使用"><span>redis安装与使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--查看redis--&gt;
brew search redis

&lt;!--启动redis--&gt;
redis-server 

&lt;!--停止redis--&gt;
killall redis-server

&lt;!--执行文件位置--&gt;
/usr/local/Cellar/redis/6.2.6/bin/redis-cli
/usr/local/Cellar/redis/6.2.6/bin/redis-server

&lt;!--配置文件--&gt;
/usr/local/etc/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx安装与使用" tabindex="-1"><a class="header-anchor" href="#nginx安装与使用"><span>nginx安装与使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--查看nginx--&gt;
brew search nginx

&lt;!--安装nginx--&gt;
brew install nginx

&lt;!--查看版本号--&gt;
nginx -v

&lt;!--启动nginx--&gt;
sudo nginx

&lt;!--关闭nginx--&gt;
sudo nginx -s stop

&lt;!--默认端口是 8080 ，配置文件的位置 --&gt;
/usr/local/etc/nginx

&lt;!--重加载配置文件--&gt;
sudo nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-redis扩展安装" tabindex="-1"><a class="header-anchor" href="#php-redis扩展安装"><span>php-redis扩展安装</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd /usr/local/opt/php/bin

&lt;!--使用pecl安装php-redis扩展，安装过程中会自动写入到php.ini中--&gt;
$ ./pecl install redis

#是否开启igbinary serializer，输入yes（是），no（否）
enable igbinary serializer support? [no] :yes

#是否开启 lzf compression，输入yes（是），no（否）
enable lzf compression support? [no] :yes

#是否开启 zstd compression，输入yes（是），no（否）
enable zstd compression support? [no] :no

&lt;!--编辑 php.ini 配置文件--&gt;
$ vim /usr/local/etc/php/8.1/php.ini

&lt;!--注释（或删除）文件顶部下面内容，保存--&gt;
&lt;!--有可能出现因不按顺序而报错--&gt;
extension=&quot;redis.so&quot;
extension=&quot;igbinary.so&quot;

&lt;!--进入扩展配置文件目录--&gt;
$ cd /usr/local/etc/php/8.1/conf.d

&lt;!--创建ext-redis.ini--&gt;
$ vi ext-redis.ini

&lt;!--写入下面内容，保存--&gt;
extension=&quot;redis.so&quot;

&lt;!--创建ext-igbinary.ini--&gt;
$ vi ext-igbinary.ini

&lt;!--写入下面内容，保存--&gt;
extension=&quot;igbinary.so&quot;

&lt;!--重启php、nginx服务--&gt;
&lt;!--验证是否安装成功--&gt;
$ php -m | grep redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swoole安装与使用" tabindex="-1"><a class="header-anchor" href="#swoole安装与使用"><span>swoole安装与使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--查看swoole--&gt;
cd /usr/local/opt/php/bin

&lt;!-- 安装swoole --&gt;
./pecl install swoole

&lt;!-- 修改php.ini --&gt;
extension=swoole.so

&lt;!--查看是否安装成功--&gt;
php -m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mac自定义命令" tabindex="-1"><a class="header-anchor" href="#mac自定义命令"><span>mac自定义命令</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 进入文件编辑
cd ./.zshrc
// 编辑命令
alias cdwww=&#39;cd /usr/local/var/www&#39;
// 更新
source ./.zshrc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),a=[d];function r(v,t){return i(),n("div",null,a)}const m=e(s,[["render",r],["__file","machuanjinganzhuang.html.vue"]]),u=JSON.parse('{"path":"/blogs/mac/machuanjinganzhuang.html","title":"mac环境安装","lang":"zh-CN","frontmatter":{"title":"mac环境安装","date":"2023-02-13T00:00:00.000Z","tags":["mac"],"categories":["mac"]},"headers":[{"level":3,"title":"Homebrew","slug":"homebrew","link":"#homebrew","children":[]},{"level":3,"title":"php安装与使用","slug":"php安装与使用","link":"#php安装与使用","children":[]},{"level":3,"title":"mysql安装与使用","slug":"mysql安装与使用","link":"#mysql安装与使用","children":[]},{"level":3,"title":"redis安装与使用","slug":"redis安装与使用","link":"#redis安装与使用","children":[]},{"level":3,"title":"nginx安装与使用","slug":"nginx安装与使用","link":"#nginx安装与使用","children":[]},{"level":3,"title":"php-redis扩展安装","slug":"php-redis扩展安装","link":"#php-redis扩展安装","children":[]},{"level":3,"title":"swoole安装与使用","slug":"swoole安装与使用","link":"#swoole安装与使用","children":[]},{"level":3,"title":"mac自定义命令","slug":"mac自定义命令","link":"#mac自定义命令","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/mac/mac环境安装.md","readingTime":{"minutes":1.76,"words":527}}');export{m as comp,u as data};
