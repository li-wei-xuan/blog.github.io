import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const i={},p=e(`<h3 id="php标记" tabindex="-1"><a class="header-anchor" href="#php标记" aria-hidden="true">#</a> php标记</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php注释" tabindex="-1"><a class="header-anchor" href="#php注释" aria-hidden="true">#</a> php注释</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>单行注释
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量命名规则" tabindex="-1"><a class="header-anchor" href="#变量命名规则" aria-hidden="true">#</a> 变量命名规则</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>变量以美元符 $ 开头，然后是变量名
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值" aria-hidden="true">#</a> 变量赋值</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>值赋值：就是将赋值表达式的值复制到变量
引用赋值：php4引入了引用赋值功能，创建的变量与另一个变量引用的内容相同
<span class="token variable">$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiaoming&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$test1</span> <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token variable">$test</span><span class="token punctuation">;</span>  <span class="token comment">//把$test的内存空间地址赋值给$test1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的变量" tabindex="-1"><a class="header-anchor" href="#变量的变量" aria-hidden="true">#</a> 变量的变量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xiao&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;ming&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$hello</span><span class="token punctuation">;</span> <span class="token comment">//world</span>
<span class="token keyword">echo</span> <span class="token variable">$test</span><span class="token punctuation">;</span> <span class="token comment">//hello</span>
<span class="token keyword">echo</span> <span class="token variable">$</span><span class="token punctuation">{</span><span class="token variable">$test</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[p];function t(c,d){return s(),a("div",null,l)}const r=n(i,[["render",t],["__file","01.bianliangshujuleixing.html.vue"]]);export{r as default};
