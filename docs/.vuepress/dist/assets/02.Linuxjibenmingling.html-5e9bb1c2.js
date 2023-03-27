import{_ as e,p as d,q as t,Y as a}from"./framework-aa5c4115.js";const i={},n=a(`<h3 id="pwd命令" tabindex="-1"><a class="header-anchor" href="#pwd命令" aria-hidden="true">#</a> pwd命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：显示用户当前所在的目录

格式：pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ls命令" tabindex="-1"><a class="header-anchor" href="#ls命令" aria-hidden="true">#</a> ls命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：对于目录，该命令列出该目录下的所有子目录与文件。对于文件，将列出文件名以及其他信息

格式：ls [选项][目录或文件]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-a</td><td>查看当前目录下的文件，包括隐藏文件</td></tr><tr><td>-l</td><td>长格式显示文件</td></tr><tr><td>-lh</td><td>以方便阅读的长格式显示</td></tr></tbody></table><h3 id="cd命令" tabindex="-1"><a class="header-anchor" href="#cd命令" aria-hidden="true">#</a> cd命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：改变工作目录。将当前工作目录改变到指定的目录下

格式：cd 目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td>cd ..</td><td>返回上一级目录</td></tr><tr><td>cd ../..</td><td>返回上两级目录</td></tr><tr><td>cd ~</td><td>切换到家目录</td></tr><tr><td>cd /</td><td>切换到根目录</td></tr><tr><td>cd /home/lx/linux1/</td><td>绝对路径：从家目录出发，直到想要去的目录</td></tr><tr><td>cd …/lx/</td><td>相对路径：从当前目录出发，直到想去的目录</td></tr></tbody></table><h3 id="man命令" tabindex="-1"><a class="header-anchor" href="#man命令" aria-hidden="true">#</a> man命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：Linux的命令有很多参数，我们不可能全记住，我们可以通过查看联机手册获取帮助。访问Linux手册页的命令是man

格式：man 其他命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grep命令" tabindex="-1"><a class="header-anchor" href="#grep命令" aria-hidden="true">#</a> grep命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：用于查找文件里符合条件的字符串

格式：grep [选项] &#39;查找字符串&#39; 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项-1" tabindex="-1"><a class="header-anchor" href="#常用选项-1" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-a</td><td>将binary文件以text文件的方式查找数据</td></tr><tr><td>-c</td><td>计算找到 ‘查找字符串’ 的次数</td></tr><tr><td>-i</td><td>忽略大小写的区别，即把大小写视为相同</td></tr><tr><td>-v</td><td>反向选择，即显示出没有 ‘查找字符串’ 内容的那一行</td></tr></tbody></table><h3 id="find命令" tabindex="-1"><a class="header-anchor" href="#find命令" aria-hidden="true">#</a> find命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：用来在指定目录下查找文件

格式：find [路径] [选项] 操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项-2" tabindex="-1"><a class="header-anchor" href="#常用选项-2" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-name test</td><td>查询指定目录下,命名为test的文件</td></tr><tr><td>-size +100k</td><td>查询指定目录下，文件大于100K的文件</td></tr><tr><td>-ctime n</td><td>查询指定目录下，在过去n天内被修改过的文件</td></tr></tbody></table><h3 id="chmod命令" tabindex="-1"><a class="header-anchor" href="#chmod命令" aria-hidden="true">#</a> chmod命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：控制用户对文件的权限的命令

格式：chmod [选项] 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项-3" tabindex="-1"><a class="header-anchor" href="#常用选项-3" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-r</td><td>赋予读取权限</td></tr><tr><td>-w</td><td>赋予写入权限</td></tr><tr><td>-x</td><td>赋予执行权限</td></tr><tr><td>777</td><td>赋予可读、可写、可执行权限（读：4，写：2，执行：1）</td></tr></tbody></table><h3 id="ps命令" tabindex="-1"><a class="header-anchor" href="#ps命令" aria-hidden="true">#</a> ps命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：用来列出系统中当前正在运行的那些进程，类似于 windows 的任务管理器。

格式：ps [选项]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项-4" tabindex="-1"><a class="header-anchor" href="#常用选项-4" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-A</td><td>列出所有的进程 （重要）</td></tr><tr><td>-ef</td><td>查看全格式的全部进程 （重要）</td></tr><tr><td>-w</td><td>显示加宽可以显示较多的资讯</td></tr><tr><td>-au</td><td>显示较详细的资讯</td></tr><tr><td>-aux</td><td>显示所有包含其他使用者的行程</td></tr></tbody></table><h3 id="kill命令" tabindex="-1"><a class="header-anchor" href="#kill命令" aria-hidden="true">#</a> kill命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：用于删除执行中的程序或工作

格式：kill [选项]/[信号] 进程号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项-5" tabindex="-1"><a class="header-anchor" href="#常用选项-5" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-l</td><td>参数会列出全部的信息名称。</td></tr><tr><td>-s</td><td>指定要送出的信息。</td></tr></tbody></table><h4 id="常用信号" tabindex="-1"><a class="header-anchor" href="#常用信号" aria-hidden="true">#</a> 常用信号</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-1 (HUP)</td><td>重新加载进程</td></tr><tr><td>-9 (KILL)</td><td>杀死一个进程。(重点)</td></tr><tr><td>-15 (TERM)</td><td>正常停止一个进程。</td></tr></tbody></table><h3 id="tail命令" tabindex="-1"><a class="header-anchor" href="#tail命令" aria-hidden="true">#</a> tail命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：查看测试项目的日志
说明：一般测试的项目里面，有个logs的目录文件，会存放日志文件，有个xxx.out的文件，可以用tail -f 动态实时查看后端日志

格式：tail [选项] 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用选项-6" tabindex="-1"><a class="header-anchor" href="#常用选项-6" aria-hidden="true">#</a> 常用选项</h4><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-f</td><td>实时读取</td></tr><tr><td>-1000</td><td>查看最近1000行日志</td></tr></tbody></table><h3 id="netstat命令" tabindex="-1"><a class="header-anchor" href="#netstat命令" aria-hidden="true">#</a> netstat命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：查看端口

格式：netstat -anp | grep 端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date-查看当前系统时间" tabindex="-1"><a class="header-anchor" href="#date-查看当前系统时间" aria-hidden="true">#</a> date 查看当前系统时间</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> date &#39;+%a&#39; 星期几
       +%A  星期几
       +%b   月份 
       +%B   月份
       +%c   直接显示日期与时间
       +%d   日
       +%D   直接显示日期
       +%F   日期(yyyy-mm-dd)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="echo打印" tabindex="-1"><a class="header-anchor" href="#echo打印" aria-hidden="true">#</a> echo打印</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打印常量 直接打印
打印变量 变量前加$
打印命令 用反引号把命令引起来
终端间传递信息 echo 内容&gt;/dev/pts/终端号

echo -e  &quot;要打印的东西  \\c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ping命令" tabindex="-1"><a class="header-anchor" href="#ping命令" aria-hidden="true">#</a> ping命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：检测是否与主机连通

格式：ping 地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),r=[n];function s(l,h){return d(),t("div",null,r)}const v=e(i,[["render",s],["__file","02.Linuxjibenmingling.html.vue"]]);export{v as default};
