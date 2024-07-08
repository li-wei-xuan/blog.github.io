import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const i={},l=e(`<h3 id="php标记" tabindex="-1"><a class="header-anchor" href="#php标记"><span>php标记</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php注释" tabindex="-1"><a class="header-anchor" href="#php注释"><span>php注释</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>单行注释
<span class="token comment">//echo 123;</span>

多行注释
<span class="token comment">/*
  var_dump(123);
  echo &quot;123&quot;;
*/</span>

文档、函数、语法提示型注释
<span class="token doc-comment comment">/**
 * 获取积分记录
 * <span class="token keyword">@author</span> li 2022/4/26 12:12 下午
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量命名规则" tabindex="-1"><a class="header-anchor" href="#变量命名规则"><span>变量命名规则</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>变量以美元符 $ 开头，然后是变量名
变量名由字母或下划线开头，由字母，下划线，数字组成
变量名区分大小写
变量名里面不能够有标点符号<span class="token punctuation">,</span>空格 除了下划线以外
php是弱类型的语言，不需要事先声明变量的数据类型
php可以不用显示的声明变量就直接使用，不过好的编码习惯：所有的变量在使用前应该进行声明
可以使用 驼峰命名法、匈牙利命名法、下划线命名法 来给变量进行命名

大驼峰式命名：<span class="token variable">$FirstName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiaoming&#39;</span>
小驼峰式命名：<span class="token variable">$firstName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiaoming&#39;</span>
下划线命名法：<span class="token variable">$first_name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiaoming&#39;</span>
匈牙利命名法：<span class="token variable">$c_szfn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiaoming&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值"><span>变量赋值</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>值赋值：就是将赋值表达式的值复制到变量
引用赋值：php4引入了引用赋值功能，创建的变量与另一个变量引用的内容相同
<span class="token variable">$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiaoming&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$test1</span> <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token variable">$test</span><span class="token punctuation">;</span>  <span class="token comment">//把$test的内存空间地址赋值给$test1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的变量" tabindex="-1"><a class="header-anchor" href="#变量的变量"><span>变量的变量</span></a></h3><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiao&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;ming&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$hello</span><span class="token punctuation">;</span> <span class="token comment">//world</span>
<span class="token keyword">echo</span> <span class="token variable">$test</span><span class="token punctuation">;</span> <span class="token comment">//hello</span>
<span class="token keyword">echo</span> <span class="token variable">$</span><span class="token punctuation">{</span><span class="token variable">$test</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[l];function t(c,d){return s(),a("div",null,p)}const r=n(i,[["render",t],["__file","01.bianliangshujuleixing.html.vue"]]),u=JSON.parse('{"path":"/docs/PHP/01.bianliangshujuleixing.html","title":"php变量数据类型","lang":"zh-CN","frontmatter":{"title":"php变量数据类型","date":"2022-11-09T00:00:00.000Z","tags":["php"]},"headers":[{"level":3,"title":"php标记","slug":"php标记","link":"#php标记","children":[]},{"level":3,"title":"php注释","slug":"php注释","link":"#php注释","children":[]},{"level":3,"title":"变量命名规则","slug":"变量命名规则","link":"#变量命名规则","children":[]},{"level":3,"title":"变量赋值","slug":"变量赋值","link":"#变量赋值","children":[]},{"level":3,"title":"变量的变量","slug":"变量的变量","link":"#变量的变量","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/PHP/01.变量数据类型.md","readingTime":{"minutes":1.19,"words":356}}');export{r as comp,u as data};
