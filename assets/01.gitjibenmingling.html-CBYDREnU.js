import{_ as e}from"./git-BF_1X_ze.js";import{_ as i,o as t,c as l,a}from"./app-EaupiRXX.js";const n={},d=a('<p><img src="'+e+`" alt="git"></p><h2 id="创建仓库命令" tabindex="-1"><a class="header-anchor" href="#创建仓库命令"><span>创建仓库命令</span></a></h2><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init"><span>git init</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//初始化仓库
git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone"><span>git clone</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git clone 拷贝一份远程仓库，也就是下载一个项目
//[url] 是你要拷贝的项目。
git clone [url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交与修改" tabindex="-1"><a class="header-anchor" href="#提交与修改"><span>提交与修改</span></a></h2><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add"><span>git add</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//添加一个或多个文件到暂存区：
git add [file1] [file2] ...
//添加指定目录到暂存区，包括子目录：
git add [dir]
//添加当前目录下的所有文件到暂存区：
git add .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status"><span>git status</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git status 查看仓库当前的状态，显示有变更的文件
git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff"><span>git diff</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git diff 比较文件的不同，即暂存区和工作区的差异
//尚未缓存的改动
git diff
//查看已缓存的改动
git diff --cached
//查看已缓存的与未缓存的所有改动
git diff HEAD
//显示摘要而非整个 diff
git diff --stat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit"><span>git commit</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git commit	提交暂存区到本地仓库。
//[message] 可以是一些备注信息。
git commit -m [message]
//提交暂存区的指定文件到仓库区：
$ git commit [file1] [file2] ... -m [message]
//-a 参数设置修改文件后不需要执行 git add 命令，直接来提交
$ git commit -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset"><span>git reset</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git reset	回退版本。
git reset [--soft | --mixed | --hard] [HEAD]
//--mixed 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。
git reset  [HEAD]
//--soft 参数用于回退到某个版本：
git reset --soft HEAD
//--hard 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交：
git reset --hard HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="head说明" tabindex="-1"><a class="header-anchor" href="#head说明"><span>HEAD说明</span></a></h4><table><thead><tr><th style="text-align:left;">命令1</th><th style="text-align:left;">命令2</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">HEAD</td><td style="text-align:left;">HEAD~0</td><td style="text-align:left;">表示当前版本</td></tr><tr><td style="text-align:left;">HEAD^</td><td style="text-align:left;">HEAD~1</td><td style="text-align:left;">上一个版本</td></tr><tr><td style="text-align:left;">HEAD^^</td><td style="text-align:left;">HEAD~2</td><td style="text-align:left;">上上一个版本</td></tr><tr><td style="text-align:left;">HEAD^^^</td><td style="text-align:left;">HEAD~3</td><td style="text-align:left;">上上上一个版本</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;">...</td><td style="text-align:left;">...</td></tr></tbody></table><h3 id="git-rm" tabindex="-1"><a class="header-anchor" href="#git-rm"><span>git rm</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git rm	将文件从暂存区和工作区中删除。
//将文件从暂存区和工作区中删除
git rm &lt;file&gt;
//强制删除
git rm -f &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交日志" tabindex="-1"><a class="header-anchor" href="#提交日志"><span>提交日志</span></a></h2><h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log"><span>git log</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git log	查看历史提交记录
git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-blame" tabindex="-1"><a class="header-anchor" href="#git-blame"><span>git blame</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git blame	查看指定文件的修改记录
git blame &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作"><span>远程操作</span></a></h2><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote"><span>git remote</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git remote	远程仓库操作
//显示所有远程仓库
git remote -v
//显示某个远程仓库的信息
git remote show [remote]
//添加远程版本库(shortname 为本地的版本库)
git remote add [shortname] [url]
//其他相关命令：
git remote rm name  //删除远程仓库
git remote rename old_name new_name  //修改仓库名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-fetch" tabindex="-1"><a class="header-anchor" href="#git-fetch"><span>git fetch</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git fetch	从远程获取代码库
git fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull"><span>git pull</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git pull	下载远程代码并合并
//git pull 其实就是 git fetch 和 git merge FETCH_HEAD 的简写。
git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;
//将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。
git pull origin master:brantest
//如果远程分支是与当前分支合并，则冒号后面的部分可以省略。
git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push"><span>git push</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//git push	上传远程代码并合并
git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;
//如果本地版本与远程版本有差异，但又要强制推送可以使用 --force 参数
git push --force origin master
//删除主机的分支可以使用 --delete 参数，以下命令表示删除 origin 主机的 master 分支
git push origin --delete master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),s=[d];function r(g,c){return t(),l("div",null,s)}const u=i(n,[["render",r],["__file","01.gitjibenmingling.html.vue"]]),h=JSON.parse('{"path":"/docs/Git/01.gitjibenmingling.html","title":"git基本命令","lang":"zh-CN","frontmatter":{"title":"git基本命令","date":"2022-10-19T00:00:00.000Z","tags":["git"]},"headers":[{"level":2,"title":"创建仓库命令","slug":"创建仓库命令","link":"#创建仓库命令","children":[{"level":3,"title":"git init","slug":"git-init","link":"#git-init","children":[]},{"level":3,"title":"git clone","slug":"git-clone","link":"#git-clone","children":[]}]},{"level":2,"title":"提交与修改","slug":"提交与修改","link":"#提交与修改","children":[{"level":3,"title":"git add","slug":"git-add","link":"#git-add","children":[]},{"level":3,"title":"git status","slug":"git-status","link":"#git-status","children":[]},{"level":3,"title":"git diff","slug":"git-diff","link":"#git-diff","children":[]},{"level":3,"title":"git commit","slug":"git-commit","link":"#git-commit","children":[]},{"level":3,"title":"git reset","slug":"git-reset","link":"#git-reset","children":[]},{"level":3,"title":"git rm","slug":"git-rm","link":"#git-rm","children":[]}]},{"level":2,"title":"提交日志","slug":"提交日志","link":"#提交日志","children":[{"level":3,"title":"git log","slug":"git-log","link":"#git-log","children":[]},{"level":3,"title":"git blame","slug":"git-blame","link":"#git-blame","children":[]}]},{"level":2,"title":"远程操作","slug":"远程操作","link":"#远程操作","children":[{"level":3,"title":"git remote","slug":"git-remote","link":"#git-remote","children":[]},{"level":3,"title":"git fetch","slug":"git-fetch","link":"#git-fetch","children":[]},{"level":3,"title":"git pull","slug":"git-pull","link":"#git-pull","children":[]},{"level":3,"title":"git push","slug":"git-push","link":"#git-push","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1713348322000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":2},{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/Git/01.git基本命令.md","readingTime":{"minutes":2.95,"words":886}}');export{u as comp,h as data};
