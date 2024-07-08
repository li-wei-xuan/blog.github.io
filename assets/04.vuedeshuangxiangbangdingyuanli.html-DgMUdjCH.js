import{_ as e,r as p,o,c as l,b as n,e as a,d as t,a as c}from"./app-EaupiRXX.js";const i={},r=c(`<h2 id="vue2响应式原理" tabindex="-1"><a class="header-anchor" href="#vue2响应式原理"><span>Vue2响应式原理</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过原生JavaScript中的Object.defineproperty方法来对数据进行劫持。  
数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子"><span>简单的例子</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> <span class="token operator">&gt;</span>
		<span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
		<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
			<span class="token comment">// value:18,</span>
			<span class="token comment">// enumerable:true, //控制属性是否可以枚举，默认值是false</span>
			<span class="token comment">// writable:true, //控制属性是否可以被修改，默认值是false</span>
			<span class="token comment">// configurable:true //控制属性是否可以被删除，默认值是false</span>
			<span class="token comment">//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值</span>
			<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人读取age属性了&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> number
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值</span>
			<span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人修改了age属性，且值是&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
				number <span class="token operator">=</span> value
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// console.log(Object.keys(person))</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue中的数据代理" tabindex="-1"><a class="header-anchor" href="#vue中的数据代理"><span>Vue中的数据代理</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Vue中的数据代理：  
  通过vm对象来代理data对象中属性的操作（读/写）  
Vue中数据代理的好处：  
  更加方便的操作data中的数据  
基本原理：  
  通过Object.defineProperty()把data对象中所有属性添加到vm上。  
  为每一个添加到vm上的属性，都指定一个getter/setter。  
  在getter/setter内部去操作（读/写）data中对应的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue中的例子" tabindex="-1"><a class="header-anchor" href="#vue中的例子"><span>Vue中的例子</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>名字：<span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>地址：<span class="token punctuation">{</span><span class="token punctuation">{</span>address<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
	<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;上海&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写数据监测" tabindex="-1"><a class="header-anchor" href="#手写数据监测"><span>手写数据监测</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;北京&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建一个监视的实例对象，用于监视data中属性的变化</span>
<span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obs<span class="token punctuation">)</span>

<span class="token comment">//准备一个vm实例对象</span>
<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> data <span class="token operator">=</span> obs

<span class="token keyword">function</span> <span class="token function">Observer</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//汇总对象中所有的属性形成一个数组</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">//遍历</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">return</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">被改了</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> val
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue监视数据的原理" tabindex="-1"><a class="header-anchor" href="#vue监视数据的原理"><span>Vue监视数据的原理</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
1. vue会监视data中所有层次的数据。

2. 如何监测对象中的数据？
	通过setter实现监视，且要在new Vue时就传入要监测的数据。
		(1).对象中后追加的属性，Vue默认不做响应式处理
		(2).如需给后添加的属性做响应式，请使用如下API：
				Vue.set(target，propertyName/index，value) 或 
				vm.$set(target，propertyName/index，value)
				
3. 如何监测数组中的数据？
	通过包裹数组更新元素的方法实现，本质就是做了两件事：
		(1).调用原生对应的方法对数组进行更新。
		(2).重新解析模板，进而更新页面。
		
4.在Vue修改数组中的某个元素一定要用如下方法：
	1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
	2.Vue.set() 或 vm.$set()
				
特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3响应式原理" tabindex="-1"><a class="header-anchor" href="#vue3响应式原理"><span>Vue3响应式原理</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">实现原理</span><span class="token operator">:</span> 
  <span class="token literal-property property">通过Proxy（代理）</span><span class="token operator">:</span>  拦截对象中任意属性的变化<span class="token punctuation">,</span> 包括：属性值的读写、属性的添加、属性的删除等。
  <span class="token literal-property property">通过Reflect（反射）</span><span class="token operator">:</span>  对源对象的属性进行操作。
  
  <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// 拦截读取属性值</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拦截设置属性值或添加新属性</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拦截删除属性</span>
    <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mdn文档中描述的proxy与reflect" tabindex="-1"><a class="header-anchor" href="#mdn文档中描述的proxy与reflect"><span>MDN文档中描述的Proxy与Reflect</span></a></h4>`,15),u=n("th",null,"Proxy",-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},v=n("td",null,"Reflect",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const s=p("ExternalLinkIcon");return o(),l("div",null,[r,n("table",null,[n("thead",null,[n("tr",null,[u,n("th",null,[n("a",d,[a("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"),t(s)])])])]),n("tbody",null,[n("tr",null,[v,n("td",null,[n("a",k,[a("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"),t(s)])])])])])])}const y=e(i,[["render",m],["__file","04.vuedeshuangxiangbangdingyuanli.html.vue"]]),f=JSON.parse('{"path":"/docs/Vue/04.vuedeshuangxiangbangdingyuanli.html","title":"vue双向绑定原理","lang":"zh-CN","frontmatter":{"title":"vue双向绑定原理","date":"2022-08-25T00:00:00.000Z","tags":["vue"],"categories":["vue"]},"headers":[{"level":2,"title":"Vue2响应式原理","slug":"vue2响应式原理","link":"#vue2响应式原理","children":[{"level":3,"title":"Vue中的数据代理","slug":"vue中的数据代理","link":"#vue中的数据代理","children":[]},{"level":3,"title":"手写数据监测","slug":"手写数据监测","link":"#手写数据监测","children":[]},{"level":3,"title":"Vue监视数据的原理","slug":"vue监视数据的原理","link":"#vue监视数据的原理","children":[]},{"level":3,"title":"Vue3响应式原理","slug":"vue3响应式原理","link":"#vue3响应式原理","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1681987678000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":2}]},"filePathRelative":"docs/Vue/04.vue的双向绑定原理.md","readingTime":{"minutes":2.94,"words":883}}');export{y as comp,f as data};
