import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},i=e(`<h2 id="css基本选择器" tabindex="-1"><a class="header-anchor" href="#css基本选择器"><span>CSS基本选择器</span></a></h2><p>基本选择器：<code>通配选择器</code> <code>元素选择器</code> <code>类选择器</code> <code>id 选择器</code></p><h3 id="通配选择器" tabindex="-1"><a class="header-anchor" href="#通配选择器"><span>通配选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：可以选中所有的 HTML 元素。

语法：
  *</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	
例：
  <span class="token comment">/* 选中所有元素 */</span> 
  <span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器"><span>元素选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：为页面中 某种元素 统一设置样式。

语法：
	标签名</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	
例：
  <span class="token comment">/* 选中所有h1元素 */</span> 
  <span class="token selector">h1</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器"><span>类选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：根据元素的 class 值，来选中某些元素。

语法：
  .类名</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	
例：
  <span class="token comment">/* 选中所有class值为speak的元素 */</span> 
  <span class="token selector">.speak</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器"><span>ID选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：根据元素的 id 属性值，来精准的选中某个元素。

语法：
  #id值</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	
例：
  <span class="token comment">/* 选中id值为earthy的那个元素 */</span> 
  <span class="token selector">#earthy</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本选择器总结" tabindex="-1"><a class="header-anchor" href="#基本选择器总结"><span>基本选择器总结</span></a></h3><table><thead><tr><th style="text-align:center;">基本选择器</th><th style="text-align:center;">特点</th><th style="text-align:center;">用法</th></tr></thead><tbody><tr><td style="text-align:center;">通配选择器</td><td style="text-align:center;">选中所有标签，一般用于清除样式。</td><td style="text-align:center;"><code>* {color:red}</code></td></tr><tr><td style="text-align:center;">元素选择器</td><td style="text-align:center;">选中所有同种标签，但是不能差异化选择。</td><td style="text-align:center;"><code>h1 {color:red}</code></td></tr><tr><td style="text-align:center;">类选择器</td><td style="text-align:center;">选中所有特定类名（ class 值）的元素 —— 使用频率很高。</td><td style="text-align:center;"><code>.say {color:red}</code></td></tr><tr><td style="text-align:center;">ID 选择器</td><td style="text-align:center;">选中特定 id 值的那个元素（唯一的）。</td><td style="text-align:center;"><code>#earthy {color:red}</code></td></tr></tbody></table><h2 id="css复合选择器" tabindex="-1"><a class="header-anchor" href="#css复合选择器"><span>CSS复合选择器</span></a></h2><p>复合选择器：<br><code>交集选择器</code> <code>并集选择器</code> <code>后代选择器</code> <code>子代选择器</code><br><code>兄弟选择器</code> <code>属性选择器</code> <code>伪类选择器</code> <code>伪元素选择器</code></p><h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器"><span>交集选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：选中同时符合多个条件的元素。

语法：
	选择器1选择器2选择器3...选择器n</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	
例：
 	<span class="token comment">/* 选中：类名为beauty的p元素，为此种写法用的非常多！！！！ */</span> 
	<span class="token selector">p.beauty</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token comment">/* 选中：类名包含rich和beauty的元素 */</span> 
	<span class="token selector">.rich.beauty</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并集选择器" tabindex="-1"><a class="header-anchor" href="#并集选择器"><span>并集选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：选中多个选择器对应的元素，又称：分组选择器。

语法：
	选择器1, 选择器2, 选择器3, ... 选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>

例：
  <span class="token comment">/* 选中id为peiqi，或类名为rich，或类名为beauty的元素 */</span> 
  <span class="token selector">#peiqi, 
  .rich, 
  .beauty</span> <span class="token punctuation">{</span> 
    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> 
    <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span> 
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器"><span>后代选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：选中指定元素中，符合要求的后代元素。

语法（先写祖先，再写后代）：
	选择器1 选择器2 选择器3 ... 选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span> 

例：
  <span class="token comment">/* 选中ul中的所有li */</span> 
  <span class="token selector">ul li</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token comment">/* 选中ul中所有li中的a */</span> 
  <span class="token selector">ul li a</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器"><span>子代选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">作用：选中指定元素中，符合要求的子元素（儿子元素）。（先写父，再写子）

语法：
	选择器1 &gt; 选择器2 &gt; 选择器3 &gt; ...... 选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span> 

例：
  <span class="token comment">/* div中的子代a元素 */</span> 
  <span class="token selector">div&gt;a</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token comment">/* 类名为persons的元素中的子代a元素 */</span> 
  <span class="token selector">.persons&gt;a</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兄弟选择器" tabindex="-1"><a class="header-anchor" href="#兄弟选择器"><span>兄弟选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">相邻兄弟选择器：
  作用：选中指定元素后，符合条件的相邻兄弟元素。
	（所谓相邻，就是紧挨着他的下一个，简记：睡在我下铺的兄弟。）

  语法：
     选择器1+选择器2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span> 

  例：
    <span class="token comment">/* 选中div后相邻的兄弟p元素 */</span> 
    <span class="token selector">div+p</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">通用兄弟选择器：
  作用：选中指定元素后，符合条件的所有兄弟元素。（简记：睡在我下铺的所有兄弟）

  语法：
     选择器1~选择器2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span> 

  例：
    <span class="token comment">/* 选中div后的所有的兄弟p元素 */</span>
    <span class="token selector">div~p</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span> <span class="token punctuation">}</span>

注意：两种兄弟选择器，选择的是下面的兄弟。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器"><span>属性选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>作用：选中属性值符合一定要求的元素。

语法：
  [属性名] 选中具有某个属性的元素。
  [属性名=<span class="token string">&quot;值&quot;</span>] 选中包含某个属性，且属性值等于指定值的元素。
  [属性名^=<span class="token string">&quot;值&quot;</span>] 选中包含某个属性，且属性值以指定的值开头的元素。
  [属性名$=<span class="token string">&quot;值&quot;</span>] 选中包含某个属性，且属性值以指定的值结尾的元素。
  [属性名*=“值”] 选择包含某个属性，属性值包含指定值的元素。 

例：
  <span class="token comment">/* 选中具有title属性的元素 */</span> 
  <span class="token selector">div[title]</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span> 
  <span class="token comment">/* 选中title属性值为atguigu的元素 */</span> 
  <span class="token selector">div[title=&quot;atguigu&quot;]</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span> 
  <span class="token comment">/* 选中title属性值以a开头的元素 */</span>
  <span class="token selector">div[title^=&quot;a&quot;]</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span> 
  <span class="token comment">/* 选中title属性值以u结尾的元素 */</span> 
  <span class="token selector">div[title$=&quot;u&quot;]</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span> 
  <span class="token comment">/* 选中title属性值包含g的元素 */</span> 
  <span class="token selector">div[title*=&quot;g&quot;]</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器"><span>伪类选择器</span></a></h3><p>作用：选中特殊状态的元素。</p><h4 id="常用的伪类选择器" tabindex="-1"><a class="header-anchor" href="#常用的伪类选择器"><span>常用的伪类选择器：</span></a></h4><h5 id="一、动态伪类" tabindex="-1"><a class="header-anchor" href="#一、动态伪类"><span>一、动态伪类：</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>  <span class="token punctuation">:</span>link <span class="token property">超链接未被访问的状态。</span>
  <span class="token punctuation">:</span>visited <span class="token property">超链接访问过的状态。</span>
  <span class="token punctuation">:</span>hover <span class="token property">鼠标悬停在元素上的状态。</span>
  <span class="token punctuation">:</span>active <span class="token property">元素激活的状态</span>
  <span class="token punctuation">:</span>focus 获取焦点的元素。

注意点：
	遵循 LVHA 的顺序，即： link 、 visited 、 hover 、 active 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="二、结构伪类" tabindex="-1"><a class="header-anchor" href="#二、结构伪类"><span>二、结构伪类</span></a></h5><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">常用的：</span>
  <span class="token punctuation">:</span>first-child <span class="token property">所有兄弟元素中的第一个。</span>  
  <span class="token punctuation">:</span>last-child <span class="token property">所有兄弟元素中的最后一个。</span>  
  <span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> 所有兄弟元素中的第 n <span class="token property">个。</span>  
  <span class="token punctuation">:</span>first-of-type <span class="token property">所有同类型兄弟元素中的第一个。</span>  
  <span class="token punctuation">:</span>last-of-type <span class="token property">所有同类型兄弟元素中的最后一个。</span>  
  <span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> 所有同类型兄弟元素中的 第 n 个 。

<span class="token property">了解即可：</span>
  <span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> 所有兄弟元素中的倒数第 n <span class="token property">个。</span>  
  <span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> 所有同类型兄弟元素中的 倒数第 n 个 <span class="token property">。</span>   
  <span class="token punctuation">:</span>only-child <span class="token property">选择没有兄弟的元素（独生子女）。</span>  
  <span class="token punctuation">:</span>only-of-type <span class="token property">选择没有同类型兄弟的元素。</span>  
  <span class="token punctuation">:</span>root <span class="token property">根元素。</span>  
  <span class="token punctuation">:</span>empty 内容为空元素（空格也算内容）。

关于 n 的值（an+b的形式）：  
  0 或 不写 ：什么都选不中 —— 几乎不用。  
  n ：选中所有子元素 —— 几乎不用。  
  1~正无穷的整数 ：选中对应序号的子元素。  
  2n 或 even ：选中序号为偶数的子元素。  
  2n+1 或 odd ：选中序号为奇数的子元素。  
  -n+3 ：选中的是前 3 个。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、否定伪类" tabindex="-1"><a class="header-anchor" href="#三、否定伪类"><span>三、否定伪类</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>  <span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>选择器<span class="token punctuation">)</span> 排除满足括号中条件的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="四、否定伪类" tabindex="-1"><a class="header-anchor" href="#四、否定伪类"><span>四、否定伪类</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>  <span class="token punctuation">:</span>checked <span class="token property">被选中的复选框或单选按钮。</span>  
  <span class="token punctuation">:</span>enable 可用的表单元素（没有 disabled <span class="token property">属性）。</span>  
  <span class="token punctuation">:</span>disabled 不可用的表单元素（有 disabled 属性）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="五、目标伪类-了解" tabindex="-1"><a class="header-anchor" href="#五、目标伪类-了解"><span>五、目标伪类（了解）</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code> <span class="token punctuation">:</span>target 选中锚点指向的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="六、语言伪类-了解" tabindex="-1"><a class="header-anchor" href="#六、语言伪类-了解"><span>六、语言伪类（了解）</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code> <span class="token punctuation">:</span><span class="token function">lang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 根据指定的语言选择元素（本质是看 lang 属性的值）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器"><span>伪元素选择器</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>作用：选中元素中的一些特殊位置。  

<span class="token property">常用伪元素：</span>  
  <span class="token punctuation">:</span><span class="token punctuation">:</span>first-letter <span class="token property">选中元素中的第一个文字。</span>  
  <span class="token punctuation">:</span><span class="token punctuation">:</span>first-line <span class="token property">选中元素中的第一行文字。</span>  
  <span class="token punctuation">:</span><span class="token punctuation">:</span>selection <span class="token property">选中被鼠标选中的内容。</span>  
  <span class="token punctuation">:</span><span class="token punctuation">:</span>placeholder <span class="token property">选中输入框的提示文字。</span>   
  <span class="token punctuation">:</span><span class="token punctuation">:</span>before 在元素最开始的位置，创建一个子元素（必须用 content <span class="token property">属性指定内容）。</span>  
  <span class="token punctuation">:</span><span class="token punctuation">:</span>after 在元素最后的位置，创建一个子元素（必须用 content 属性指定内容）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[i];function l(p,o){return s(),a("div",null,c)}const u=n(t,[["render",l],["__file","02.CSSxuanzeqi.html.vue"]]),r=JSON.parse('{"path":"/docs/CSS/02.CSSxuanzeqi.html","title":"CSS选择器","lang":"zh-CN","frontmatter":{"title":"CSS选择器","date":"2023-05-25T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"CSS基本选择器","slug":"css基本选择器","link":"#css基本选择器","children":[{"level":3,"title":"通配选择器","slug":"通配选择器","link":"#通配选择器","children":[]},{"level":3,"title":"元素选择器","slug":"元素选择器","link":"#元素选择器","children":[]},{"level":3,"title":"类选择器","slug":"类选择器","link":"#类选择器","children":[]},{"level":3,"title":"ID选择器","slug":"id选择器","link":"#id选择器","children":[]},{"level":3,"title":"基本选择器总结","slug":"基本选择器总结","link":"#基本选择器总结","children":[]}]},{"level":2,"title":"CSS复合选择器","slug":"css复合选择器","link":"#css复合选择器","children":[{"level":3,"title":"交集选择器","slug":"交集选择器","link":"#交集选择器","children":[]},{"level":3,"title":"并集选择器","slug":"并集选择器","link":"#并集选择器","children":[]},{"level":3,"title":"后代选择器","slug":"后代选择器","link":"#后代选择器","children":[]},{"level":3,"title":"子代选择器","slug":"子代选择器","link":"#子代选择器","children":[]},{"level":3,"title":"兄弟选择器","slug":"兄弟选择器","link":"#兄弟选择器","children":[]},{"level":3,"title":"属性选择器","slug":"属性选择器","link":"#属性选择器","children":[]},{"level":3,"title":"伪类选择器","slug":"伪类选择器","link":"#伪类选择器","children":[]},{"level":3,"title":"伪元素选择器","slug":"伪元素选择器","link":"#伪元素选择器","children":[]}]}],"git":{"createdTime":1685003318000,"updatedTime":1685003318000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/CSS/02.CSS选择器.md","readingTime":{"minutes":5.94,"words":1782}}');export{u as comp,r as data};
