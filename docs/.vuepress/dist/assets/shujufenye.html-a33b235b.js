import{_ as n,p as a,q as s,Y as e}from"./framework-aa5c4115.js";const t={},p=e(`<h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><p>前端分页，后端分页</p><h3 id="分页原理" tabindex="-1"><a class="header-anchor" href="#分页原理" aria-hidden="true">#</a> 分页原理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>分页显示就是将数据库中的数据集，分成一段一段的来显示.
这里需要两个初始的参数：
  每页的条数 $PageSize
  当前页面 $Page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php实现分页" tabindex="-1"><a class="header-anchor" href="#php实现分页" aria-hidden="true">#</a> php实现分页</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 主要是使用SQL的limit</span>

<span class="token comment">// 列表</span>
<span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">$Page</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$PageSize</span><span class="token punctuation">,</span><span class="token variable">$PageSize</span><span class="token punctuation">)</span>
<span class="token comment">// 总条数</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">)</span>
<span class="token comment">//总页数</span>
<span class="token function">ceil</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token variable">$PageSize</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端实现分页" tabindex="-1"><a class="header-anchor" href="#前端实现分页" aria-hidden="true">#</a> 前端实现分页</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 主要是使用数组的slice</span>

<span class="token comment">// 列表</span>
data<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> PageSize<span class="token punctuation">,</span> Page <span class="token operator">*</span> PageSize<span class="token punctuation">)</span>
<span class="token comment">// 总条数</span>
data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//总页数</span>
<span class="token function">ceil</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> $PageSize<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[p];function c(l,o){return a(),s("div",null,i)}const d=n(t,[["render",c],["__file","shujufenye.html.vue"]]);export{d as default};
