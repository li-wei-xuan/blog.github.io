import{_ as c,p as i,q as r,s as n,R as s,t as a,a2 as o,Y as t,n as l}from"./framework-aa5c4115.js";const u={},d=n("h2",{id:"vue文档地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue文档地址","aria-hidden":"true"},"#"),s(" vue文档地址")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"文档"),n("th",null,"地址")])],-1),v=n("td",null,"Vue2",-1),m={href:"https://v2.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=n("td",null,"Vue3",-1),g={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="vue实例里的配置项" tabindex="-1"><a class="header-anchor" href="#vue实例里的配置项" aria-hidden="true">#</a> vue实例里的配置项</h2><h3 id="el-element-元素" tabindex="-1"><a class="header-anchor" href="#el-element-元素" aria-hidden="true">#</a> el(element(元素))</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>el用于绑定根元素，一般为<span class="token constant">CSS</span>选择器字符串

<span class="token comment">// el的两种写法</span>
<span class="token comment">// 第一种</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 第二种</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-数据" tabindex="-1"><a class="header-anchor" href="#data-数据" aria-hidden="true">#</a> data(数据)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">data用于定义属性</span><span class="token punctuation">(</span>属性名<span class="token operator">+</span>属性值<span class="token punctuation">)</span>，有两种方法对象式和函数式

<span class="token comment">// data的两种写法(常用函数方式)</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">//对象方法,一般用法</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//函数方法,用于组件,使函数的this指向Vue实例</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="methods-方法" tabindex="-1"><a class="header-anchor" href="#methods-方法" aria-hidden="true">#</a> methods(方法)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>methods 方法<span class="token punctuation">,</span>主要用于定义绑定事件的方法

<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;showInfo&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

 <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
  	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    	<span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;上海&#39;</span>
  	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//定义click方法</span>
    	<span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;事件被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token punctuation">}</span>
  	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed-计算属性" tabindex="-1"><a class="header-anchor" href="#computed-计算属性" aria-hidden="true">#</a> computed(计算属性)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>定义：要用的属性不存在，需要通过已有属性计算得来。  
原理：底层借助了Objcet<span class="token punctuation">.</span><span class="token function">defineproperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法提供的getter和setter。    
<span class="token keyword">get</span>函数什么时候执行？
    初次读取时会执行一次  
    当依赖的数据发生改变时会被再次调用
优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便  
备注：  
    计算属性最终会出现在vm上，直接读取使用即可  
    如果计算属性要被修改，那必须写<span class="token keyword">set</span>函数去响应修改，且<span class="token keyword">set</span>中要引起计算时依赖的数据发生改变  
    如果计算属性确定不考虑修改，可以使用计算属性的简写形式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),y=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    姓：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>firstName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lastName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    姓名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{fullName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&#39;张&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">&#39;三&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">//完整写法</span>
            <span class="token comment">/* fullName:{
              get(){
                return this.firstName + &#39;-&#39; + this.lastName
              },
              set(value){
                const arr = value.split(&#39;-&#39;)
                this.firstName = arr[0]
                this.lastName = arr[1]
              }
            } */</span>
            <span class="token comment">//简写</span>
            <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch-监视属性" tabindex="-1"><a class="header-anchor" href="#watch-监视属性" aria-hidden="true">#</a> watch(监视属性)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 当被监视的属性变化时，回调函数自动调用，进行相关操作  
<span class="token number">2.</span> 监视的属性必须存在，才能进行监视  
<span class="token number">3.</span> 监视有两种写法：  
     创建Vue时传入watch配置  
     通过vm<span class="token punctuation">.</span>$watch监视  
<span class="token number">4.</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span> 在初始化时就进行调用  
<span class="token number">5.</span> <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span> 开启深度监视<span class="token punctuation">,</span><span class="token function">要写成完整形式</span>  
    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Vue中的watch默认不监测对象内部值的改变（一层）。</span>
    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>配置deep<span class="token operator">:</span><span class="token boolean">true</span>可以监测对象内部值改变（多层）。  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span>
    姓：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;firstName&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
    名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;lastName&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
    姓名：<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>fullName<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&#39;张&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">&#39;三&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fullName</span><span class="token operator">:</span><span class="token string">&#39;张-三&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">firstName</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> val <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">lastName</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> val
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed和watch的区别" tabindex="-1"><a class="header-anchor" href="#computed和watch的区别" aria-hidden="true">#</a> computed和watch的区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed和watch之间的区别
  computed能完成的功能，watch都可以完成，能用computed就用computed
  watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

两个重要的小原则：
  1、所有被 Vue 管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。
  2、所有不被 Vue 所管理的函数(定时器的回调函数、ajax的回调函数等、Promise的回调函数)，
  最好写成箭头函数，这样this的指向才是vm或组件实例对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(_,x){const e=l("ExternalLinkIcon"),p=l("font");return i(),r("div",null,[d,n("table",null,[k,n("tbody",null,[n("tr",null,[v,n("td",null,[n("a",m,[s("https://v2.cn.vuejs.org/"),a(e)])])]),n("tr",null,[b,n("td",null,[n("a",g,[s("https://cn.vuejs.org/"),a(e)])])])])]),h,n("p",null,[n("strong",null,[a(p,{color:"red"},{default:o(()=>[s("注意: computed里不能写异步任务")]),_:1})])]),y,n("p",null,[n("strong",null,[a(p,{color:"red"},{default:o(()=>[s("注意: watch可以写异步任务")]),_:1})])]),f])}const N=c(u,[["render",w],["__file","01.vueshili.html.vue"]]);export{N as default};
