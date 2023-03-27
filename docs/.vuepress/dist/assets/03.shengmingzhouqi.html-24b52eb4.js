import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e="/images/live.png",p={},c=t('<h1 id="vue生命周期" tabindex="-1"><a class="header-anchor" href="#vue生命周期" aria-hidden="true">#</a> Vue生命周期</h1><p><img src="'+e+`" alt="Vue生命周期"></p><h3 id="常用的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#常用的生命周期钩子" aria-hidden="true">#</a> 常用的生命周期钩子</h3><pre><code>mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
</code></pre><h3 id="关于销毁vue实例" tabindex="-1"><a class="header-anchor" href="#关于销毁vue实例" aria-hidden="true">#</a> 关于销毁Vue实例</h3><pre><code>销毁后借助Vue开发者工具看不到任何信息。
销毁后自定义事件会失效，但原生DOM事件依然有效。
一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。
</code></pre><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Vue生命周期 */</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;updated&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[c];function i(u,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","03.shengmingzhouqi.html.vue"]]);export{r as default};
