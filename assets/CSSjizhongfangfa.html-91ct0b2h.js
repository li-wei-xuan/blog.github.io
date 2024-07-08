import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},i=e(`<h2 id="居中方式" tabindex="-1"><a class="header-anchor" href="#居中方式"><span>居中方式</span></a></h2><p>居中方式分为三种：水平居中，垂直居中，水平垂直居中</p><h2 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中"><span>水平居中</span></a></h2><h3 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素"><span>行内元素</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 利用text-align:center可以实现行内元素水平居中
对行内元素(inline)，行内块(inline-block)，行内表(inline-table)，inline-flex也有效果 */</span>

  <span class="token selector">&lt;div class=&quot;center&quot;&gt;
      test
  &lt;/div&gt;

  div</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px soild black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素"><span>块级元素</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 通过把固定宽度的块级元素的margin-left和margin-right设成auto,就可以使块级元素水平居中 */</span>

  <span class="token selector">&lt;div&gt;
      &lt;p class=&quot;center&quot;&gt;&lt;/p&gt;
  &lt;/div&gt;

  div</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px soild black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多块级元素" tabindex="-1"><a class="header-anchor" href="#多块级元素"><span>多块级元素</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 方法一：利用inline-block */</span>

<span class="token comment">/* 通过改变块级元素为inline-block和父容器的text-align属性来实现多块级元素水平居中 */</span>

  <span class="token selector">&lt;div id=&quot;app&quot;&gt;
      &lt;div class=&quot;center&quot;&gt;
         第一个块级元素
      &lt;/div&gt;
      &lt;div class=&quot;center&quot;&gt;
          第二个块级元素
      &lt;/div&gt;
      &lt;div class=&quot;center&quot;&gt;
          第三个块级元素
      &lt;/div&gt;
  &lt;/div&gt;

  #app</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px soild black<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.center</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span>1rem<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>   
  <span class="token punctuation">}</span>

<span class="token comment">/* 方法二：利用flex布局 */</span>
  <span class="token selector">#app</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px soild black<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.center</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span>1rem<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中"><span>垂直居中</span></a></h2><h3 id="单行行内元素" tabindex="-1"><a class="header-anchor" href="#单行行内元素"><span>单行行内元素</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 通过设置内联元素的高度(height)和行高(line-height)相等，从而使元素垂直居中 */</span>

  <span class="token selector">&lt;div id=&quot;app&quot;&gt;
    第一个块级元素
  &lt;/div&gt;

  #app</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px soild black<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行元素" tabindex="-1"><a class="header-anchor" href="#多行元素"><span>多行元素</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 方法一：利用表格布局 */</span>
<span class="token comment">/* 利用表格布局的vertical-align:middle可以实现子元素的垂直居中 */</span>

  <span class="token selector">&lt;div class=&quot;center&quot;&gt;
      &lt;p class=&quot;cell&quot;&gt;
          The more technology you learn,&lt;br&gt;
          the more you realize how little you know.
      &lt;/p&gt;
  &lt;/div&gt;

  .center</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #f69c55<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.cell</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token comment">/* 方法二：利用flex布局 */</span>
  <span class="token selector">.center</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #f69c55<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级元素-1" tabindex="-1"><a class="header-anchor" href="#块级元素-1"><span>块级元素</span></a></h3><h4 id="固定高度的块级元素" tabindex="-1"><a class="header-anchor" href="#固定高度的块级元素"><span>固定高度的块级元素</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 已知居中元素的高度和宽度，通过绝对定位元素距离顶部50%，并设置margin-top向上偏移元素高度的一半，就可实现垂直居中。 */</span>
  <span class="token selector">&lt;div class=&quot;parent&quot;&gt;
      &lt;div class=&quot;child&quot;&gt;世界上有 10 种人，懂二进制的和不懂二进制的。&lt;/div&gt;
  &lt;/div&gt;

  .parent</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #f69c55<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="未知高度的块级元素" tabindex="-1"><a class="header-anchor" href="#未知高度的块级元素"><span>未知高度的块级元素</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 高度未知，借助CSS3中的transform属性向Y轴反向偏移50%的方法实现垂直居中，部分浏览器可能存在兼容性问题。 */</span>
  <span class="token selector">&lt;div class=&quot;parent&quot;&gt;
     &lt;div class=&quot;child&quot;&gt;世界上有 10 种人，懂二进制的和不懂二进制的。&lt;/div&gt;
  &lt;/div&gt;
  .parent</span> <span class="token punctuation">{</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
     <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
     <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #f69c55<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
     <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
     <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
     <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
     <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
     <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
     <span class="token property">width</span><span class="token punctuation">:</span> 12rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中"><span>水平垂直居中</span></a></h2><h3 id="固定宽高" tabindex="-1"><a class="header-anchor" href="#固定宽高"><span>固定宽高</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>  <span class="token selector">&lt;div class=&quot;parent&quot;&gt;
     &lt;div class=&quot;child&quot;&gt;世界上有 10 种人，懂二进制的和不懂二进制的。&lt;/div&gt;
  &lt;/div&gt;
  .parent</span> <span class="token punctuation">{</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
     <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #f69c55<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
     <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
     <span class="token property">line-height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未知宽高元素" tabindex="-1"><a class="header-anchor" href="#未知宽高元素"><span>未知宽高元素</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>  <span class="token selector">利用2D变化，在水平和垂直方向都反向平移宽高的一半
  .topTitle</span> <span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="利用flex布局" tabindex="-1"><a class="header-anchor" href="#利用flex布局"><span>利用flex布局</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  利用flex布局，其中justify-content用于设置或检索弹性盒子元素在主轴上方向上的对齐方式,
  而align-items属性定义flex子项在flex容器的当前行的侧轴方向上的对齐方式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","CSSjizhongfangfa.html.vue"]]),r=JSON.parse('{"path":"/blogs/interview/CSSjizhongfangfa.html","title":"CSS居中方式","lang":"zh-CN","frontmatter":{"title":"CSS居中方式","date":"2022-12-02T00:00:00.000Z","tags":["css","interview"],"categories":["interview"]},"headers":[{"level":2,"title":"居中方式","slug":"居中方式","link":"#居中方式","children":[]},{"level":2,"title":"水平居中","slug":"水平居中","link":"#水平居中","children":[{"level":3,"title":"行内元素","slug":"行内元素","link":"#行内元素","children":[]},{"level":3,"title":"块级元素","slug":"块级元素","link":"#块级元素","children":[]},{"level":3,"title":"多块级元素","slug":"多块级元素","link":"#多块级元素","children":[]}]},{"level":2,"title":"垂直居中","slug":"垂直居中","link":"#垂直居中","children":[{"level":3,"title":"单行行内元素","slug":"单行行内元素","link":"#单行行内元素","children":[]},{"level":3,"title":"多行元素","slug":"多行元素","link":"#多行元素","children":[]},{"level":3,"title":"块级元素","slug":"块级元素-1","link":"#块级元素-1","children":[]}]},{"level":2,"title":"水平垂直居中","slug":"水平垂直居中","link":"#水平垂直居中","children":[{"level":3,"title":"固定宽高","slug":"固定宽高","link":"#固定宽高","children":[]},{"level":3,"title":"未知宽高元素","slug":"未知宽高元素","link":"#未知宽高元素","children":[]},{"level":3,"title":"利用flex布局","slug":"利用flex布局","link":"#利用flex布局","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1684806477000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":2}]},"filePathRelative":"blogs/interview/CSS居中方法.md","readingTime":{"minutes":2.84,"words":851}}');export{d as comp,r as data};
