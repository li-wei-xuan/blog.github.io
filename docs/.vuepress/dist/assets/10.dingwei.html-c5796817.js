import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h1 id="定位-position-确定元素的位置" tabindex="-1"><a class="header-anchor" href="#定位-position-确定元素的位置" aria-hidden="true">#</a> 定位(position)(确定元素的位置)</h1><p>定位是一种更高级的布局手段</p><p>​ 通过定位可以将元素把摆放在页面的任意位置</p><p>​ 使用position属性来设置定位来设置定位</p><p>​ 可选值</p><p>​ static默认值 元素是静止的没有开启定位</p><p>​ relative 开启元素的相对定位</p><p>​ absoluted 开启元素的绝对定位</p><p>​ fixed 开启元素的固定定位</p><h3 id="静态定位-static" tabindex="-1"><a class="header-anchor" href="#静态定位-static" aria-hidden="true">#</a> 静态定位(static)</h3><blockquote><p>static，无特殊定位，它是html元素默认的定位方式.</p><p>即我们不设定元素的position属性时默认的position值就是static，它遵循正常的文档流对象.</p><p>该定位方式下,top,right,bottom,left,z-index等属性是无效的。</p></blockquote><h3 id="相对定位-position-relative" tabindex="-1"><a class="header-anchor" href="#相对定位-position-relative" aria-hidden="true">#</a> 相对定位(position:relative)</h3><p><strong>参照自己当前的位置去进行移动</strong>.</p><p>我们以前学过几种布局方式</p><blockquote><p>浮动 从左往右依次排列</p><p>正常布局 从上往下依次排</p><p>display:inline-block 看上去水平排列,本质上还是文本,有解析空格和垂直对齐的问题</p></blockquote><p><strong>1.参照物:用来确定物体位置的基点</strong></p><p><strong>2.根据参照物,描述位置偏移量</strong></p><p><strong>相对定位的特点</strong></p><p>​ 1.元素开启相对定位后,如果不设置偏移量元素不会发生任何的变化</p><p>​ 2.相对定位参照元素在文档流中自身的位置进行定位</p><p>​ 4.相对定位不会脱离文档流,相对移动的时候,不会影响其他元素布局,只 是这个盒子表现在页面的位置发生了改变.</p><p>​ 5.相对定位不会改变元素的性质，块还是块，行内还是行内</p><p>​ 6.相对定位会提升元素的层级</p><hr><h3 id="绝对定位-position-absolute" tabindex="-1"><a class="header-anchor" href="#绝对定位-position-absolute" aria-hidden="true">#</a> 绝对定位(position:absolute)</h3><blockquote><p>绝对定位的位置参照物坐标:标志性建筑物</p><p>请先去参照物的位置,然后从这个位置出发,找到目标位置.</p><p>绝对定位的写法特点</p><p>父相子绝</p><p>父亲设置相对定位,子元素设置绝对定位相对于父亲去移动自身的位置.</p></blockquote><p><strong>绝对定位的参照物特点</strong></p><blockquote><p>有定位属性的最近的祖先(父级/父级的父级/父级的父级的父级)元素,</p><p><strong>有定位属性就</strong>代表position:relative/position/fixed(有这其中一个,才能被子元素所参照)</p><p>最近:一层一层往外面去寻找父级最终找到视口</p></blockquote><blockquote><p>偏移量相对于参照父级的padding-box来计算位置.(包含padding不包含border)来进行计算的</p><p>绝对定位元素会脱离文档流,不保留位置,同级绝对定位盒子叠加,后写的在上面</p><p>块级化:将元素强行转化为块级元素,它具有块元素的所有性质,但是不具有父元素宽度100%的特性,而是由里面的元素撑开的,</p><p>绝对定位会让浮动失效</p></blockquote><h3 id="固定定位-position-fixed" tabindex="-1"><a class="header-anchor" href="#固定定位-position-fixed" aria-hidden="true">#</a> 固定定位(position:fixed)</h3><blockquote><p>我们又叫它牛皮糖,扫地阿姨搞半天都刮不下来,无论怎么搞它就在那里.</p><p>我们网页上也有这样的牛皮糖.就好像粘在你的屏幕上一样.怎么动它就在那里.</p><p>这与绝对定位的工作方式完全相同，只有一个<strong>主要区别</strong>：</p><p>绝对定位的固定元素是相对于HTML元素或其最近的定位祖先.</p><p><strong>而固定定位的固定元素则是相对于浏览器视口本身。</strong></p><p>固定定位元素不会随着网页滚动条滚动而滚动</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>		<span class="token selector">body</span><span class="token punctuation">{</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">span</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
			<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>	
		<span class="token punctuation">}</span>
	&lt;span&gt;是兄弟就来砍我&lt;/span&gt;

<span class="token comment">/*固定定位参照绝对定位理解,同样有块状化,脱离文档流等等特点.
  就是除了参照物的不同其他几乎相同.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="七层层叠结构" tabindex="-1"><a class="header-anchor" href="#七层层叠结构" aria-hidden="true">#</a> 七层层叠结构</h3><blockquote><p><strong>背景层</strong></p><p>最底层的东西,背景就好像你给墙涂上油漆贴上墙纸,最后去挂画的时候,你见过把画挂在墙纸里面的吗?</p><p><strong>==&gt; 块级元素(block)层级 ==&gt; float浮动层 ==》 文本(inline/inline-block)层级 ==&gt; position定位层级</strong></p><p>定位层级就如何一个图钉去钉在某些元素上面一样.</p><p>这里只有5层层叠结构,这里position层级因为有z-index的参与而变得不同,</p><p>同样是定位层级,后写的元素同样会盖住先写的元素,</p><p>如果我们想修改元素的覆盖关系的时候,我们需要去修改HTML结构.</p><p>但是如果有一叠钞票,一张叠着一张的,我们这时想要放在下面的第二张钞票的时候,第二张钞票就凸显出来.怎么办呢?</p><p>那就必须比第一张高,怎么比第一张高.</p><p>我们就需要动态的去调整层级关系.Z-index控制定位元素谁高谁低的操作.</p><p><code>z-index</code>属性值并不是在任何元素上都有效果。</p><p>它<strong>仅在</strong>定位元素（定义了<code>position</code>属性，且属性值为非<code>static</code>值的元素）上有效果。</p><p>判断元素在<code>Z轴</code>上的堆叠顺序，不仅仅是直接比较两个元素的<code>z-index</code>值的大小，这个堆叠顺序实际由元素的<strong>层叠上下文</strong>、<strong>层叠等级</strong>共同决定。</p><p><strong>z-index默认为0(auto),</strong></p><p><strong>可以大于等于0的正整数 数值越大越层级越高,只在定位元素内生效</strong></p><p><strong>也是可以写小于0的负整数,层级是最低的.</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>		<span class="token selector">ul</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 2px solid pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.bro1</span><span class="token punctuation">{</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.bro2</span><span class="token punctuation">{</span>
			<span class="token property">margin-top</span><span class="token punctuation">:</span>-100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.bro3</span><span class="token punctuation">{</span>
			<span class="token property">margin-top</span><span class="token punctuation">:</span>-100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
 	&lt;ul&gt;
        &lt;li class=<span class="token string">&quot;bro1&quot;</span>&gt;1&lt;/li&gt;
        &lt;li class=<span class="token string">&quot;bro2&quot;</span>&gt;2&lt;/li&gt;
        &lt;li class=<span class="token string">&quot;bro3&quot;</span>&gt;3&lt;/li&gt;
    &lt;/ul&gt;
	<span class="token comment">/*此时2的一部分在1的下面,3的一部分在2的下面.像不像叠着的钞票?
	  如果我们想让我们鼠标悬浮在哪个元素哪个元素就露出来*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">li:hover</span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span><span class="token punctuation">}</span>
	<span class="token comment">/*鼠标放上去的时候元素层级变高了
	  但是如果这些元素全部都写上了position:relative呢?*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">li</span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*就不能控制元素显示的高低了.
  我们就可以去使用z-index*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">li:hover</span><span class="token punctuation">{</span><span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*当鼠标悬浮在上面的时候.层级就发生改变
  此时我们写上z-index为0,元素显示不会发生改变,说明默认确实是0*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如我们z-index写上负数呢?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">li:hover</span><span class="token punctuation">{</span><span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*当我们鼠标放到元素上就会被其它元素盖住*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者你可以自己去修改元素的z-index</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bro2</span><span class="token punctuation">{</span>
	<span class="token property">z-index</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*此时这个类名为bro2的盒子就会盖在3的上面.因为其他元素默认的z-index为0.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>七层层级</p><blockquote><p><strong>z-idnex为负数==&gt; 背景 ==&gt; 块级元素(block)层级 ==&gt; float浮动层 ==&gt; 文本(inline/inline-block)层级 ==&gt; z-index为0/auto ==&gt; z-index为正</strong></p></blockquote><ol><li><p>同级元素中，后面元素的层级会高于之前层级。</p></li><li><p>父子元素中，子元素层级会高于父元素层级。</p></li></ol><p>想要改变层级关系，使用z-index，同级元素中z-index越大层级越高。</p><p>但z-index不会影响父子元素，父元素调高z-index值也无法比子元素的层级高。</p><hr><p>定位水平居中盒子的两种方法.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">ul</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 2px solid pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">li</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
			<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span><span class="token comment">/*只设置绝对定位不给偏移量,左右两边的auto会暂时失效*/</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token comment">/*position的方向值全部设置为0,说明小盒子完全能够分配大盒子的空间.
	  小盒子知道了大盒子上下左右的空间.
	  相当于四只手用弹簧拉它,拉力都是一样的.

	  会在小盒子比大盒子大失效,先margin在定位,定位最后执行*/</span>
	&lt;ul&gt;
		&lt;li&gt;&lt;/li&gt;
	&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>		<span class="token selector">ul</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 2px solid pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">li</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
			<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span><span class="token comment">/*先将盒子的左上角推到大盒子的中心点*/</span>
			<span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span><span class="token comment">/*最后平移margin的负值将元素正中心点对准盒子正中心点,实现上														下垂直居中*/</span>
			<span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> <strong>伪类</strong></h3><blockquote><p>hover选择器左侧必须有选择器，右侧的选择器可以设置也可以不设置</p><p>当鼠标放在左侧选择器选中的元素的时候代码才会生效</p><p>hover右侧的选择器只能时选择兄弟元素或是子元素(包括兄弟元素的子元素)</p></blockquote><p><strong>hover右边选择器</strong></p><blockquote><p><strong>中间什么都不加(空格) 控制后代元素；</strong></p><p><strong>&gt;控制子代元素</strong></p><p><strong>‘+’控制就近元素 ；</strong></p><p><strong>‘～’ 控制同级元素（兄弟元素）；</strong></p></blockquote>`,57),i=[e];function o(c,l){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","10.dingwei.html.vue"]]);export{r as default};
