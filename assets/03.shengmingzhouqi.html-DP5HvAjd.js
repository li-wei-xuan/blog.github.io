import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},p=t(`<h1 id="vue生命周期" tabindex="-1"><a class="header-anchor" href="#vue生命周期"><span>Vue生命周期</span></a></h1><p><img src="https://img.webvipzone.com/images/live.png" alt="Vue生命周期"></p><h3 id="常用的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#常用的生命周期钩子"><span>常用的生命周期钩子</span></a></h3><pre><code>mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
</code></pre><h3 id="关于销毁vue实例" tabindex="-1"><a class="header-anchor" href="#关于销毁vue实例"><span>关于销毁Vue实例</span></a></h3><pre><code>销毁后借助Vue开发者工具看不到任何信息。
销毁后自定义事件会失效，但原生DOM事件依然有效。
一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。
</code></pre><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* Vue生命周期 */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function o(i,u){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","03.shengmingzhouqi.html.vue"]]),r=JSON.parse('{"path":"/docs/Vue/03.shengmingzhouqi.html","title":"Vue生命周期","lang":"zh-CN","frontmatter":{"title":"Vue生命周期","date":"2022-09-10T00:00:00.000Z","tags":["vue"]},"headers":[{"level":3,"title":"常用的生命周期钩子","slug":"常用的生命周期钩子","link":"#常用的生命周期钩子","children":[]},{"level":3,"title":"关于销毁Vue实例","slug":"关于销毁vue实例","link":"#关于销毁vue实例","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1682487484000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":2}]},"filePathRelative":"docs/Vue/03.生命周期.md","readingTime":{"minutes":0.69,"words":206}}');export{d as comp,r as data};
