import{_ as e}from"./git-91f99793.js";import{_ as i,p as t,q as a,w as d,Y as n}from"./framework-aa5c4115.js";const l={},s=n('<p><img src="'+e+`" alt="git"></p><h2 id="创建仓库命令" tabindex="-1"><a class="header-anchor" href="#创建仓库命令" aria-hidden="true">#</a> 创建仓库命令</h2><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//初始化仓库
git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git clone 拷贝一份远程仓库，也就是下载一个项目
//[url] 是你要拷贝的项目。
git clone [url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交与修改" tabindex="-1"><a class="header-anchor" href="#提交与修改" aria-hidden="true">#</a> 提交与修改</h2><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//添加一个或多个文件到暂存区：
git add [file1] [file2] ...
//添加指定目录到暂存区，包括子目录：
git add [dir]
//添加当前目录下的所有文件到暂存区：
git add .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status" aria-hidden="true">#</a> git status</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git status 查看仓库当前的状态，显示有变更的文件
git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff" aria-hidden="true">#</a> git diff</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git diff 比较文件的不同，即暂存区和工作区的差异
//尚未缓存的改动
git diff
//查看已缓存的改动
git diff --cached
//查看已缓存的与未缓存的所有改动
git diff HEAD
//显示摘要而非整个 diff
git diff --stat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git commit	提交暂存区到本地仓库。
//[message] 可以是一些备注信息。
git commit -m [message]
//提交暂存区的指定文件到仓库区：
$ git commit [file1] [file2] ... -m [message]
//-a 参数设置修改文件后不需要执行 git add 命令，直接来提交
$ git commit -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git reset	回退版本。
git reset [--soft | --mixed | --hard] [HEAD]
//--mixed 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。
git reset  [HEAD]
//--soft 参数用于回退到某个版本：
git reset --soft HEAD
//--hard 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交：
git reset --hard HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="head说明" tabindex="-1"><a class="header-anchor" href="#head说明" aria-hidden="true">#</a> HEAD说明</h4><table><thead><tr><th style="text-align:left;">命令1</th><th style="text-align:left;">命令2</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">HEAD</td><td style="text-align:left;">HEAD~0</td><td style="text-align:left;">表示当前版本</td></tr><tr><td style="text-align:left;">HEAD^</td><td style="text-align:left;">HEAD~1</td><td style="text-align:left;">上一个版本</td></tr><tr><td style="text-align:left;">HEAD^^</td><td style="text-align:left;">HEAD~2</td><td style="text-align:left;">上上一个版本</td></tr><tr><td style="text-align:left;">HEAD^^^</td><td style="text-align:left;">HEAD~3</td><td style="text-align:left;">上上上一个版本</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;">...</td><td style="text-align:left;">...</td></tr></tbody></table><h3 id="git-rm" tabindex="-1"><a class="header-anchor" href="#git-rm" aria-hidden="true">#</a> git rm</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git rm	将文件从暂存区和工作区中删除。
//将文件从暂存区和工作区中删除
git rm &lt;file&gt;
//强制删除
git rm -f &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交日志" tabindex="-1"><a class="header-anchor" href="#提交日志" aria-hidden="true">#</a> 提交日志</h2><h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git log	查看历史提交记录
git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-blame" tabindex="-1"><a class="header-anchor" href="#git-blame" aria-hidden="true">#</a> git blame</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git blame	查看指定文件的修改记录
git blame &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作" aria-hidden="true">#</a> 远程操作</h2><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git remote	远程仓库操作
//显示所有远程仓库
git remote -v
//显示某个远程仓库的信息
git remote show [remote]
//添加远程版本库(shortname 为本地的版本库)
git remote add [shortname] [url]
//其他相关命令：
git remote rm name  //删除远程仓库
git remote rename old_name new_name  //修改仓库名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-fetch" tabindex="-1"><a class="header-anchor" href="#git-fetch" aria-hidden="true">#</a> git fetch</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git fetch	从远程获取代码库
git fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git pull	下载远程代码并合并
//git pull 其实就是 git fetch 和 git merge FETCH_HEAD 的简写。
git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;
//将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。
git pull origin master:brantest
//如果远程分支是与当前分支合并，则冒号后面的部分可以省略。
git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//git push	上传远程代码并合并
git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;
//如果本地版本与远程版本有差异，但又要强制推送可以使用 --force 参数
git push --force origin master
//删除主机的分支可以使用 --delete 参数，以下命令表示删除 origin 主机的 master 分支
git push origin --delete master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function r(c,v){return t(),a("div",null,[d(" https://www.runoob.com/git/git-basic-operations.html "),s])}const m=i(l,[["render",r],["__file","01.gitjibenmingling.html.vue"]]);export{m as default};
