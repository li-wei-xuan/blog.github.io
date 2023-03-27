import{_ as n,p as s,q as a,Y as p}from"./framework-aa5c4115.js";const t={},e=p(`<h1 id="使用less" tabindex="-1"><a class="header-anchor" href="#使用less" aria-hidden="true">#</a> 使用Less</h1><p>1、安装node.js</p><p>2、安装less</p><p>npm install less -g</p><p>3、安装VS插件 <code>Easy LESS</code></p><p>4、编辑保存.less文件，会在对应的目录下生成对应的.css文件</p><h1 id="_2-初识less" tabindex="-1"><a class="header-anchor" href="#_2-初识less" aria-hidden="true">#</a> 2.初识less</h1><blockquote><p>less是一种动态样式语言，属于css预处理器的范畴，它扩展了CSS语言，</p><p>less是一种动态样式语言，属于css预处理器的范畴，它扩展了CSS语言， 增加了变量、Mixin、函数等特性，使CSS更易维护和扩展,less既可以在客户端上运行，也可以借助Node. js在服务端运行。</p><p>less既可以在客户端上运行，也可以借助Node. js在服务端运行。</p><p>css增强版 通过less可以编写更少的代码实现更强大的样式</p><p>在less中添加了许多的新特性:像对变量的支持、对mixin的支持</p><p>less的语法大体.上和css语法一致， 但是less中增添 了许多对css的扩展,</p><p>所以浏览器无法直接执行less代码，要执行必须向将less转换为css,然后再由浏览器执行</p></blockquote><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 这里注释会编译到css文件之中 */</span>
//这是不会被编译到css文件的注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><blockquote><p>变量，在变量中可以存储一个任意的值</p><p>并且我们可以在需要时，任意的修改变量中的值</p><p>变量的语法: @变量名</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>@<span class="token property">baseW</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
@<span class="token property">xiaomiC</span><span class="token punctuation">:</span>#ff6700<span class="token punctuation">;</span>

<span class="token comment">/*使用变量时，如果是直接使用则以@变量名的形式使用即可,可以在变量声明声明前    使用变量*/</span>
<span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> @baseW<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> @baseW<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@<span class="token property">baseW</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
@<span class="token property">baseW</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
@<span class="token property">xiaomiC</span><span class="token punctuation">:</span>#ff6700<span class="token punctuation">;</span>
<span class="token comment">/*变量重名  优先使用比较近的变量*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>直接引用其他样式的值</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作用域</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@baseW<span class="token punctuation">:</span></span>100px<span class="token punctuation">;</span>
<span class="token variable">@baseW<span class="token punctuation">:</span></span>300px<span class="token punctuation">;</span>
<span class="token variable">@xiaomiC<span class="token punctuation">:</span></span>#ff6700<span class="token punctuation">;</span>
<span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token variable">@baseW<span class="token punctuation">:</span></span>50px<span class="token punctuation">;</span><span class="token comment">//局部</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@baseW</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@baseW</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@xiaomiC</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.con</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@baseW</span><span class="token punctuation">;</span>找寻全局的变量
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>一部分变量作为类名，或者一部分值使用时必须以@{变量名}的形式使用</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@ele</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@w</span> <span class="token punctuation">:</span> width<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@h</span><span class="token punctuation">:</span>height<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@bgc</span><span class="token punctuation">:</span>background-color<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@imgUrl</span><span class="token punctuation">:</span>images<span class="token punctuation">;</span></span>


<span class="token selector">.@</span><span class="token punctuation">{</span>ele<span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token selector">@</span><span class="token punctuation">{</span>w<span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@baseW</span><span class="token punctuation">;</span></span>
    <span class="token selector">@</span><span class="token punctuation">{</span>h<span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@baseW</span><span class="token punctuation">;</span></span>
    <span class="token selector">@</span><span class="token punctuation">{</span>bgc<span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@xiaomiC</span><span class="token punctuation">;</span></span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../@{imgUrl}/1.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    
    <span class="token selector">.con</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*这样嵌套会被解析成*/</span>


<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrap .con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想使用其他关系选择器</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token selector">&gt; .son</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*直接在选择器前面书写*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想使用伪类伪元素或者高级选择器</p><p>&amp;表示外层的父元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应式的书写</p><p>@ 规则（例如 <code>@media</code> 或 <code>@supports</code>）可以与选择器以相同的方式进行嵌套。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
         <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1280px <span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  
  
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩展</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.triangle</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top:extend(.triangle)</span><span class="token punctuation">{</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span>tomato <span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合mixin" tabindex="-1"><a class="header-anchor" href="#混合mixin" aria-hidden="true">#</a> 混合mixin</h2><blockquote><p>将一系列的规则及引入另一个规则集</p><p>混合的定义在Less有明确的指定 使用.的形式来定义</p></blockquote><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.triangle</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token selector">.top</span><span class="token punctuation">{</span>
 <span class="token comment">//直接对指定的样式进行引用，这里就相当于样式在这里进行了复制</span>
    .<span class="token function">triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span>yellow <span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.center</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*没带参数写不写括号都一样  不写参数为普通混合  带括号为不带参数的混合*/</span>
<span class="token comment">//使用类选择器时可以在选择器后边添加一个括号，这时我们实际上就创建了一个mixins</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带参数的混合</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">test</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@w</span> <span class="token punctuation">,</span> @h <span class="token punctuation">,</span> @bgcolor<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">;</span></span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@h</span><span class="token punctuation">;</span></span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@bgcolor</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>


<span class="token selector">div</span> <span class="token punctuation">{</span>
    //调用混合函数，按顺序传递参数
    .<span class="token function">test</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 300px<span class="token punctuation">,</span> tomato<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    //不按顺序
     .<span class="token function">test</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@h</span><span class="token punctuation">:</span>200px<span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@bgcolor</span><span class="token punctuation">:</span>tomato<span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">:</span>300px <span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>参数指定默认值</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">test</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">:</span>100px <span class="token punctuation">,</span> @<span class="token property">h</span><span class="token punctuation">:</span>100px <span class="token punctuation">,</span> @<span class="token property">bgcolor</span><span class="token punctuation">:</span>pink<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">;</span></span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@h</span><span class="token punctuation">;</span></span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@bgcolor</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>


<span class="token selector">div</span> <span class="token punctuation">{</span>
    .<span class="token function">test</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.top-triangle(<span class="token variable">@w</span> , <span class="token variable">@c</span>)</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token variable">@c</span><span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.top-triangle</span><span class="token punctuation">(</span>200px <span class="token punctuation">,</span> red<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">center</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@w</span> <span class="token punctuation">,</span> @h <span class="token punctuation">,</span> @b<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">;</span></span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@h</span><span class="token punctuation">;</span></span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@b</span><span class="token punctuation">;</span></span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.wrap</span><span class="token punctuation">{</span>
    .<span class="token function">center</span><span class="token punctuation">(</span>100px <span class="token punctuation">,</span> 100px <span class="token punctuation">,</span> pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">center</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">:</span>100px <span class="token punctuation">,</span> @<span class="token property">h</span><span class="token punctuation">:</span>100px <span class="token punctuation">,</span> @<span class="token property">b</span><span class="token punctuation">:</span>transparent<span class="token punctuation">)</span></span><span class="token punctuation">{</span><span class="token comment">/*默认值*/</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">;</span></span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@h</span><span class="token punctuation">;</span></span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@b</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span><span class="token punctuation">{</span>
    .<span class="token function">top-triangle</span><span class="token punctuation">(</span>200px  <span class="token punctuation">,</span>solid<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
    .<span class="token function">center</span><span class="token punctuation">(</span>100px <span class="token punctuation">,</span> 100px <span class="token punctuation">,</span> pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当实参和形参不统一的时候</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">top-triangle</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">:</span>10px <span class="token punctuation">,</span> @<span class="token property">c</span><span class="token punctuation">:</span>#000<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@w</span><span class="token punctuation">;</span></span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@c</span><span class="token punctuation">;</span></span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span><span class="token punctuation">{</span>
    .<span class="token function">top-triangle</span><span class="token punctuation">(</span>@<span class="token property">c</span><span class="token punctuation">:</span>pink<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">//在less中所有的数值都可以直接进行运算
.wrap</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px+100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px/2<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入其他less文件</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;index.less&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,48),c=[e];function l(o,i){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","20.less.html.vue"]]);export{r as default};
