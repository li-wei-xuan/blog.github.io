import{_ as e,o as i,c as l,a as t}from"./app-EaupiRXX.js";const s={},n=t(`<h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>setup</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. 理解：Vue3.0中一个新的配置项，值为一个函数。
2. setup是所有Composition API（组合API）“ 表演的舞台 ”。
3. 组件中所用到的：数据、方法等等，均要配置在setup中。
4. setup函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
   2. 若返回一个渲染函数：则可以自定义渲染内容。（了解）
5. 注意点：
   1. 尽量不要与Vue2.x配置混用
      a.Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
      b.但在setup中不能访问到Vue2.x配置（data、methos、computed...）。
      c.如果有重名, setup优先。
   2. setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。
   （后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup的两个注意点" tabindex="-1"><a class="header-anchor" href="#setup的两个注意点"><span>setup的两个注意点</span></a></h3><ul><li><p>setup执行的时机</p><ul><li>在beforeCreate之前执行一次，this是undefined。</li></ul></li><li><p>setup的参数</p><ul><li>props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。</li><li>context：上下文对象 <ul><li>attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 <code>this.$attrs</code>。</li><li>slots: 收到的插槽内容, 相当于 <code>this.$slots</code>。</li><li>emit: 分发自定义事件的函数, 相当于 <code>this.$emit</code>。</li></ul></li></ul></li></ul><h3 id="ref函数" tabindex="-1"><a class="header-anchor" href="#ref函数"><span>ref函数</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>作用: 定义一个响应式的数据
语法: const xxx = ref(initValue) 
  创建一个包含响应式数据的引用对象（reference对象，简称ref对象。
  JS中操作数据： xxx.value
  模板中读取数据: 不需要.value，直接：&lt;div&gt;{{xxx}}&lt;/div&gt;
备注：
  接收的数据可以是：基本类型、也可以是对象类型。
  基本类型的数据：响应式依然是靠 Object.defineProperty() 的 get 与 set 完成的。
  对象类型的数据：内部 “ 求助 ”了Vue3.0中的一个新函数——  reactive 函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive函数" tabindex="-1"><a class="header-anchor" href="#reactive函数"><span>reactive函数</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用 ref 函数）
语法：
  const 代理对象= reactive(源对象) 接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
  reactive定义的响应式数据是“深层次的”。
  内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive对比ref" tabindex="-1"><a class="header-anchor" href="#reactive对比ref"><span>reactive对比ref</span></a></h3><ul><li>从定义数据角度对比： <ul><li>ref用来定义：<strong style="color:#DD5145;">基本类型数据</strong>。</li><li>reactive用来定义：<strong style="color:#DD5145;">对象（或数组）类型数据</strong>。</li><li>备注：ref也可以用来定义<strong style="color:#DD5145;">对象（或数组）类型数据</strong>, 它内部会自动通过<code>reactive</code>转为<strong style="color:#DD5145;">代理对象</strong>。</li></ul></li><li>从原理角度对比： <ul><li>ref通过<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>来实现响应式（数据劫持）。</li><li>reactive通过使用<strong style="color:#DD5145;">Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:#DD5145;">Reflect</strong>操作<strong style="color:orange;">源对象</strong>内部的数据。</li></ul></li><li>从使用角度对比： <ul><li>ref定义的数据：操作数据<strong style="color:#DD5145;">需要</strong><code>.value</code>，读取数据时模板中直接读取<strong style="color:#DD5145;">不需要</strong><code>.value</code>。</li><li>reactive定义的数据：操作数据与读取数据：<strong style="color:#DD5145;">均不需要</strong><code>.value</code>。</li></ul></li></ul>`,10),r=[n];function a(d,c){return i(),l("div",null,r)}const u=e(s,[["render",a],["__file","08.vue3changyongAPI.html.vue"]]),v=JSON.parse('{"path":"/docs/Vue/08.vue3changyongAPI.html","title":"vue3常用API","lang":"zh-CN","frontmatter":{"title":"vue3常用API","date":"2023-04-20T00:00:00.000Z","tags":["vue"],"categories":["vue"]},"headers":[{"level":3,"title":"setup","slug":"setup","link":"#setup","children":[]},{"level":3,"title":"setup的两个注意点","slug":"setup的两个注意点","link":"#setup的两个注意点","children":[]},{"level":3,"title":"ref函数","slug":"ref函数","link":"#ref函数","children":[]},{"level":3,"title":"reactive函数","slug":"reactive函数","link":"#reactive函数","children":[]},{"level":3,"title":"reactive对比ref","slug":"reactive对比ref","link":"#reactive对比ref","children":[]}],"git":{"createdTime":1682415338000,"updatedTime":1682415338000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/Vue/08.vue3常用API.md","readingTime":{"minutes":2.86,"words":857}}');export{u as comp,v as data};
