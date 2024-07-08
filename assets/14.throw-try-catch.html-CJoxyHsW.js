import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},c=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>try 语句测试代码块的错误。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-和-catch" tabindex="-1"><a class="header-anchor" href="#try-和-catch"><span>try 和 catch</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">// try 语句允许我们定义在执行时进行错误测试的代码块。</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="finally-语句" tabindex="-1"><a class="header-anchor" href="#finally-语句"><span>finally 语句</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">// try 语句允许我们定义在执行时进行错误测试的代码块。</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="throw-语句" tabindex="-1"><a class="header-anchor" href="#throw-语句"><span>Throw 语句</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// throw 语句允许我们创建自定义错误。</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[c];function i(o,l){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","14.throw-try-catch.html.vue"]]),d=JSON.parse('{"path":"/docs/JavaScript/14.throw-try-catch.html","title":"throw-try-catch","lang":"zh-CN","frontmatter":{"title":"throw-try-catch","date":"2023-01-14T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"try 和 catch","slug":"try-和-catch","link":"#try-和-catch","children":[]},{"level":2,"title":"finally 语句","slug":"finally-语句","link":"#finally-语句","children":[]},{"level":2,"title":"Throw 语句","slug":"throw-语句","link":"#throw-语句","children":[]}],"git":{"createdTime":1680588280000,"updatedTime":1680588280000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/JavaScript/14.throw-try-catch.md","readingTime":{"minutes":1.36,"words":407}}');export{r as comp,d as data};
