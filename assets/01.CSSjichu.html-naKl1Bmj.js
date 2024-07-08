import{_ as s,o as n,c as e,a}from"./app-EaupiRXX.js";const t={},i=a(`<p>CSS 的全称为：层叠样式表 ( Cascading Style Sheets ) 。<br> CSS 也是一种标记语言，用于给 HTML 结构设置样式，例如：文字大小、颜色、元素宽高等等。</p><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>简单理解： CSS 可以美化 HTML , 让 HTML 更漂亮。<br> 核心思想： HTML 搭建结构， CSS 添加样式，实现了：结构与样式的分离。</p></div><h2 id="css的编写位置" tabindex="-1"><a class="header-anchor" href="#css的编写位置"><span>CSS的编写位置</span></a></h2><h3 id="行内样式" tabindex="-1"><a class="header-anchor" href="#行内样式"><span>行内样式</span></a></h3><p>写在标签的 style 属性中，（又称：内联样式）</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>&lt;h1 style=<span class="token string">&quot;color:red;font-size:60px;&quot;</span>&gt;行内样式&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="内部样式" tabindex="-1"><a class="header-anchor" href="#内部样式"><span>内部样式</span></a></h3><p>写在 html 页面内部，将所有的 CSS 代码提取出来，单独放在 <code>&lt;style&gt;</code> 标签中。</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
h1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> 
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部样式" tabindex="-1"><a class="header-anchor" href="#外部样式"><span>外部样式</span></a></h3><p>写在单独的 .css 文件中，随后在 HTML 文件中引入使用</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>&lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> href=<span class="token string">&quot;./xxx.css&quot;</span>&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="样式表的优先级" tabindex="-1"><a class="header-anchor" href="#样式表的优先级"><span>样式表的优先级</span></a></h2><table><thead><tr><th>分类</th><th>优点</th><th>缺点</th><th>使用频率</th><th>作用范围</th></tr></thead><tbody><tr><td>行内样式</td><td>优先级最高</td><td>1. 结构与样式未分离<br>2. 代码结构混乱<br>3. 样式不能复用</td><td>很低</td><td>当前标签</td></tr><tr><td>内部样式</td><td>1.样式可复用<br>2.代码结构清晰</td><td>1. 结构与样式未彻底分离<br>2. 样式不能多页面复用</td><td>一般</td><td>当前页</td></tr><tr><td>外部样式</td><td>1. 样式可多页面复用<br>2. 代码结构清晰<br>3. 可触发浏览器的缓存机<br>4. 结构与样式彻底分离</td><td>需要引入才能使用</td><td>最高</td><td>多个页面</td></tr></tbody></table><h2 id="css优先级计算" tabindex="-1"><a class="header-anchor" href="#css优先级计算"><span>CSS优先级计算</span></a></h2><p>通过<strong>不同的选择器</strong>，选中<strong>相同的元素</strong> ，并且为<strong>相同的样式名</strong>设置<strong>不同的值</strong>时，就发生了样式的冲突。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>简单描述：
行内样式 &gt; ID 选择器 &gt; 类选择器 &gt; 元素选择器 &gt; 通配选择器。

详细描述
	计算方式：每个选择器，都可计算出一组权重，格式为： (a,b,c) 
		a : ID 选择器的个数。
		b : 类、伪类、属性 选择器的个数。
		c : 元素、伪元素 选择器的个数。

特殊规则：
  1. 行内样式权重大于所有选择器。 
  2. !important 的权重，大于行内样式，大于所有选择器，权重最高！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css语法规范" tabindex="-1"><a class="header-anchor" href="#css语法规范"><span>CSS语法规范</span></a></h2><p><strong>选择器</strong>：找到要添加样式的元素。</p><p><strong>声明块</strong>：设置具体的样式（<strong>声明块</strong>是由一个或多个<strong>声明</strong>组成的），声明的格式为： 属性名: 属性值;</p><h4 id="注释的写法" tabindex="-1"><a class="header-anchor" href="#注释的写法"><span>注释的写法</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 给h1元素添加样式 */</span> 
<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 设置文字颜色为红色 */</span> 
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> 
  <span class="token comment">/* 设置文字大小为40px */</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css代码风格" tabindex="-1"><a class="header-anchor" href="#css代码风格"><span>CSS代码风格</span></a></h2><ul><li><strong>展开风格</strong> —— 开发时推荐，便于维护和调试。</li></ul><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>紧凑风格</strong> —— 项目上线时推荐，可减小文件体积。</li></ul><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="css三大特性" tabindex="-1"><a class="header-anchor" href="#css三大特性"><span>CSS三大特性</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>1. 层叠性
概念：如果发生了样式冲突，那就会根据一定的规则（选择器优先级），进行样式的层叠（覆盖）。
什么是样式冲突？ ——— 元素的同一个样式名，被设置了不同的值，这就是冲突。

2. 继承性
  概念：元素会自动拥有其父元素、或其祖先元素上所设置的某些样式。
  规则：优先继承离得近的。
  常见的可继承属性：
  	text-?? ， font-?? ， line-?? 、 color ......
  备注：参照MDN网站，可查询属性是否可被继承。
  
3. 优先级
  简单聊： <span class="token important">!important</span> &gt; 行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 元素选择器 &gt; * &gt; 继承的样式。
  详细聊：需要计算权重。
  计算权重时需要注意：并集选择器的每一个部分是分开算的！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[i];function c(d,r){return n(),e("div",null,l)}const p=s(t,[["render",c],["__file","01.CSSjichu.html.vue"]]),u=JSON.parse('{"path":"/docs/CSS/01.CSSjichu.html","title":"CSS基础","lang":"zh-CN","frontmatter":{"title":"CSS基础","date":"2023-05-25T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"CSS的编写位置","slug":"css的编写位置","link":"#css的编写位置","children":[{"level":3,"title":"行内样式","slug":"行内样式","link":"#行内样式","children":[]},{"level":3,"title":"内部样式","slug":"内部样式","link":"#内部样式","children":[]},{"level":3,"title":"外部样式","slug":"外部样式","link":"#外部样式","children":[]}]},{"level":2,"title":"样式表的优先级","slug":"样式表的优先级","link":"#样式表的优先级","children":[]},{"level":2,"title":"CSS优先级计算","slug":"css优先级计算","link":"#css优先级计算","children":[]},{"level":2,"title":"CSS语法规范","slug":"css语法规范","link":"#css语法规范","children":[]},{"level":2,"title":"CSS代码风格","slug":"css代码风格","link":"#css代码风格","children":[]},{"level":2,"title":"CSS三大特性","slug":"css三大特性","link":"#css三大特性","children":[]}],"git":{"createdTime":1685003318000,"updatedTime":1685358040000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":2}]},"filePathRelative":"docs/CSS/01.CSS基础.md","readingTime":{"minutes":3.01,"words":903}}');export{p as comp,u as data};
