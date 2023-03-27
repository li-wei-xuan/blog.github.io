import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e={},p=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>组件间通信的方法
	props
	自定义事件
	全局事件总线
	消息订阅与发布

组件间通信方法不止以上几种，以上几种推荐使用全局事件总线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>props
   用于组件接受参数
  <span class="token comment">// 简单接受</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>

  <span class="token comment">// 指定接受类型</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span>String<span class="token punctuation">,</span><span class="token string-property property">&#39;msg&#39;</span><span class="token operator">:</span>String<span class="token punctuation">,</span><span class="token string-property property">&#39;age&#39;</span><span class="token operator">:</span>Number<span class="token punctuation">}</span>

  <span class="token comment">// 类型限制+默认值的指定+必要性的限制</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span> <span class="token comment">//name的类型是字符串</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//name是必要的</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">99</span> <span class="token comment">//默认值</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>   
      
props 主要用于父子间通信
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父组件</span>
方法一：
	<span class="token operator">&lt;</span>Student ref<span class="token operator">=</span><span class="token string">&quot;student&quot;</span> @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">&quot;show&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;getStudentName&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getStudentName<span class="token punctuation">)</span> <span class="token comment">//绑定自定义事件</span>
  <span class="token punctuation">}</span>

<span class="token literal-property property">ref</span><span class="token operator">:</span> vue中对dom元素进行操作<span class="token punctuation">,</span>在生命周期中 mounted 中能获取到
  
方法二：
	<span class="token operator">&lt;</span>Student @getStudentName<span class="token operator">=</span><span class="token string">&quot;getStudentName&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>

公共部分：
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  

<span class="token comment">// 子组件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;getStudentName&#39;</span><span class="token punctuation">,</span><span class="token number">666</span><span class="token punctuation">,</span><span class="token number">888</span><span class="token punctuation">,</span><span class="token number">900</span><span class="token punctuation">)</span><span class="token comment">//触发Student组件实例身上的getStudentName事件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;getStudentName&#39;</span><span class="token punctuation">)</span> <span class="token comment">//解绑一个自定义事件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。</span>

自定义事件 主要用于父子间通信
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局事件总线" tabindex="-1"><a class="header-anchor" href="#全局事件总线" aria-hidden="true">#</a> 全局事件总线</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在main.js中</span>
<span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//安装全局事件总线</span>
<span class="token punctuation">}</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;checkAllTodo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>checkAllTodo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绑定事件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;checkAllTodo&quot;</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span><span class="token number">234</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发事件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&quot;checkAllTodo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解绑事件</span>

全局事件总线 用于全局组件间通信
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布" aria-hidden="true">#</a> 消息订阅与发布</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>安装插件 npm i pubsub<span class="token operator">-</span>js

<span class="token comment">// 在页面中引入</span>
<span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>

<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>PubId <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;deleteTodo&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deleteTodo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 订阅</span>
<span class="token punctuation">}</span>
  
<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PubId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取消订阅</span>
<span class="token punctuation">}</span>
  
pubsub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;deleteTodo&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行</span>

消息订阅与发布 用于全局组件间通信
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","07.zujianjiantongxin.html.vue"]]);export{r as default};
