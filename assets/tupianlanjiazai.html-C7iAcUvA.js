import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},p=t(`<h2 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载"><span>图片懒加载</span></a></h2><p>图片懒加载（lazy loading）是一种优化网站性能的技术，它可以将页面中的图片延迟加载，直到用户滚动到它们的位置时才加载。这意味着在页面初始加载时，只有用户可见区域内的图片会被加载，而其他图片则会等到需要显示时再进行加载。</p><p>使用图片懒加载可以提高网站的加载速度，因为它可以减少初始加载时需要下载的资源数量，从而使页面更快地呈现给用户。此外，它还可以降低网络流量的消耗，因为不会在访问页面时一次性下载所有的图片。</p><p>要实现图片懒加载，通常需要使用JavaScript来监测页面滚动事件，然后根据用户的滚动位置决定哪些图片需要被加载。常见的库包括<code>jQuery Lazy</code>和<code>Lozad.js</code></p><h2 id="javascript实现代码" tabindex="-1"><a class="header-anchor" href="#javascript实现代码"><span>javascript实现代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 方法一 监听滚动条 
 */</span>
<span class="token comment">// 获取所有需要进行懒加载的图片元素</span>
<span class="token keyword">const</span> lazyImages <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断元素是否在可见区域内</span>
<span class="token keyword">const</span> <span class="token function-variable function">isInViewport</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> rect <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> rect<span class="token punctuation">.</span>top <span class="token operator">&lt;=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">&amp;&amp;</span> rect<span class="token punctuation">.</span>bottom <span class="token operator">&gt;=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// 加载图片</span>
<span class="token keyword">const</span> <span class="token function-variable function">loadImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>lazyImages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">img</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInViewport</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      img<span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 防抖</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加事件</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>loadImg<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 方法二 IntersectionObserver 实例 
 */</span>

<span class="token comment">// 获取所有需要进行懒加载的图片元素</span>
<span class="token keyword">const</span> lazyImages <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 IntersectionObserver 实例</span>
<span class="token keyword">let</span> ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token parameter">entires</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  entires<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> Img <span class="token operator">=</span> val<span class="token punctuation">.</span>target
    <span class="token comment">// 将 data-src 属性替换为 src 属性</span>
    <span class="token comment">// 判断方法一</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>intersectionRatio <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> val<span class="token punctuation">.</span>intersectionRatio <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Img<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> Img<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// 停止观察已经加载的图片</span>
      ob<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>Img<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// // 判断方法二</span>
    <span class="token comment">// if (val.isIntersecting) {</span>
    <span class="token comment">//     Img.src = Img.dataset.src</span>
    <span class="token comment">//     // 停止观察已经加载的图片</span>
    <span class="token comment">//     ob.unobserve(Img)</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 开始观察每个需要懒加载的图片元素</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>lazyImages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=&gt;</span> ob<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","tupianlanjiazai.html.vue"]]),k=JSON.parse('{"path":"/blogs/other/tupianlanjiazai.html","title":"图片懒加载","lang":"zh-CN","frontmatter":{"title":"图片懒加载","date":"2023-05-23T00:00:00.000Z","tags":["other"],"categories":["other"]},"headers":[{"level":2,"title":"图片懒加载","slug":"图片懒加载","link":"#图片懒加载","children":[]},{"level":2,"title":"javascript实现代码","slug":"javascript实现代码","link":"#javascript实现代码","children":[]}],"git":{"createdTime":1684836461000,"updatedTime":1684836461000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/other/图片懒加载.md","readingTime":{"minutes":1.68,"words":504}}');export{r as comp,k as data};
