import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const t={},p=e(`<h3 id="mixin-混入" tabindex="-1"><a class="header-anchor" href="#mixin-混入" aria-hidden="true">#</a> mixin(混入)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>功能：可以把多个组件共用的配置提取成一个混入对象

使用方式：
	<span class="token number">1</span>、定义混合
		<span class="token punctuation">{</span>
              <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
              <span class="token operator">...</span><span class="token punctuation">.</span>
		<span class="token punctuation">}</span>

    <span class="token number">2</span>、使用混入
        全局混入：Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span>
    	<span class="token literal-property property">局部混入：mixins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 功能：用于增强Vue

<span class="token number">2.</span> 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

<span class="token number">3.</span> 定义插件：
   对象<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 1. 添加全局过滤器</span>
       Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
   
       <span class="token comment">// 2. 添加全局指令</span>
       Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
   
       <span class="token comment">// 3. 配置全局混入(合)</span>
       Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
   
       <span class="token comment">// 4. 添加实例方法</span>
       <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
       <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$myProperty <span class="token operator">=</span> xxxx
   <span class="token punctuation">}</span>

<span class="token number">4.</span> 使用插件：Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","08.mixinyuchajian.html.vue"]]);export{r as default};
