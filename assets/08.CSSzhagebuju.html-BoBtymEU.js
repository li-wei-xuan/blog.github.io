import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},i=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>网格布局（Grid）是最强大的 CSS 布局方案。
它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Grid 布局将容器划分成<span class="token string">&quot;行&quot;</span>和<span class="token string">&quot;列&quot;</span>，产生单元格，然后指定<span class="token string">&quot;项目所在&quot;</span>的单元格，可以看作是二维布局。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性"><span>容器属性</span></a></h2><h4 id="display-属性" tabindex="-1"><a class="header-anchor" href="#display-属性"><span>display 属性</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">指定一个容器采用网格布局。
div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">指定一个容器是一个行内元素，该元素内部采用网格布局。
div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="grid-template-columns-、-grid-template-rows" tabindex="-1"><a class="header-anchor" href="#grid-template-columns-、-grid-template-rows"><span>grid-template-columns 、 grid-template-rows</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">grid-template-columns属性定义每一列的列宽
grid-template-rows属性定义每一行的行高。

定义一个三行三列的网格，列宽和行高都是100px
.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">除了使用绝对单位，也可以使用百分比。
.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 33.33% 33.33% 33.33%<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 33.33% 33.33% 33.33%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat"><span>repeat()</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">使用repeat()函数，简化重复的值。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 33.33%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 33.33%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="auto-fill-关键字" tabindex="-1"><a class="header-anchor" href="#auto-fill-关键字"><span>auto-fill 关键字</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

除了auto-fill，还有一个关键字auto-fit，两者的行为基本是相同的。只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有行为差异：
auto-fill会用空格子填满剩余宽度，auto-fit则会尽量扩大单元格的宽度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="fr-关键字" tabindex="-1"><a class="header-anchor" href="#fr-关键字"><span>fr 关键字</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为&quot;片段&quot;）。
如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax"><span>minmax()</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>产生一个长度范围，表示长度就在这个范围之中。
它接受两个参数，分别为最小值和最大值。

<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="auto-关键字" tabindex="-1"><a class="header-anchor" href="#auto-关键字"><span>auto 关键字</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>auto关键字表示由浏览器自己决定长度。

<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px auto 100px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="网格线的名称" tabindex="-1"><a class="header-anchor" href="#网格线的名称"><span>网格线的名称</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1] 100px [c2] 100px [c3] auto [c4]<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1] 100px [r2] 100px [r3] auto [r4]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

网格布局允许同一根线有多个名字，比如[fifth-line row-2]。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-row-gap、grid-column-gap、grid-gap" tabindex="-1"><a class="header-anchor" href="#grid-row-gap、grid-column-gap、grid-gap"><span>grid-row-gap、grid-column-gap、grid-gap</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">grid-row-gap属性设置行与行的间隔（行间距）。
grid-column-gap属性设置列与列的间隔（列间距）。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式：
<span class="token property">grid-gap</span><span class="token punctuation">:</span> &lt;grid-row-gap&gt; &lt;grid-column-gap&gt;<span class="token punctuation">;</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">注意事项</p><p>根据最新标准，上面三个属性名的<code>grid-</code>前缀已经删除，<code>grid-column-gap</code>和<code>grid-row-gap</code>写成<code>column-gap</code>和<code>row-gap</code>，<code>grid-gap</code>写成<code>gap</code>。</p></div><h3 id="grid-template-areas" tabindex="-1"><a class="header-anchor" href="#grid-template-areas"><span>grid-template-areas</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">网格布局允许指定&quot;区域&quot;（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a b c&#39;</span>
                       <span class="token string">&#39;d e f&#39;</span>
                       <span class="token string">&#39;g h i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

多个单元格合并成一个区域的写法如下。

<span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;header header header&quot;</span>
                     <span class="token string">&quot;main main sidebar&quot;</span>
                     <span class="token string">&quot;footer footer footer&quot;</span><span class="token punctuation">;</span>

如果某些区域不需要利用，则使用<span class="token string">&quot;点&quot;</span>（.）表示。

<span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a . c&#39;</span>
                     <span class="token string">&#39;d . f&#39;</span>
                     <span class="token string">&#39;g . i&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">注意事项</p><p>注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为<code>区域名-start</code>，终止网格线自动命名为<code>区域名-end</code>。</p><p>比如，区域名为<code>header</code>，则起始位置的水平网格线和垂直网格线叫做<code>header-start</code>，终止位置的水平网格线和垂直网格线叫做<code>header-end</code>。</p></div><h3 id="grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#grid-auto-flow"><span>grid-auto-flow</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>grid-auto-flow属性决定，默认值是row，即<span class="token string">&quot;先行后列&quot;</span>。也可以将它设成column，变成<span class="token string">&quot;先列后行&quot;</span>。

<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row|row dense|column|column dense<span class="token punctuation">;</span>

grid-auto-flow属性除了设置成row和column，还可以设成row dense和column dense。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="justify-items、align-items、place-items" tabindex="-1"><a class="header-anchor" href="#justify-items、align-items、place-items"><span>justify-items、align-items、place-items</span></a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">start</td><td style="text-align:center;">对齐单元格的起始边缘。</td></tr><tr><td style="text-align:center;">end</td><td style="text-align:center;">对齐单元格的结束边缘。</td></tr><tr><td style="text-align:center;">center</td><td style="text-align:center;">单元格内部居中。</td></tr><tr><td style="text-align:center;">stretch</td><td style="text-align:center;">拉伸，占满单元格的整个宽度（默认值）。</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

place-items属性是align-items属性和justify-items属性的合并简写形式。
<span class="token property">place-items</span><span class="token punctuation">:</span> &lt;align-items&gt; &lt;justify-items&gt;<span class="token punctuation">;</span>

如果省略第二个值，则浏览器认为与第一个值相等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="justify-content、align-content、-place-content" tabindex="-1"><a class="header-anchor" href="#justify-content、align-content、-place-content"><span>justify-content、align-content、 place-content</span></a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">start</td><td style="text-align:center;">对齐容器的起始边框。</td></tr><tr><td style="text-align:center;">end</td><td style="text-align:center;">对齐容器的结束边框。</td></tr><tr><td style="text-align:center;">center</td><td style="text-align:center;">容器内部居中。</td></tr><tr><td style="text-align:center;">stretch</td><td style="text-align:center;">项目大小没有指定时，拉伸占据整个网格容器。</td></tr><tr><td style="text-align:center;">space-around</td><td style="text-align:center;">每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。</td></tr><tr><td style="text-align:center;">space-between</td><td style="text-align:center;">项目与项目的间隔相等，项目与容器边框之间没有间隔。</td></tr><tr><td style="text-align:center;">space-evenly</td><td style="text-align:center;">项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

place-content属性是align-content属性和justify-content属性的合并简写形式。
<span class="token property">place-content</span><span class="token punctuation">:</span> &lt;align-content&gt; &lt;justify-content&gt;

如果省略第二个值，浏览器就会假定第二个值等于第一个值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-auto-columns、grid-auto-rows" tabindex="-1"><a class="header-anchor" href="#grid-auto-columns、grid-auto-rows"><span>grid-auto-columns、grid-auto-rows</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。
它们的写法与grid-template-columns和grid-template-rows完全相同。
如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-template、grid" tabindex="-1"><a class="header-anchor" href="#grid-template、grid"><span>grid-template、grid</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式

<span class="token property">grid-template</span><span class="token punctuation">:</span> none|grid-template-rows / grid-template-columns|grid-template-areas|initial|inherit<span class="token punctuation">;</span>

grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

从易读易写的角度考虑，还是建议不要合并属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-column-start-、grid-column-end、-grid-row-start-、-grid-row-end" tabindex="-1"><a class="header-anchor" href="#grid-column-start-、grid-column-end、-grid-row-start-、-grid-row-end"><span>grid-column-start 、grid-column-end、 grid-row-start 、 grid-row-end</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">grid-column-start属性：左边框所在的垂直网格线
grid-column-end属性：右边框所在的垂直网格线
grid-row-start属性：上边框所在的水平网格线
grid-row-end属性：下边框所在的水平网格线

.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-column、-grid-row" tabindex="-1"><a class="header-anchor" href="#grid-column、-grid-row"><span>grid-column、 grid-row</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。

.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> &lt;start-line&gt; / &lt;end-line&gt;<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> &lt;start-line&gt; / &lt;end-line&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">这两个属性之中，也可以使用span关键字，表示跨越多少个网格。

.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #b03532<span class="token punctuation">;</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 等同于 */</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #b03532<span class="token punctuation">;</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / span 2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

斜杠以及后面的部分可以省略，默认跨越一个网格。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area"><span>grid-area</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">项目位于e区域

.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。

.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="justify-self、align-self、place-self" tabindex="-1"><a class="header-anchor" href="#justify-self、align-self、place-self"><span>justify-self、align-self、place-self</span></a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">start</td><td style="text-align:center;">对齐单元格的起始边缘。</td></tr><tr><td style="text-align:center;">end</td><td style="text-align:center;">对齐单元格的结束边缘。</td></tr><tr><td style="text-align:center;">center</td><td style="text-align:center;">单元格内部居中。</td></tr><tr><td style="text-align:center;">stretch</td><td style="text-align:center;">拉伸，占满单元格的整个宽度（默认值）。</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。

align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。

.item</span> <span class="token punctuation">{</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

place-self属性是align-self属性和justify-self属性的合并简写形式。

<span class="token property">place-self</span><span class="token punctuation">:</span> &lt;align-self&gt; &lt;justify-self&gt;<span class="token punctuation">;</span>
如果省略第二个值，place-self属性会认为这两个值相等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),l=[i];function c(d,p){return s(),a("div",null,l)}const o=n(t,[["render",c],["__file","08.CSSzhagebuju.html.vue"]]),u=JSON.parse('{"path":"/docs/CSS/08.CSSzhagebuju.html","title":"CSS栅格布局","lang":"zh-CN","frontmatter":{"title":"CSS栅格布局","date":"2023-12-08T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"容器属性","slug":"容器属性","link":"#容器属性","children":[{"level":3,"title":"grid-row-gap、grid-column-gap、grid-gap","slug":"grid-row-gap、grid-column-gap、grid-gap","link":"#grid-row-gap、grid-column-gap、grid-gap","children":[]},{"level":3,"title":"grid-template-areas","slug":"grid-template-areas","link":"#grid-template-areas","children":[]},{"level":3,"title":"grid-auto-flow","slug":"grid-auto-flow","link":"#grid-auto-flow","children":[]},{"level":3,"title":"justify-items、align-items、place-items","slug":"justify-items、align-items、place-items","link":"#justify-items、align-items、place-items","children":[]},{"level":3,"title":"justify-content、align-content、 place-content","slug":"justify-content、align-content、-place-content","link":"#justify-content、align-content、-place-content","children":[]},{"level":3,"title":"grid-auto-columns、grid-auto-rows","slug":"grid-auto-columns、grid-auto-rows","link":"#grid-auto-columns、grid-auto-rows","children":[]},{"level":3,"title":"grid-template、grid","slug":"grid-template、grid","link":"#grid-template、grid","children":[]},{"level":3,"title":"grid-column-start 、grid-column-end、 grid-row-start 、 grid-row-end","slug":"grid-column-start-、grid-column-end、-grid-row-start-、-grid-row-end","link":"#grid-column-start-、grid-column-end、-grid-row-start-、-grid-row-end","children":[]},{"level":3,"title":"grid-column、 grid-row","slug":"grid-column、-grid-row","link":"#grid-column、-grid-row","children":[]},{"level":3,"title":"grid-area","slug":"grid-area","link":"#grid-area","children":[]},{"level":3,"title":"justify-self、align-self、place-self","slug":"justify-self、align-self、place-self","link":"#justify-self、align-self、place-self","children":[]}]}],"git":{"createdTime":1702032067000,"updatedTime":1702032067000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/CSS/08.CSS栅格布局.md","readingTime":{"minutes":7.59,"words":2276}}');export{o as comp,u as data};
