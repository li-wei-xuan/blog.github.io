import{_ as i,o as e,c as n,a as t}from"./app-EaupiRXX.js";const a={},d=t(`<h2 id="git忽略文件提交的三种方式" tabindex="-1"><a class="header-anchor" href="#git忽略文件提交的三种方式"><span>git忽略文件提交的三种方式</span></a></h2><h3 id="gitignore文件" tabindex="-1"><a class="header-anchor" href="#gitignore文件"><span>.gitignore文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在项目.gitignore文件中，设置对应的忽略规则，来管理项目的提交行为

如：
  .DS_Store
  node_modules/
  dist/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在git项目的设置中指定排除文件" tabindex="-1"><a class="header-anchor" href="#在git项目的设置中指定排除文件"><span>在git项目的设置中指定排除文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>这种方式只是临时指定该项目的行为，需要编辑当前项目下的 .git/info/exclude 文件，然后将需要忽略提交的文件写入其中。

需要注意的是，这种方式指定的忽略文件的根目录是项目根目录。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义git全局的-gitignore-文件" tabindex="-1"><a class="header-anchor" href="#定义git全局的-gitignore-文件"><span>定义Git全局的 .gitignore 文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>除了可以在项目中定义 .gitignore 文件外，还可以设置全局的 git .gitignore 文件来管理所有Git项目的行为。
这种方式在不同的项目开发者之间是不共享的，是属于项目之上Git应用级别的行为。

这种方式也需要创建相应的 .gitignore 文件，可以放在任意位置。然后在使用以下命令配置Git：
  git config --global core.excludesfile ~/.gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore规则" tabindex="-1"><a class="header-anchor" href="#gitignore规则"><span>gitignore规则</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>空行或者以#开头的行是不生效的
  # *.a

忽略所有的.a格式的文件
  *.a

但是要追踪lib.a，即lib.a不会被忽略，尽管上面已经忽略了所有的.a文件，这就是!的作用
  !lib.a

只忽略当前文件夹下面的TODO文件，而不会递归子文件夹
  /TODO

忽略所有build文件夹下面的文件和文件夹
  build/

忽略doc文件夹下面的.txt文件，但是不会递归子文件夹下面的.txt
  doc/*.txt

递归忽略doc文件夹下面的所有的.pdf文件
  doc/**/*.pdf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore规则不生效" tabindex="-1"><a class="header-anchor" href="#gitignore规则不生效"><span>gitignore规则不生效</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.gitignore文件只能忽略没有被track的文件，如果文件已被纳入版本管理中，则修改.gitignore是无效的

解决方法：
  git rm -r --cached . //删除本地缓存
  git add .  //提交
  git commit -m &#39;update .gitignore&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[d];function s(r,g){return e(),n("div",null,l)}const v=i(a,[["render",s],["__file","04.githuluetijiao.html.vue"]]),o=JSON.parse('{"path":"/docs/Git/04.githuluetijiao.html","title":"git忽略提交","lang":"zh-CN","frontmatter":{"title":"git忽略提交","date":"2022-12-02T00:00:00.000Z","tags":["git"]},"headers":[{"level":2,"title":"git忽略文件提交的三种方式","slug":"git忽略文件提交的三种方式","link":"#git忽略文件提交的三种方式","children":[{"level":3,"title":".gitignore文件","slug":"gitignore文件","link":"#gitignore文件","children":[]},{"level":3,"title":"在git项目的设置中指定排除文件","slug":"在git项目的设置中指定排除文件","link":"#在git项目的设置中指定排除文件","children":[]},{"level":3,"title":"定义Git全局的 .gitignore 文件","slug":"定义git全局的-gitignore-文件","link":"#定义git全局的-gitignore-文件","children":[]}]},{"level":2,"title":"gitignore规则","slug":"gitignore规则","link":"#gitignore规则","children":[]},{"level":2,"title":"gitignore规则不生效","slug":"gitignore规则不生效","link":"#gitignore规则不生效","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/Git/04.git忽略提交.md","readingTime":{"minutes":1.64,"words":491}}');export{v as comp,o as data};
