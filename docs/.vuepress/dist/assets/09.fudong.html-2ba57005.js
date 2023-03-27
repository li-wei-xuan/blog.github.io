import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h1 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h1><p><strong>文档流(normal flow)布局</strong></p><blockquote><p>网页是一个多层的结构,一层叠着一层,</p><p>通过CSS可以分别为每一层设置样式</p><p>作为用户来讲只能看到最顶上一层</p><p>这些层中,最底下的一层称为文档流,文档流是网页的基础</p><p>我们创建的元素默认都是在文档流中进行排列</p><p>对我们元素来说主要有两个状态</p><p>​ ---在文档流</p><p>​ ---不在文档流中(脱离文档流)</p></blockquote><p>元素在文档流中有什么特点</p><blockquote><p>块元素</p><p>​ --块元素在页面中独占一行,从上往下垂直排列</p><p>​ --默认宽度是父元素的100%</p><p>​ ---默认高度是被内容撑开</p><p>行内元素</p><p>​ ---行内元素不独占一行,在页面中自左向右水平排列,如果一行排列不下,则元素会换到第二行继续自左向右排列(水平)</p><p>​ ---默认宽高由内容撑开</p></blockquote><p><strong>浮动:</strong></p><p>是为了图片被文字环绕而出现的特性</p><p>​ 通过浮动可以设置一个元素向其父元素的左侧和右侧移动</p><blockquote><p>使用float属性设置父元素的浮动</p><p>​ 可选值:</p><p>​ none默认值 , 元素不浮动</p><p>​ left 元素向左浮动</p><p>​ right 元素向右浮动</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">div</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 3px solid skyblue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
&lt;div&gt;
	&lt;img src=<span class="token string">&quot;1.jpg&quot;</span> alt=<span class="token string">&quot;&quot;</span>&gt;
	这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒
&lt;/div&gt;	
	<span class="token comment">/*图片和文字的基线对齐,但是这个文字上边有一大段的空白区域,非常浪费.又不美观.
	  网页上的内容都是寸土寸金,每一个地方都很宝贵.
		淘宝即使那么挤,信息那么多,每个地方的价也是非常之高的.
	  现在我想让我的网页的文字从第一行环绕图片显示怎么办?*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span><span class="token punctuation">{</span> <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*文字就实现了环绕图片,文字有没有被图片所遮挡了一些部分
  我们去给文字加上一些字*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;img src=<span class="token string">&quot;1.jpg&quot;</span> alt=<span class="token string">&quot;&quot;</span>&gt;<span class="token property">云牧说</span><span class="token punctuation">:</span>这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒
<span class="token comment">/*可以看到文字并没有被图片所遮挡,图片后面没有文字.
  float:left有这样的基本特性,让文字环绕元素进行排列
  
	我们再去修改一下这个代码,把浮动注释,加个p标签*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span>
&lt;img src=<span class="token string">&quot;1.jpg&quot;</span> alt=<span class="token string">&quot;&quot;</span>&gt;
&lt;p&gt;<span class="token property">云牧说</span><span class="token punctuation">:</span>这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒这个小姐姐美美哒&lt;/p&gt;
<span class="token comment">/*现在文字和图片不在同一行去显示.
  现在给图片添加浮动会发生什么?
  现在P标签为什么会上去?这段文字和图片之间的关系是什么?
  页面中所有的元素全部都是矩形,打开开发者,P标签和图片仿佛占用了同一块区域.
  现在我们重点要去说三个东西*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li><strong>img 浮动元素</strong></li><li><strong>P: 块级元素(感受不到浮动元素)</strong></li><li><strong>文字:inline/inlineblock(感受得到浮动元素)</strong></li></ol></blockquote><blockquote><p>实际上**游览器中的元素是三维的.**就好像一叠钞票一样,有的在上面,有的在下面.</p><p><strong>页面中的元素有高低顺序,渲染的过程,会将页面的元素分类,按照从高到底的顺序渲染,</strong></p></blockquote><p>在我们页面中.有一个东西绝对是在任何内容,无论是文本,盒子的下面.</p><blockquote><p><strong>背景*最低层级</strong> <strong>==&gt;</strong> <strong>块级元素的层级 ==&gt; 浮动层，我们的块级元素就感受不到浮动元素了.</strong></p><p><strong>== inline/inline-block(文本)</strong></p><p><strong>文本元素和浮动元素天然排斥,不会重合到一起</strong>.</p></blockquote><hr><p><strong>浮动元素的特性</strong></p><ol><li>文本环绕</li><li>有多个浮动元素的情况.多个盒子浮动,会从左往右依次排列,如果当前行排不下,会&quot;换行排列&quot;;</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>		<span class="token selector">.wrap</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
       		<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 3px solid skyblue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son1</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son3</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son4</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	&lt;div class=<span class="token string">&quot;wrap&quot;</span>&gt;
		&lt;div class=<span class="token string">&quot;son1&quot;</span>&gt;1&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;son2&quot;</span>&gt;2&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;son3&quot;</span>&gt;3&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;son4&quot;</span>&gt;4&lt;/div&gt;							
	&lt;/div&gt;
<span class="token comment">/*此时盒子1234是正经盒子,从上往下进行排列
  现在我给里面盒子依次添加浮动*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son1</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">.wrap .son3</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">.wrap .son4</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token comment">/*左浮动:从左往右依次排列.类似文字的排列方向.
现在有四块盒子都有浮动,都会往天空飘那么一点点,到天上去排队去了,从左往右依次排列.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son1</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">}</span>
<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">}</span>
<span class="token selector">.wrap .son3</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">}</span>
<span class="token selector">.wrap .son4</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">}</span>
<span class="token comment">/*右浮动:从右往左依次排列
  和左浮动只是浮动反向不一致而已
  而且浮动元素不会从父元素中移出去
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多人很喜欢用浮动</p><ul><li><p>没有解析空格的存在</p></li><li><p>完美解析margin,没有垂直外边距合并的问题</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap&gt; div</span> <span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然盒子有这么多的好处?</p><p>但也有<strong>不完美</strong>的地方</p><blockquote><p>浮动元素不能使用margin:0 auto;进行水平居中了.</p><p>而且还有高度塌陷问题.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.wrap</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
			<span class="token comment">/* height: 400px;不给高度会被里面的元素给撑开 */</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 3px solid skyblue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son1</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">.wrap .son3</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">.wrap .son4</span><span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
	<span class="token comment">/*此时依次给子元素添加了左浮动,我们的父元素到哪里去了?
    好像变成了一条线,为什么会这样呢?*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.<strong>浮动的高度塌陷(大盒子如果不设置高度,内部所有元素浮动,他就会高度塌陷,撑不开大盒子)</strong>,</p><blockquote><p>为什么会这样呢?</p><p>实际上时由于里面的这个wrap大盒子这个块级元素以为自己里面什么东西都没有,</p><p>块级元素本身感受不到浮动元素,但是实际浮动元素在他的头顶上.</p><p>就像一个农夫养了一群羊.第二天羊全部浮动了.</p><p>农夫发现自己的羊圈里面没有羊了.就把羊圈给拆了.</p><p>实际羊全部都飘到天上了,你看不到他们.</p></blockquote><blockquote><p>一:所以我们写浮动首先要去<strong>定高</strong>,塌陷依旧存在,父级依旧感受不到浮动元素</p><p>二:BFC块级格式化上下文,最简单的BFC就是给父元素overflow:hidden;</p><p>然后给父级float:left或者right也能触发bfc</p><p>BFC相当于给父级修了一道围墙,父级盒子可以去观察到所有层级的盒子.是否有超出的元素,有就涵盖进去.把子元素锁在里面.可能就相当于农夫抬头看到了飘在半空的羊群.</p></blockquote><p>4.<strong>块级化:将元素强行转化为块级元素</strong></p><blockquote><p><strong>它具有块元素的所有性质,但是不具有独占一行和父元素宽度100%的特性.</strong></p><p><strong>而是由里面的元素撑开的,这是浮动的包裹性;</strong></p></blockquote><p><strong>5.换行方式:</strong></p><blockquote><p><strong>从第一个元素开始进行浮动排列,依次水平浮动,直到最后一个元素</strong></p><p><strong>如果当前行排列不下,会原地向下缩直到可以有空间可以浮动排列.不会再往上走了</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token selector">.wrap</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span><span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 3px solid skyblue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son1</span><span class="token punctuation">{</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son3</span><span class="token punctuation">{</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son4</span><span class="token punctuation">{</span>
       <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	&lt;div class=<span class="token string">&quot;wrap&quot;</span>&gt;
		&lt;div&gt;1&lt;/div&gt;
		&lt;div&gt;2&lt;/div&gt;
		&lt;div&gt;3&lt;/div&gt;
		&lt;div&gt;4&lt;/div&gt;
	&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son5</span><span class="token punctuation">{</span>
		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
&lt;div&gt;5&lt;/div&gt;
<span class="token comment">/*添加第五个元素会换行显示
  
我们给父元素宽度500px,给第二个元素添加上类名*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">}</span>

<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span><span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span><span class="token punctuation">}</span>
	
&lt;div class=<span class="token string">&quot;son2&quot;</span>&gt;2&lt;/div&gt;
<span class="token comment">/*给大盒子宽度减少,第5的盒子被2挡住了,这是怎么回事?
  现在就相当于第5的盒子宽度不够,换行显示,会原地向下缩.
  缩到可以出来的时候,向左边去排列,可是正好就撞到了第2个盒子.
  这时候我们去把第3个盒子高度改大一点*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son3</span><span class="token punctuation">{</span><span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span><span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;son3&quot;</span>&gt;3&lt;/div&gt;
<span class="token comment">/*减少大盒子的宽度,第5个盒子会被谁挡住
  第5个盒子会在第4个盒子的下面,被第3个盒子挡住
  此时我们去把第3个盒子高度减少*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son3</span><span class="token punctuation">{</span><span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span><span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;son3&quot;</span>&gt;3&lt;/div&gt;
<span class="token comment">/*此时会不会向下缩然后被第二个盒子挡住.可是发现第3个盒子的上面有空间然后缩进去
  这里浮动不会去缩进去,浮动就相当于挤痘痘一样.挤出来了不可能再挤回去
  此时我们去把4的高度增加,这时候会挤到哪?*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son4</span><span class="token punctuation">{</span><span class="token property">height</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span><span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;son4&quot;</span>&gt;4&lt;/div&gt;
<span class="token comment">/*此时只会在1的下面,因为向下缩的时候发现前面空间还很足够,就会往前排
  我们把第四个盒子的高度调的很高呢*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son4</span><span class="token punctuation">{</span><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*可以看到第五个盒子往下缩了之后不会去填补上面的空白
 我们再去添加一些盒子会发生什么呢?*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son6</span><span class="token punctuation">{</span>
		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;son6&quot;</span>&gt;6&lt;/div&gt;	
<span class="token comment">/*不会向左边去显示
  多创建几个看看*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;div class=<span class="token string">&quot;son6&quot;</span>&gt;6&lt;/div&gt;	
&lt;div class=<span class="token string">&quot;son6&quot;</span>&gt;6&lt;/div&gt;	
&lt;div class=<span class="token string">&quot;son6&quot;</span>&gt;6&lt;/div&gt;
<span class="token comment">/*当空间足够的时候它就会下来
 为什么会这样呢?我们盒子是按顺序来排列的.在5的后面创建盒子往前面去排列.
 发现前面第4个盒子挡住就只能卡在那了
 
	这样元素不等高浮动换行之后是不是很难看,看都看不懂.
 	所以我们开发的时候尽量保证浮动元素等高.
  等高之后排列方法就跟文字排列方向一致,这是最优秀的方案*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h1><blockquote><p><strong>概念:不挨着浮动元素,遇到浮动元素之后换行.清除浮动元素对当前元素所产生的影响</strong></p><p>可选值</p><p>​ clear:left清除左侧的浮动元素对当前元素的影响</p><p>​ clear:right清除右侧的浮动元素对当前元素的影响</p><p>​ clear:both 有左浮动清除左浮动，有右浮动清除右浮动。清除两侧中最大影响的那侧</p></blockquote><p>原理</p><blockquote><p>​ 设置清除浮动之后,浏览器会自动为元素添加一个上外边距,以使其位置不受其他元素的影响</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token selector">.wrap</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span><span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 3px solid skyblue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	 <span class="token selector">.wrap .son1</span><span class="token punctuation">{</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son2</span><span class="token punctuation">{</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son3</span><span class="token punctuation">{</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
       <span class="token property">clear</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> 
		<span class="token punctuation">}</span>
		<span class="token selector">.wrap .son4</span><span class="token punctuation">{</span>
      		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token comment">/*我们给第3个盒子添加清除浮动.
  
	这就相当于一段文本,我们让第3个元素直接换行.
  我们给第4个盒子添加清除浮动*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap .son4</span><span class="token punctuation">{</span><span class="token property">clear</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;son4&quot;</span>&gt;4&lt;/div&gt;
<span class="token comment">/*第4个盒子和第5个盒子都会下来,另起一行,这跟我们浮动换行挤下来又不一样.
  为什么我们给第4个盒子清除浮动,第5个盒子会下来呢?
  这就相当于浮动元素每个身上都粘着胶水,你给第4个盒子的胶水清除了.
  第四个盒子和第5个盒子还有胶水.所以第4个盒子换行之后会带着第5个盒子一起换行.
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>清除浮动clear的值</strong></p><blockquote><p><strong>left/rigth/both</strong></p><p>是左浮动清除左浮动,右浮动清除右浮动,</p><p><strong>有没有有没有一个元素既是左浮动又是右浮动</strong></p><p><strong>float:right float:left 样式会覆盖,只有一个样式会生效</strong></p><p><strong>不知道什么浮动无脑clear:both;</strong></p><p><strong>both有左浮动清除左浮动,有右浮动清除右浮动</strong></p></blockquote><p><strong>清除浮动来解决高度塌陷</strong></p><p><strong>新建一个空的块元素，并给他设置clear：both属性 （缺陷：破坏页面的文档结构）</strong></p><p><strong>完美的方案:利用伪元素</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix:after</span><span class="token punctuation">{</span>
	  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
	  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*相当于父元素能感受到最底部的块级元素.
  我们手拉手去围一个区域把这些浮动的元素给包裹起来.
	我们就可以通过类名添加选择我们想要解决高度塌陷的元素去清除浮动*/</span>


&lt;div class=<span class="token string">&quot;clearfix&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),l=[e];function i(c,o){return s(),a("div",null,l)}const r=n(p,[["render",i],["__file","09.fudong.html.vue"]]);export{r as default};
