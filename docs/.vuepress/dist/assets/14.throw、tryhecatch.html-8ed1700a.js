import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e={},p=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try 语句测试代码块的错误。
catch 语句处理错误。
throw 语句创建自定义错误。
finally 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。

语法
  try {
    ...    //异常的抛出
  } catch(e) {
    ...    //异常的捕获与处理
  } finally {
    ...    //结束处理
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-和-catch" tabindex="-1"><a class="header-anchor" href="#try-和-catch" aria-hidden="true">#</a> try 和 catch</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// try 语句允许我们定义在执行时进行错误测试的代码块。</span>
  <span class="token comment">// catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。</span>
  <span class="token comment">// JavaScript 语句 try 和 catch 是成对出现的。</span>
  <span class="token keyword">var</span> txt <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">var</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">adddlert</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// adddlert is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="finally-语句" tabindex="-1"><a class="header-anchor" href="#finally-语句" aria-hidden="true">#</a> finally 语句</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// try 语句允许我们定义在执行时进行错误测试的代码块。</span>
  <span class="token comment">// catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。</span>
  <span class="token comment">// JavaScript 语句 try 和 catch 是成对出现的。</span>
  <span class="token keyword">var</span> txt <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">var</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">adddlert</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;finally&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// adddlert is not defined</span>
  <span class="token comment">// finally</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="throw-语句" tabindex="-1"><a class="header-anchor" href="#throw-语句" aria-hidden="true">#</a> Throw 语句</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// throw 语句允许我们创建自定义错误。</span>
<span class="token comment">// 正确的技术术语是：创建或抛出异常（exception）。</span>
<span class="token comment">// 如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。</span>
<span class="token comment">// 从 catch 中抛出错误</span>
<span class="token keyword">var</span> txt <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">var</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> num <span class="token operator">=</span> val
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;值小于5&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;值等于7&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;值大于10&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 值小于5</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token comment">// 值等于7</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 值大于10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","14.throw、tryhecatch.html.vue"]]);export{r as default};
