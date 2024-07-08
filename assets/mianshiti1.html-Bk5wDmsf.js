import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},i=e(`<h3 id="说说你对-spa-单页面的理解-它的优缺点分别是什么" tabindex="-1"><a class="header-anchor" href="#说说你对-spa-单页面的理解-它的优缺点分别是什么"><span>说说你对 SPA 单页面的理解，它的优缺点分别是什么？</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。
一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；
取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>优点：
  用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
  基于上面一点，SPA 相对对服务器压力小；
  前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
缺点：
  初次加载耗时多：
	为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
  前进后退路由管理：
	由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
	SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-show-与-v-if-有什么区别" tabindex="-1"><a class="header-anchor" href="#v-show-与-v-if-有什么区别"><span>v-show 与 v-if 有什么区别？</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；
也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class-与-style-如何动态绑定" tabindex="-1"><a class="header-anchor" href="#class-与-style-如何动态绑定"><span>Class 与 Style 如何动态绑定？</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>Class 可以通过对象语法和数组语法进行动态绑定：
  对象语法：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ active: isActive, &#39;text-danger&#39;: hasError }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  数组语法：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[isActive ? activeClass : &#39;&#39;, errorClass]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  data: {
    isActive: true,
    hasError: false,
    activeClass: &#39;active&#39;,
  	errorClass: &#39;text-danger&#39;
  }
  
Style 也可以通过对象语法和数组语法进行动态绑定：
  对象语法：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: activeColor, fontSize: fontSize + &#39;px&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  数组语法：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[styleColor, styleSize]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  data: {
    activeColor: &#39;red&#39;,
    fontSize: 30,
    styleColor: {
       color: &#39;red&#39;
     },
    styleSize:{
       fontSize:&#39;23px&#39;
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="怎样理解-vue-的单向数据流" tabindex="-1"><a class="header-anchor" href="#怎样理解-vue-的单向数据流"><span>怎样理解 Vue 的单向数据流？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。
这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。
这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。

有两种常见的试图改变一个 prop 的情形 <span class="token operator">:</span>
  <span class="token number">1</span>、这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。 
  在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;initialCounter&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialCounter
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token number">2</span>、这个 prop 以一种原始的值传入且需要进行转换。 在这种情况下，最好使用这个 prop 的值来定义一个计算属性
  	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">normalizedSize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed-和-watch-的区别和运用的场景" tabindex="-1"><a class="header-anchor" href="#computed-和-watch-的区别和运用的场景"><span>computed 和 watch 的区别和运用的场景？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>computed： 
  是计算属性，依赖其它属性值，并且 computed 的值有缓存，
  只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；
watch： 
	更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

运用场景：
  当我们需要进行数值计算，并且依赖于其它数据时，可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
  当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，
  使用 watch <span class="token function">选项允许我们执行异步操作</span> <span class="token punctuation">(</span> 访问一个 <span class="token constant">API</span> <span class="token punctuation">)</span>，限制我们执行该操作的频率，
  并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接给一个数组项赋值-vue-能检测到变化吗" tabindex="-1"><a class="header-anchor" href="#直接给一个数组项赋值-vue-能检测到变化吗"><span>直接给一个数组项赋值，Vue 能检测到变化吗？</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：
当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
为了解决第一个问题，Vue 提供了以下操作方法：
	// Vue.set
  Vue.set(vm.items, indexOfItem, newValue)
  // vm.$set，Vue.set的一个别名
  vm.$set(vm.items, indexOfItem, newValue)
  // Array.prototype.splice
  vm.items.splice(indexOfItem, 1, newValue)
为了解决第二个问题，Vue 提供了以下操作方法：
	// Array.prototype.splice
	vm.items.splice(newLength)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-的父组件和子组件生命周期钩子函数执行顺序" tabindex="-1"><a class="header-anchor" href="#vue-的父组件和子组件生命周期钩子函数执行顺序"><span>Vue 的父组件和子组件生命周期钩子函数执行顺序？</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：
加载渲染过程
父 beforeCreate -&gt; 父 created -&gt; 父 beforeMount -&gt; 子 beforeCreate 
-&gt; 子 created -&gt; 子 beforeMount -&gt; 子 mounted -&gt; 父 mounted

子组件更新过程
父 beforeUpdate -&gt; 子 beforeUpdate -&gt; 子 updated -&gt; 父 updated

父组件更新过程
父 beforeUpdate -&gt; 父 updated

销毁过程
父 beforeDestroy -&gt; 子 beforeDestroy -&gt; 子 destroyed -&gt; 父 destroyed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在哪个生命周期内调用异步请求" tabindex="-1"><a class="header-anchor" href="#在哪个生命周期内调用异步请求"><span>在哪个生命周期内调用异步请求？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>可以在钩子函数 created、beforeMount、mounted 中进行调用，
因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
  <span class="token number">1</span>、能更快获取到服务端数据，减少页面 loading 时间；
  <span class="token number">2</span>、ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在什么阶段才能访问操作dom" tabindex="-1"><a class="header-anchor" href="#在什么阶段才能访问操作dom"><span>在什么阶段才能访问操作DOM？</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 mounted 中可以访问操作 DOM。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="父组件可以监听到子组件的生命周期吗" tabindex="-1"><a class="header-anchor" href="#父组件可以监听到子组件的生命周期吗"><span>父组件可以监听到子组件的生命周期吗？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：

<span class="token comment">// Parent.vue</span>
<span class="token operator">&lt;</span>Child @mounted<span class="token operator">=</span><span class="token string">&quot;doSomething&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// Child.vue</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;mounted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：
<span class="token comment">//  Parent.vue</span>
<span class="token operator">&lt;</span>Child @hook<span class="token operator">:</span>mounted<span class="token operator">=</span><span class="token string">&quot;doSomething&quot;</span> <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Child<span class="token operator">&gt;</span>

<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;父组件监听到 mounted 钩子函数 ...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">//  Child.vue</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;子组件触发 mounted 钩子函数 ...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>    

<span class="token comment">// 以上输出顺序为：</span>
<span class="token comment">// 子组件触发 mounted 钩子函数 ...</span>
<span class="token comment">// 父组件监听到 mounted 钩子函数 ...</span>

当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#谈谈你对-keep-alive-的了解"><span>谈谈你对 keep-alive 的了解？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>keep<span class="token operator">-</span>alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：
  <span class="token number">1</span>、一般结合路由和动态组件一起使用，用于缓存组件；
  <span class="token number">2</span>、提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，
  exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
  <span class="token number">3</span>、对应两个钩子函数 activated 和 deactivated ，当组件被激活时，
  触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件中-data-为什么是一个函数" tabindex="-1"><a class="header-anchor" href="#组件中-data-为什么是一个函数"><span>组件中 data 为什么是一个函数？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>为什么组件中的 data 必须是一个函数，然后 <span class="token keyword">return</span> 一个对象，而 <span class="token keyword">new</span> <span class="token class-name">Vue</span> 实例里，data 可以直接是一个对象？

<span class="token comment">// data</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;子组件&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">childName</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// new Vue</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>App<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

因为组件是用来复用的，且 <span class="token constant">JS</span> 里对象是引用关系，
如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，
如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；
而 <span class="token keyword">new</span> <span class="token class-name">Vue</span> 的实例，是不会被复用的，因此不存在引用对象的问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model-的原理" tabindex="-1"><a class="header-anchor" href="#v-model-的原理"><span>v-model 的原理？</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，
我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
  1、text 和 textarea 元素使用 value 属性和 input 事件；
  2、checkbox 和 radio 使用 checked 属性和 change 事件；
  3、select 字段将 value 作为 prop 并将 change 作为事件。
以 input 表单元素为例：
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>something<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
  相当于
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>something<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>something = $event.target.value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    
如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：
	父组件：
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModelChild</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ModelChild</span><span class="token punctuation">&gt;</span></span>

  子组件：
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  props:{
      value: String
  },
  methods: {
    test1(){
       this.$emit(&#39;input&#39;, &#39;小红&#39;)
    },
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-组件间通信有哪几种方式" tabindex="-1"><a class="header-anchor" href="#vue-组件间通信有哪几种方式"><span>Vue 组件间通信有哪几种方式？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。
Vue 组件间通信只要指以下 <span class="token number">3</span> 类通信：父子组件通信、隔代组件通信、兄弟组件通信，
下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。

（<span class="token number">1</span>）props <span class="token operator">/</span> $emit 适用 父子组件通信
	这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。

（<span class="token number">2</span>）ref 与 $parent <span class="token operator">/</span> $children 适用 父子组件通信
	ref：如果在普通的 <span class="token constant">DOM</span> 元素上使用，引用指向的就是 <span class="token constant">DOM</span> 元素；如果用在子组件上，引用就指向组件实例
	$parent <span class="token operator">/</span> $children：访问父 <span class="token operator">/</span> 子实例

（<span class="token number">3</span>）EventBus （$emit <span class="token operator">/</span> $on） 适用于 父子、隔代、兄弟组件通信
	这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），
	用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。

（<span class="token number">4</span>）$attrs<span class="token operator">/</span>$listeners 适用于 隔代组件通信
	$attrs：包含了父作用域中不被 prop <span class="token function">所识别</span> <span class="token punctuation">(</span>且获取<span class="token punctuation">)</span> <span class="token function">的特性绑定</span> <span class="token punctuation">(</span> <span class="token keyword">class</span> 和 style 除外 <span class="token punctuation">)</span>。
	当一个组件没有声明任何 prop <span class="token function">时，这里会包含所有父作用域的绑定</span> <span class="token punctuation">(</span> <span class="token keyword">class</span> 和 style 除外 <span class="token punctuation">)</span>，
	并且可以通过 v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span> 传入内部组件。通常配合 inheritAttrs 选项一起使用。
	<span class="token function">$listeners：包含了父作用域中的</span> <span class="token punctuation">(</span>不含 <span class="token punctuation">.</span>native 修饰器的<span class="token punctuation">)</span> v<span class="token operator">-</span>on 事件监听器。
	它可以通过 v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">&quot;$listeners&quot;</span> 传入内部组件

（<span class="token number">5</span>）provide <span class="token operator">/</span> inject 适用于 隔代组件通信
	祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。
	provide <span class="token operator">/</span> inject <span class="token constant">API</span> 主要解决了跨级组件间的通信问题，不过它的使用场景，
	主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

（<span class="token number">6</span>）Vuex 适用于 父子、隔代、兄弟组件通信
	Vuex 是一个专为 Vue<span class="token punctuation">.</span>js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。
	“store” <span class="token function">基本上就是一个容器，它包含着你的应用中大部分的状态</span> <span class="token punctuation">(</span> state <span class="token punctuation">)</span>。
	Vuex 的状态存储是响应式的。
	当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
	改变 store <span class="token function">中的状态的唯一途径就是显式地提交</span> <span class="token punctuation">(</span>commit<span class="token punctuation">)</span> mutation。这样使得我们可以方便地跟踪每一个状态的变化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="你使用过-vuex-吗" tabindex="-1"><a class="header-anchor" href="#你使用过-vuex-吗"><span>你使用过 Vuex 吗？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vuex 是一个专为 Vue<span class="token punctuation">.</span>js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。
“store” <span class="token function">基本上就是一个容器，它包含着你的应用中大部分的状态</span> <span class="token punctuation">(</span> state <span class="token punctuation">)</span>。
（<span class="token number">1</span>）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
	若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
（<span class="token number">2</span>）改变 store <span class="token function">中的状态的唯一途径就是显式地提交</span> <span class="token punctuation">(</span>commit<span class="token punctuation">)</span> mutation。这样使得我们可以方便地跟踪每一个状态的变化。

主要包括以下几个模块：
  State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
  Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
  Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
  Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
  Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用过-vue-ssr-吗-说说-ssr" tabindex="-1"><a class="header-anchor" href="#使用过-vue-ssr-吗-说说-ssr"><span>使用过 Vue SSR 吗？说说 SSR？</span></a></h3><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。</p><p>然而，也可以将同一个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记&quot;激活&quot;为客户端上完全可交互的应用程序。</p><p>即：SSR大致的意思就是vue在客户端将标签渲染成的整个 html 片段的工作在服务端完成，</p><p>服务端形成的html 片段直接返回给客户端这个过程就叫做服务端渲染。</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>服务端渲染 SSR 的优缺点如下：
（1）服务端渲染的优点：
    1、更好的 SEO：因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，
    所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），
    所以搜索引擎爬取工具可以抓取渲染好的页面；

    2、更快的内容到达时间（首屏加载更快）：SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，
    文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，
		无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；

（2) 服务端渲染的缺点：
    1、更多的开发条件限制：例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，
    这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；
    并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，
    服务端渲染应用程序，需要处于 Node.js server 运行环境；

    2、更多的服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 
    更加大量占用CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 ( high traffic ) 下使用，
    请准备相应的服务器负载，并明智地采用缓存策略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router-路由模式有几种" tabindex="-1"><a class="header-anchor" href="#vue-router-路由模式有几种"><span>vue-router 路由模式有几种？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>vue<span class="token operator">-</span>router 有 <span class="token number">3</span> 种路由模式：hash、history、abstract，对应的源码如下所示：
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;history&#39;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTML5History</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;hash&#39;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashHistory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fallback<span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;abstract&#39;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbstractHistory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">assert</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">invalid mode: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

其中，<span class="token number">3</span> 种路由模式的说明如下：
  <span class="token literal-property property">hash</span><span class="token operator">:</span> 使用 <span class="token constant">URL</span> hash 值来作路由。支持所有浏览器，包括不支持 <span class="token constant">HTML5</span> History Api 的浏览器；
  <span class="token literal-property property">history</span> <span class="token operator">:</span> 依赖 <span class="token constant">HTML5</span> History <span class="token constant">API</span> 和服务器配置。具体可以查看 <span class="token constant">HTML5</span> History 模式；
  <span class="token literal-property property">abstract</span> <span class="token operator">:</span> 支持所有 JavaScript 运行环境，如 Node<span class="token punctuation">.</span>js 服务器端。如果发现没有浏览器的 <span class="token constant">API</span>，路由会自动强制进入这个模式<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router-中常用的-hash-和-history-路由模式实现原理吗" tabindex="-1"><a class="header-anchor" href="#vue-router-中常用的-hash-和-history-路由模式实现原理吗"><span>vue-router 中常用的 hash 和 history 路由模式实现原理吗？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>（<span class="token number">1</span>）hash 模式的实现原理
    早期的前端路由的实现就是基于 location<span class="token punctuation">.</span>hash 来实现的。其实现原理很简单，location<span class="token punctuation">.</span>hash的值就是<span class="token constant">URL</span>中 # 后面的内容。
    比如下面这个网站，它的 location<span class="token punctuation">.</span>hash 的值为 <span class="token string">&#39;#search&#39;</span>：
    	<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>word<span class="token punctuation">.</span>com#search
    	
    hash 路由模式的实现主要是基于下面几个特性：
			<span class="token number">1</span>、<span class="token constant">URL</span> 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；
			<span class="token number">2</span>、hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；
			<span class="token number">3</span>、可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，<span class="token constant">URL</span> 的 hash 值会发生改变；
			或者使用 JavaScript 来对 loaction<span class="token punctuation">.</span>hash 进行赋值，改变 <span class="token constant">URL</span> 的 hash 值；
			<span class="token number">4</span>、我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。
（<span class="token number">2</span>）history 模式的实现原理
		<span class="token constant">HTML5</span> 提供了 History <span class="token constant">API</span> 来实现 <span class="token constant">URL</span> 的变化。其中做最主要的 <span class="token constant">API</span> 有以下两个：
			history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 和 history<span class="token punctuation">.</span><span class="token function">repalceState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>。
		这两个 <span class="token constant">API</span> 可以在不进行刷新的情况下，操作浏览器的历史纪录。
		
		唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：
			window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
			window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
	history 路由模式的实现主要基于存在下面几个特性：
		<span class="token number">1</span>、pushState 和 repalceState 两个 <span class="token constant">API</span> 来操作实现 <span class="token constant">URL</span> 的变化 ；
		<span class="token number">2</span>、我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；
		<span class="token number">3</span>、history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 或 history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 不会触发 popstate 事件，这时我们需要手动触发
    	页面跳转（渲染）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-怎么用-vm-set-解决对象新增属性不能响应的问题" tabindex="-1"><a class="header-anchor" href="#vue-怎么用-vm-set-解决对象新增属性不能响应的问题"><span>Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。
由于 Vue 会在初始化实例时对属性执行 getter<span class="token operator">/</span>setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。
但是 Vue 提供了 Vue<span class="token punctuation">.</span><span class="token function">set</span> <span class="token punctuation">(</span>object<span class="token punctuation">,</span> propertyName<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">/</span> vm<span class="token punctuation">.</span><span class="token function">$set</span> <span class="token punctuation">(</span>object<span class="token punctuation">,</span> propertyName<span class="token punctuation">,</span> value<span class="token punctuation">)</span> 来实现为对象添加响应式属性，
那框架本身是如何实现的呢？
我们查看对应的 Vue 源码：vue<span class="token operator">/</span>src<span class="token operator">/</span>core<span class="token operator">/</span>instance<span class="token operator">/</span>index<span class="token punctuation">.</span>js

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token comment">// target 为数组</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isValidArrayIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改数组的长度, 避免索引&gt;数组长度导致splcie()执行有误</span>
    target<span class="token punctuation">.</span>length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>length<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token comment">// 利用数组的splice变异方法触发响应式</span>
    target<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token comment">// key 已经存在，直接修改属性值</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> target <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__ob__
  <span class="token comment">// target 本身就不是响应式数据, 直接赋值</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
  <span class="token comment">// 对属性进行响应式处理</span>
  <span class="token function">defineReactive</span><span class="token punctuation">(</span>ob<span class="token punctuation">.</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> val
<span class="token punctuation">}</span>

我们阅读以上源码可知，vm<span class="token punctuation">.</span>$<span class="token keyword">set</span> 的实现原理是：
如果目标是数组，直接使用数组的 splice 方法触发相应式；
如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，
则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，
给对象属性采用 Object<span class="token punctuation">.</span>defineProperty 动态添加 getter 和 setter 的功能所调用的方法）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟-dom-的优缺点" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-的优缺点"><span>虚拟 DOM 的优缺点？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>优点：
  保证性能下限： 
    框架的虚拟 <span class="token constant">DOM</span> 需要适配任何上层 <span class="token constant">API</span> 可能产生的操作，它的一些 <span class="token constant">DOM</span> 操作的实现必须是普适的，所以它的性能并不是最优的；
    但是比起粗暴的 <span class="token constant">DOM</span> 操作性能要好很多，因此框架的虚拟 <span class="token constant">DOM</span> 至少可以保证在你不需要手动优化的情况下，
    依然可以提供还不错的性能，即保证性能的下限；
  无需手动操作 <span class="token constant">DOM</span>： 
    我们不再需要手动去操作 <span class="token constant">DOM</span>，只需要写好 View<span class="token operator">-</span>Model 的代码逻辑，框架会根据虚拟 <span class="token constant">DOM</span> 和 数据双向绑定，
    帮我们以可预期的方式更新视图，极大提高我们的开发效率；
  跨平台： 
    虚拟 <span class="token constant">DOM</span> 本质上是 JavaScript 对象<span class="token punctuation">,</span>而 <span class="token constant">DOM</span> 与平台强相关，相比之下虚拟 <span class="token constant">DOM</span> 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

<span class="token literal-property property">缺点</span><span class="token operator">:</span>
	无法进行极致优化： 虽然虚拟 <span class="token constant">DOM</span> <span class="token operator">+</span> 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 <span class="token constant">DOM</span> 无法进行针对性的极致优化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","mianshiti1.html.vue"]]),d=JSON.parse('{"path":"/docs/Interview/mianshiti1.html","title":"vue面试题","lang":"zh-CN","frontmatter":{"title":"vue面试题","date":"2023-01-01T00:00:00.000Z","tags":["interview"],"categories":["interview"]},"headers":[{"level":3,"title":"说说你对 SPA 单页面的理解，它的优缺点分别是什么？","slug":"说说你对-spa-单页面的理解-它的优缺点分别是什么","link":"#说说你对-spa-单页面的理解-它的优缺点分别是什么","children":[]},{"level":3,"title":"v-show 与 v-if 有什么区别？","slug":"v-show-与-v-if-有什么区别","link":"#v-show-与-v-if-有什么区别","children":[]},{"level":3,"title":"Class 与 Style 如何动态绑定？","slug":"class-与-style-如何动态绑定","link":"#class-与-style-如何动态绑定","children":[]},{"level":3,"title":"怎样理解 Vue 的单向数据流？","slug":"怎样理解-vue-的单向数据流","link":"#怎样理解-vue-的单向数据流","children":[]},{"level":3,"title":"computed 和 watch 的区别和运用的场景？","slug":"computed-和-watch-的区别和运用的场景","link":"#computed-和-watch-的区别和运用的场景","children":[]},{"level":3,"title":"直接给一个数组项赋值，Vue 能检测到变化吗？","slug":"直接给一个数组项赋值-vue-能检测到变化吗","link":"#直接给一个数组项赋值-vue-能检测到变化吗","children":[]},{"level":3,"title":"Vue 的父组件和子组件生命周期钩子函数执行顺序？","slug":"vue-的父组件和子组件生命周期钩子函数执行顺序","link":"#vue-的父组件和子组件生命周期钩子函数执行顺序","children":[]},{"level":3,"title":"在哪个生命周期内调用异步请求？","slug":"在哪个生命周期内调用异步请求","link":"#在哪个生命周期内调用异步请求","children":[]},{"level":3,"title":"在什么阶段才能访问操作DOM？","slug":"在什么阶段才能访问操作dom","link":"#在什么阶段才能访问操作dom","children":[]},{"level":3,"title":"父组件可以监听到子组件的生命周期吗？","slug":"父组件可以监听到子组件的生命周期吗","link":"#父组件可以监听到子组件的生命周期吗","children":[]},{"level":3,"title":"谈谈你对 keep-alive 的了解？","slug":"谈谈你对-keep-alive-的了解","link":"#谈谈你对-keep-alive-的了解","children":[]},{"level":3,"title":"组件中 data 为什么是一个函数？","slug":"组件中-data-为什么是一个函数","link":"#组件中-data-为什么是一个函数","children":[]},{"level":3,"title":"v-model 的原理？","slug":"v-model-的原理","link":"#v-model-的原理","children":[]},{"level":3,"title":"Vue 组件间通信有哪几种方式？","slug":"vue-组件间通信有哪几种方式","link":"#vue-组件间通信有哪几种方式","children":[]},{"level":3,"title":"你使用过 Vuex 吗？","slug":"你使用过-vuex-吗","link":"#你使用过-vuex-吗","children":[]},{"level":3,"title":"使用过 Vue SSR 吗？说说 SSR？","slug":"使用过-vue-ssr-吗-说说-ssr","link":"#使用过-vue-ssr-吗-说说-ssr","children":[]},{"level":3,"title":"vue-router 路由模式有几种？","slug":"vue-router-路由模式有几种","link":"#vue-router-路由模式有几种","children":[]},{"level":3,"title":"vue-router 中常用的 hash 和 history 路由模式实现原理吗？","slug":"vue-router-中常用的-hash-和-history-路由模式实现原理吗","link":"#vue-router-中常用的-hash-和-history-路由模式实现原理吗","children":[]},{"level":3,"title":"Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？","slug":"vue-怎么用-vm-set-解决对象新增属性不能响应的问题","link":"#vue-怎么用-vm-set-解决对象新增属性不能响应的问题","children":[]},{"level":3,"title":"虚拟 DOM 的优缺点？","slug":"虚拟-dom-的优缺点","link":"#虚拟-dom-的优缺点","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/Interview/面试题1.md","readingTime":{"minutes":18.56,"words":5567}}');export{r as comp,d as data};
