import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},p=t(`<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），
也是一种组件间通信的方式，且适用于任意组件间通信。

使用场景：多个组件需要共享数据时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建vuex环境" tabindex="-1"><a class="header-anchor" href="#搭建vuex环境"><span>搭建vuex环境</span></a></h3><h4 id="安装vuex" tabindex="-1"><a class="header-anchor" href="#安装vuex"><span>安装Vuex</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>Vue2: npm install vuex@3
Vue3: npm install vuex@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建文件-src-store-index-js" tabindex="-1"><a class="header-anchor" href="#创建文件-src-store-index-js"><span>创建文件 src/store/index.js</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//引入Vue核心库</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//应用Vuex插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">//准备actions对象——响应组件中用户的动作</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//准备mutations对象——修改state中的数据</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//准备state对象——保存具体的数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	actions<span class="token punctuation">,</span>
	mutations<span class="token punctuation">,</span>
	state
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-main-js-中创建vm时传入-store-配置项" tabindex="-1"><a class="header-anchor" href="#在-main-js-中创建vm时传入-store-配置项"><span>在 main.js 中创建vm时传入 store 配置项</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token operator">...</span>
<span class="token comment">//引入store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token operator">...</span><span class="token operator">...</span>

<span class="token comment">//创建vm</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
	store
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>初始化数据、配置 actions 、配置 mutations ，操作文件 store<span class="token punctuation">.</span>js

<span class="token comment">//引入Vue核心库</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//引用Vuex</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//响应组件中加的动作</span>
	<span class="token function">jia</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// console.log(&#39;actions中的jia被调用了&#39;,miniStore,value)</span>
		context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//执行加</span>
	<span class="token constant">JIA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// console.log(&#39;mutations中的JIA被调用了&#39;,state,value)</span>
		state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//初始化数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	actions<span class="token punctuation">,</span>
	mutations<span class="token punctuation">,</span>
	state<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

组件中读取vuex中的数据
	$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>sum

组件中修改vuex中的数据
    $store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;action中的方法名&#39;</span><span class="token punctuation">,</span>数据<span class="token punctuation">)</span> 
  或 
    $store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;mutations中的方法名&#39;</span><span class="token punctuation">,</span>数据<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">备注</p><p>若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch ，直接编写 commit</p></div><h3 id="getters的使用" tabindex="-1"><a class="header-anchor" href="#getters的使用"><span>getters的使用</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1</span>、概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。

<span class="token number">2</span>、在store<span class="token punctuation">.</span>js中追加getters配置
	<span class="token operator">...</span><span class="token operator">...</span>

  <span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>sum <span class="token operator">*</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//创建并暴露store</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span>
    getters
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
<span class="token number">3</span>、组件中读取数据：$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>bigSum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四个map方法的使用" tabindex="-1"><a class="header-anchor" href="#四个map方法的使用"><span>四个map方法的使用</span></a></h3><h4 id="mapstate方法" tabindex="-1"><a class="header-anchor" href="#mapstate方法"><span>mapState方法</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>用于帮助我们映射 state 中的数据为计算属性

<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//借助mapState生成计算属性：sum、school、subject（对象写法）</span>
     <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">school</span><span class="token operator">:</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">subject</span><span class="token operator">:</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         
    <span class="token comment">//借助mapState生成计算属性：sum、school、subject（数组写法）</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapgetters方法" tabindex="-1"><a class="header-anchor" href="#mapgetters方法"><span>mapGetters方法</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>用于帮助我们映射 getters 中的数据为计算属性

<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//借助mapGetters生成计算属性：bigSum（对象写法）</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">bigSum</span><span class="token operator">:</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//借助mapGetters生成计算属性：bigSum（数组写法）</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapactions方法" tabindex="-1"><a class="header-anchor" href="#mapactions方法"><span>mapActions方法</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>用于帮助我们生成与 actions 对话的方法，即：包含 $store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span> 的函数

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//靠mapActions生成：incrementOdd、incrementWait（对象形式）</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//靠mapActions生成：incrementOdd、incrementWait（数组形式）</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapmutations方法" tabindex="-1"><a class="header-anchor" href="#mapmutations方法"><span>mapMutations方法</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>用于帮助我们生成与 mutations 对话的方法，即：包含 $store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span> 的函数

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//靠mapActions生成：increment、decrement（对象形式）</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">//靠mapMutations生成：JIA、JIAN（对象形式）</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">备注</p><p>mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。</p></div><h3 id="模块化-命名空间" tabindex="-1"><a class="header-anchor" href="#模块化-命名空间"><span>模块化+命名空间</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1</span>、目的：让代码更好维护，让多种数据分类更加明确。

<span class="token number">2</span>、修改 store<span class="token punctuation">.</span>js
  <span class="token keyword">const</span> countAbout <span class="token operator">=</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启命名空间</span>
       <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> state<span class="token punctuation">.</span>sum <span class="token operator">*</span> <span class="token number">10</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> personAbout <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启命名空间</span>
     <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       countAbout<span class="token punctuation">,</span>
       personAbout
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">3</span>、开启命名空间后，组件中读取state数据
  <span class="token comment">//方式一：自己直接读取</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>personAbout<span class="token punctuation">.</span>list
  <span class="token comment">//方式二：借助mapState读取：</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
<span class="token number">4.</span> 开启命名空间后，组件中读取getters数据：
	<span class="token comment">//方式一：自己直接读取</span>
 		<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&#39;personAbout/firstPersonName&#39;</span><span class="token punctuation">]</span>
	<span class="token comment">//方式二：借助mapGetters读取：</span>
		<span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token number">5.</span> 开启命名空间后，组件中调用dispatch
  <span class="token comment">//方式一：自己直接dispatch</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;personAbout/addPersonWang&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">)</span>
  <span class="token comment">//方式二：借助mapActions：</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">6.</span> 开启命名空间后，组件中调用commit
  <span class="token comment">//方式一：自己直接commit</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;personAbout/ADD_PERSON&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">)</span>
  <span class="token comment">//方式二：借助mapMutations：</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","12.Vuex.html.vue"]]),d=JSON.parse('{"path":"/docs/Vue/12.Vuex.html","title":"Vuex","lang":"zh-CN","frontmatter":{"title":"Vuex","date":"2023-03-29T00:00:00.000Z","tags":["vue"],"categories":["vue"]},"headers":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"搭建vuex环境","slug":"搭建vuex环境","link":"#搭建vuex环境","children":[]},{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"getters的使用","slug":"getters的使用","link":"#getters的使用","children":[]},{"level":3,"title":"四个map方法的使用","slug":"四个map方法的使用","link":"#四个map方法的使用","children":[]},{"level":3,"title":"模块化+命名空间","slug":"模块化-命名空间","link":"#模块化-命名空间","children":[]}],"git":{"createdTime":1680087253000,"updatedTime":1680159200000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":2}]},"filePathRelative":"docs/Vue/12.Vuex.md","readingTime":{"minutes":3.49,"words":1048}}');export{r as comp,d as data};
