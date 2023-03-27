import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const p={},t=e(`<h1 id="样式还有书写顺序" tabindex="-1"><a class="header-anchor" href="#样式还有书写顺序" aria-hidden="true">#</a> <strong>样式还有书写顺序？</strong></h1><blockquote><p>样式还有书写顺序？样式这么简单的东西，不是随便写写就行的么。很多初学者，甚至有一定工作经验的人都会发出这种疑问。而样式的书写顺序到底对页面有没有影响呢？答案是肯定的。如何写出好的css样式也是一个优秀的开发者必须要知道的！而且应该养成习惯，融入到开发中！好的习惯不是一点养成的。</p></blockquote><p>为什么要注意书写顺序？</p><blockquote><p>减少浏览器reflow(重排），提升浏览器渲染dom树的性能</p></blockquote><p><code>①:</code>解析html构建dom树，解析css构建css树：将html解析成树形的数据结构，将css解析成树形的数据结构</p><p><code>②:</code>构建render树：DOM树和CSS树合并之后形成的render树。</p><p><code>③:</code>布局render树：有了render树，浏览器已经知道那些网页中有哪些节点，各个节点的css定义和以及它们的从属关系，从而计算出每个节点在屏幕中的位置。</p><p><code>④:</code>绘制render树：按照计算出来的规则，通过显卡把内容画在屏幕上。</p><p>css样式解析到显示至浏览器屏幕上就发生在<code>②③④</code>步骤，可见浏览器并不是一获取到css样式就立马开始解析而是根据css样式的书写顺序将之按照dom树的结构分布render样式，完成第<code>②</code>步，然后开始遍历每个树结点的css样式进行解析，此时的css样式的遍历顺序完全是按照之前的书写顺序。</p><p>样式的书写顺序是如何影响网页的？</p><blockquote><p>比如如下代码：</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当浏览器解析到<code>display</code>的时候，突然发现元素是块级元素，而之前是按照行内元素渲染的！这个时候不得不回头重新渲染，在按照块级元素解析span标签。正确的做法是<code>display</code>写在样式<code>最前面</code>，一开始就以块级元素渲染span标签。</p><p>在看一个例子：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
   
    <span class="token property">width</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
     <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子 解析到<code>position</code>的时候，突然发现该元素是绝对定位元素需要脱离文档流，而之前却是按照普通元素进行解析的，所以不得不重新渲染，而绝对定位是根据已经定位的父元素定位的，如果父元素的大小不一样，就会出现.box大小会重新改变的结果，使页面闪动。定位又是脱离文档流的，浮起来之后可能会影响其他元素排列布局。 <code>一遍能过的非要渲染两遍 是很浪费性能的,大量的重绘页面会导致页面一闪一闪的，影响用户体验~</code></p><p>比如这个也是一个典型例子</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  	<span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子已经把元素渲染了一遍,结果到最后发现不需要然后又需要去删除前面那些样式.</p><p>1）定位属性：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token selector">.list</span><span class="token punctuation">{</span>
        display
        position
        float  
        left  
        top  
        right  
        bottom   
        overflow  
        clear   
        z-index
      	content
    	list-style
     	visibility
   <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）自身属性：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.list</span><span class="token punctuation">{</span>
        width
        height
      	padding  
   		border
        margin   
        background
   <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）文字样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list</span><span class="token punctuation">{</span>
        font-family   
        font-size   
        font-style   
        font-weight   
        font-varient   
        color   
   <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）文本属性：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.list</span><span class="token punctuation">{</span>
        text-align   
        vertical-align   
        text-wrap   
        text-transform   
        text-indent    
        text-decoration   
        letter-spacing    
        word-spacing    
        white-space 
        text-overflow
   <span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）css3中新增属性：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.list</span><span class="token punctuation">{</span>  
         box-shadow
         cursor 
         border-radius  
         <span class="token property">background</span><span class="token punctuation">:</span>linear-gradient
         transform……
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.cl</span> <span class="token punctuation">{</span>  
    <span class="token property">display</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">visibility</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">float</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">clear</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">position</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">right</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">max-height</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">overflow</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-top-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-right-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-bottom-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-left-width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">border-style</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-top-style</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-right-style</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-bottom-style</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-left-style</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-top-color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-right-color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">outline</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">list-style</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">table-layout</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">caption-side</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">border-spacing</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">empty-cells</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">font</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">text-align</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">text-indent</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">text-transform</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">word-spacing</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">white-space</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">background-repeat</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  

    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
    <span class="token property">quotes</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css代码的行为规范" tabindex="-1"><a class="header-anchor" href="#css代码的行为规范" aria-hidden="true">#</a> css代码的行为规范</h2><p>不要以完全没有语义的标签作为选择器,这会造成大面积污染</p><blockquote><p>除非你可以断定现在或将来你的这个选择器不会污染其他同类</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不推荐 */</span>
<span class="token selector">.m-xxx div</span><span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简写css颜色属性值" tabindex="-1"><a class="header-anchor" href="#简写css颜色属性值" aria-hidden="true">#</a> 简写css颜色属性值</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">/* 不推荐 */</span>
<span class="token punctuation">.</span>box<span class="token punctuation">{</span> color<span class="token punctuation">:</span>#<span class="token number">000000</span><span class="token punctuation">;</span> background<span class="token operator">-</span>color<span class="token punctuation">:</span>#ddeeff<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/* 推荐 */</span>
<span class="token punctuation">.</span>box<span class="token punctuation">{</span> color<span class="token punctuation">:</span>#<span class="token number">000</span><span class="token punctuation">;</span> background<span class="token operator">-</span>color<span class="token punctuation">:</span>#def<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除css属性值为0的单位" tabindex="-1"><a class="header-anchor" href="#删除css属性值为0的单位" aria-hidden="true">#</a> 删除css属性值为0的单位</h4><blockquote><p>0就是0，任何单位都不需要,只要前面的数值为0,后面的单位都可以去掉 .</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不推荐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/* 推荐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除无用css样式" tabindex="-1"><a class="header-anchor" href="#删除无用css样式" aria-hidden="true">#</a> 删除无用CSS样式</h4><blockquote><p>第一，删除无用的样式后可以减少整个网页文档的体积，提升网页的加载速度；第二，对于浏览器而言，所有的样式规则的都会被浏览器检索并且解析，即使是当前页面没有匹配的样式规则 , 浏览器也会进行检索和解析 , 所以如果去除了没有匹配的样式规则，就能够减少浏览器的索引项 ，加快浏览器的检索速度；</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不推荐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.nav</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.nav-item</span><span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/* 推荐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.nav-item</span><span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="为单个css选择器或新申明开启新行" tabindex="-1"><a class="header-anchor" href="#为单个css选择器或新申明开启新行" aria-hidden="true">#</a> 为单个css选择器或新申明开启新行</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 不推荐 */</span>
<span class="token selector">.home-count .hd,.content-title,.select-game-title .title</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token selector">.nav</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/* 推荐 */</span>
<span class="token selector">.home-count .hd,
.content-title,
.select-game-title .title</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.nav</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css代码的命名规范" tabindex="-1"><a class="header-anchor" href="#css代码的命名规范" aria-hidden="true">#</a> css代码的命名规范</h2><blockquote><p>1.必须以字母开头命名选择器，这样可保证在所有浏览器下都能兼容；</p><p>2.不允许单个字母的类选择器出现；</p><p>3.不允许命名带有广告等英文的单词，例如ad,adv,adver,advertising，已防止该模块被浏览器当成垃圾广告过滤掉。任何文件的命名均如此。</p><p>4.下划线 ’ _ ’ 禁止出现在class命名中，全小写,统一使用’-‘连字符.</p><p>5.见名知义</p></blockquote><h4 id="命名应简约而不失语义" tabindex="-1"><a class="header-anchor" href="#命名应简约而不失语义" aria-hidden="true">#</a> 命名应简约而不失语义</h4><blockquote><p>1.避免过度简写 , .ico足够表示这是一个图标 , 而.i不代表任何意思</p><p>2.使用有意义的名称，使用结构化或者作用目标相关的，而不是抽象的名称</p></blockquote><h3 id="html命名示范" tabindex="-1"><a class="header-anchor" href="#html命名示范" aria-hidden="true">#</a> html命名示范</h3><p>https://www.cnblogs.com/LifeiBoke/p/6791528.html</p>`,50),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","19.cssyangshishuxieshunxuhemingmingguifan.html.vue"]]);export{d as default};
