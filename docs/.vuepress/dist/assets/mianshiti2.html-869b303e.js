import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const i={},l=e(`<h3 id="虚拟-dom-实现原理" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-实现原理" aria-hidden="true">#</a> 虚拟 DOM 实现原理？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>虚拟 <span class="token constant">DOM</span> 的实现原理主要包括以下 <span class="token number">3</span> 部分：
  用 JavaScript 对象模拟真实 <span class="token constant">DOM</span> 树，对真实 <span class="token constant">DOM</span> 进行抽象；
  diff 算法 — 比较两棵虚拟 <span class="token constant">DOM</span> 树的差异；
  pach 算法 — 将两个虚拟 <span class="token constant">DOM</span> 对象的差异应用到真正的 <span class="token constant">DOM</span> 树。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-与-object-defineproperty-优劣对比" tabindex="-1"><a class="header-anchor" href="#proxy-与-object-defineproperty-优劣对比" aria-hidden="true">#</a> Proxy 与 Object.defineProperty 优劣对比</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Proxy 的优势如下<span class="token operator">:</span>
	可以直接监听对象而非属性；
	可以直接监听数组的变化；
	有多达 <span class="token number">13</span> 种拦截方法<span class="token punctuation">,</span>不限于 apply、ownKeys、deleteProperty、has 等等是 Object<span class="token punctuation">.</span>defineProperty 不具备的；
	返回的是一个新对象<span class="token punctuation">,</span>我们可以只操作新的对象达到目的<span class="token punctuation">,</span>而 Object<span class="token punctuation">.</span>defineProperty 只能遍历对象属性直接修改；
	作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
  
Object<span class="token punctuation">.</span>defineProperty 的优势如下<span class="token operator">:</span>
	兼容性好，支持 <span class="token constant">IE9</span>，而 Proxy 的存在浏览器兼容性问题<span class="token punctuation">,</span>而且无法用 polyfill 磨平，
  因此 Vue <span class="token function">的作者才声明需要等到下个大版本</span><span class="token punctuation">(</span> <span class="token number">3.0</span> <span class="token punctuation">)</span>才能用 Proxy 重写。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-框架怎么实现对象和数组的监听" tabindex="-1"><a class="header-anchor" href="#vue-框架怎么实现对象和数组的监听" aria-hidden="true">#</a> Vue 框架怎么实现对象和数组的监听？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>如果被问到 Vue 怎么实现数据双向绑定，大家肯定都会回答 通过 Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 对数据进行劫持，
但是 Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 只能对属性进行数据劫持，不能对整个对象进行劫持。
同理无法对数组进行劫持，但是我们在使用 Vue 框架中都知道，Vue 能检测到对象和数组（部分方法的操作）的变化，
那它是怎么实现的呢？我们查看相关代码如下：

  <span class="token doc-comment comment">/**
   * Observe a list of Array items.
   */</span>
  <span class="token function">observeArray</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">items</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">observe</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// observe 功能为监测数据的变化</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 对属性进行递归遍历
   */</span>
  <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token comment">// observe 功能为监测数据的变化</span>
  
通过以上 Vue 源码部分查看，我们就能知道 Vue 框架是通过遍历数组 和递归遍历对象，
从而达到利用 Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 也能对对象和数组（部分方法的操作）进行监听。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-是如何实现数据双向绑定的" tabindex="-1"><a class="header-anchor" href="#vue-是如何实现数据双向绑定的" aria-hidden="true">#</a> Vue 是如何实现数据双向绑定的？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue 数据双向绑定主要是指：数据变化更新视图，视图变化更新数据
	输入框内容变化时，Data 中的数据同步变化。即 <span class="token parameter">View</span> <span class="token operator">=&gt;</span> Data 的变化。
	Data 中的数据变化时，文本节点的内容同步变化。即 <span class="token parameter">Data</span> <span class="token operator">=&gt;</span> View 的变化。

其中，View 变化更新 Data ，可以通过事件监听的方式来实现，所以 Vue 的数据双向绑定的工作主要是如何根据 Data 变化更新 View

Vue 主要通过以下 <span class="token number">4</span> 个步骤来实现数据双向绑定的：
	<span class="token number">1</span>、实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，
  利用 Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 对属性都加上 setter 和 getter。
	这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
	<span class="token number">2</span>、实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，
	并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
	<span class="token number">3</span>、实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，
	主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
	<span class="token number">4</span>、实现一个订阅器 Dep：订阅器采用 发布<span class="token operator">-</span>订阅 设计模式，用来收集订阅者 Watcher，
	对监听器 Observer 和 订阅者 Watcher 进行统一管理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="你有对-vue-项目进行哪些优化" tabindex="-1"><a class="header-anchor" href="#你有对-vue-项目进行哪些优化" aria-hidden="true">#</a> 你有对 Vue 项目进行哪些优化？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>（<span class="token number">1</span>）代码层面的优化
  v<span class="token operator">-</span><span class="token keyword">if</span> 和 v<span class="token operator">-</span>show 区分使用场景
  computed 和 watch 区分使用场景
  v<span class="token operator">-</span><span class="token keyword">for</span> 遍历必须为 item 添加 key，且避免同时使用 v<span class="token operator">-</span><span class="token keyword">if</span>
  长列表性能优化
  事件的销毁
  图片资源懒加载
  路由懒加载
  第三方插件的按需引入
  优化无限列表性能
  服务端渲染 <span class="token constant">SSR</span> or 预渲染

（<span class="token number">2</span>）Webpack 层面的优化
    Webpack 对图片进行压缩
    减少 <span class="token constant">ES6</span> 转为 <span class="token constant">ES5</span> 的冗余代码
    提取公共代码
    模板预编译
    提取组件的 <span class="token constant">CSS</span>
    优化 SourceMap
    构建结果输出分析
    Vue 项目的编译优化

（<span class="token number">3</span>）基础的 Web 技术的优化
    开启 gzip 压缩
    浏览器缓存
    <span class="token constant">CDN</span> 的使用
    使用 Chrome Performance 查找性能瓶颈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-0-特性你有什么了解的吗" tabindex="-1"><a class="header-anchor" href="#vue3-0-特性你有什么了解的吗" aria-hidden="true">#</a> vue3.0 特性你有什么了解的吗？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue <span class="token number">3.0</span> 的目标是让 Vue 核心变得更小、更快、更强大，因此 Vue <span class="token number">3.0</span> 增加以下这些新特性：

（<span class="token number">1</span>）监测机制的改变
  <span class="token number">3.0</span> 将带来基于代理 Proxy 的 observer 实现，提供全语言覆盖的反应性跟踪。
  这消除了 Vue <span class="token number">2</span> 当中基于 Object<span class="token punctuation">.</span>defineProperty 的实现所存在的很多限制：
    <span class="token number">1</span>、只能监测属性，不能监测对象
    <span class="token number">2</span>、检测属性的添加和删除；
    <span class="token number">3</span>、检测数组索引和长度的变更；
    <span class="token number">4</span>、支持 Map、Set、WeakMap 和 WeakSet。

  新的 observer 还提供了以下特性：
    <span class="token number">1</span>、用于创建 observable 的公开 <span class="token constant">API</span>。这为中小规模场景提供了简单轻量级的跨组件状态管理解决方案。
    <span class="token number">2</span>、默认采用惰性观察。在 <span class="token number">2</span><span class="token punctuation">.</span>x 中，不管反应式数据有多大，都会在启动时被观察到。
    如果你的数据集很大，这可能会在应用启动时带来明显的开销。
    在 <span class="token number">3</span><span class="token punctuation">.</span>x 中，只观察用于渲染应用程序最初可见部分的数据。
    <span class="token number">3</span>、更精确的变更通知。在 <span class="token number">2</span><span class="token punctuation">.</span>x 中，通过 Vue<span class="token punctuation">.</span>set 强制添加新属性将导致依赖于该对象的 watcher 收到变更通知。
    在 <span class="token number">3</span><span class="token punctuation">.</span>x 中，只有依赖于特定属性的 watcher 才会收到通知。
    <span class="token number">4</span>、不可变的 observable：我们可以创建值的“不可变”版本（即使是嵌套属性），除非系统在内部暂时将其“解禁”。
    这个机制可用于冻结 prop 传递或 Vuex 状态树以外的变化。
    <span class="token number">5</span>、更好的调试功能：我们可以使用新的 renderTracked 和 renderTriggered 钩子精确地跟踪组件在什么时候
    以及为什么重新渲染。

（<span class="token number">2</span>）模板
  模板方面没有大的变更，只改了作用域插槽，<span class="token number">2</span><span class="token punctuation">.</span>x 的机制导致作用域插槽变了，父组件会重新渲染，
  而 <span class="token number">3.0</span> 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
  同时，对于 render 函数的方面，vue3<span class="token punctuation">.</span><span class="token number">0</span> 也会进行一系列更改来方便习惯直接使用 api 来生成 vdom 。

（<span class="token number">3</span>）对象式的组件声明方式
  vue2<span class="token punctuation">.</span>x 中的组件是通过声明的方式传入一系列 option，和 TypeScript 的结合需要通过一些装饰器的方式来做，
  虽然能实现功能，但是比较麻烦。
  <span class="token number">3.0</span> 修改了组件的声明方式，改成了类式的写法，这样使得和 TypeScript 的结合变得很容易。
  此外，vue 的源码也改用了 TypeScript 来写。其实当代码的功能复杂之后，必须有一个静态类型系统来做一些辅助管理。
  现在 vue3<span class="token punctuation">.</span><span class="token number">0</span> 也全面改用 TypeScript 来重写了，更是使得对外暴露的 api 更容易结合 TypeScript。
  静态类型系统对于复杂代码的维护确实很有必要。
  
（<span class="token number">4</span>）其它方面的更改
  vue3<span class="token punctuation">.</span><span class="token number">0</span> 的改变是全面的，上面只涉及到主要的 <span class="token number">3</span> 个方面，还有一些其他的更改：
    <span class="token number">1</span>、支持自定义渲染器，从而使得 weex 可以通过自定义渲染器的方式来扩展，而不是直接 fork 源码来改的方式。
    <span class="token number">2</span>、支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
    <span class="token number">3</span>、基于 treeshaking 优化，提供了更多的内置功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[l];function p(c,r){return s(),a("div",null,t)}const o=n(i,[["render",p],["__file","mianshiti2.html.vue"]]);export{o as default};
