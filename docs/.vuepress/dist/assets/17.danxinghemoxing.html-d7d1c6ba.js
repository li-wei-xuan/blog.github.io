import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e={},p=t(`<h1 id="弹性盒模型" tabindex="-1"><a class="header-anchor" href="#弹性盒模型" aria-hidden="true">#</a> 弹性盒模型</h1><blockquote><p><strong>flex</strong></p></blockquote><p><strong>作用:页面布局</strong></p><p>我们使用<strong>弹性布局时父元素控制子元素的布局方案,不需要计算.</strong></p><blockquote><p>就像我们军训一样,教官说小伙伴全部站在一起,大家向右看齐.</p><p>我们自己把左右两边间隙调整到适当的位置,</p><p>这样的话,我们所有的元素就会布局的非常的整齐了,</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">&lt;div class=&quot;bigbox&quot;&gt;
        &lt;div class=&quot;smallbox&quot;&gt;1&lt;/div&gt;
        &lt;div class=&quot;smallbox&quot;&gt;2&lt;/div&gt;
        &lt;div class=&quot;smallbox&quot;&gt;1&lt;/div&gt;
        &lt;div class=&quot;smallbox&quot;&gt;2&lt;/div&gt;
    &lt;/div&gt;

.bigbox</span><span class="token punctuation">{</span>
  		<span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span> <span class="token comment">/*父元素开启弹性盒模型*/</span>
		<span class="token property">width</span><span class="token punctuation">:</span>800px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span>1px solid black<span class="token punctuation">;</span>   
		<span class="token punctuation">}</span>
 <span class="token selector">.smallbox</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这时候和之前的排列方向有什么区别?</strong></p><blockquote><p>我们在没有写弹性盒模型的时候盒子是从上往下排.</p><p>开启弹性盒模型现在是从左往右排.</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">display:flex</span></span><span class="token punctuation">;</span>
开启弹性盒模型,内部所有的子元素不会按照普通流布局,听从父级的指挥,会按照从左往右依次排列.
这里默认是display:block-flex<span class="token punctuation">;</span>对外块元素,对内弹性盒模型
<span class="token directive"><span class="token keyword">display:block可以写成display:block-block</span></span><span class="token punctuation">;</span>对内表现为块元素,对外也表现为块元素


display:inline-block(对外表现为行内元素,对内表现为块元素).

display:flex还有另外一种写法叫做display:inline-flex(对外表现为行内元素,对内是弹性盒模型)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>弹性特点</strong>,</li></ul><ol><li>指的是子元素盒子具有了弹性.从左往右排列.</li><li>可以进行自动伸伸缩.元素如果超出一行的宽度,会挤到一起,等比例压缩</li><li>默认不换行.,因为不知道换行朝哪里</li></ol><p>现在网页上有四个盒子,四个盒子从右往右依次排列.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">大盒子只写display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token comment">/*现在打开开发者工具,将我们bigbox的宽度逐渐减小,这怎么回事,这里面小盒子没有换行,自动被挤压了,变小了.
仿佛这四个小盒子都具有了弹性,大丈夫能屈能伸说的就是我们弹性盒模型*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弹性盒模型的两条轴线" tabindex="-1"><a class="header-anchor" href="#弹性盒模型的两条轴线" aria-hidden="true">#</a> 弹性盒模型的两条轴线</h3><blockquote><p>1,**弹性盒模型的轴,**这两个轴分别指什么呢?</p><p>分别指的是<strong>元素的排列方向</strong>和<strong>元素的换行方向</strong></p><p><strong>元素的排列方向(默认从左往右)</strong></p><p>现在我们的smallbox他们的元素排列方向是朝哪的?<strong>从左往右,</strong></p><p>那元素的排列方向最多有几个方向?</p><p>从左往右,从右往左,从上往下 还有从下往上</p><p><strong>最多有四个方向</strong>.</p><p>弹性盒模型之所以很好用很弹性,你可以去制定规则,让它可以任意控制元素的排列方向,</p><p><strong>元素排列方向就是的主轴方向</strong></p><p>假如从左往右就是默认方向,那我们想要它从右往左呢,</p><p><strong>元素的排列方向叫做flex-direction</strong></p><p><strong>1.row(行)</strong> 横向<strong>从左往右</strong></p><p>2.<strong>row-reverse</strong> 横向的反向 从右往左 主轴的方向变为<strong>从右到左</strong></p><p>3.<strong>column(列)</strong> 纵向 <strong>从上往下</strong></p><p>4.<strong>column-reverse</strong> 纵向的反向 <strong>从下往上</strong></p></blockquote><blockquote><p><strong>弹性盒子：默认情况下，弹性盒模型的子元素高度与父元素一致</strong>,子元素相当于独占一列,</p><p><strong>但是默认宽度为0（此处与普通的块级盒模型刚好相反）</strong></p></blockquote><p><strong>元素的换行方向(默认不换行)</strong></p><blockquote><p>那元素的换行方向是不是可以可以由主轴方向决定,</p><p>元素排列方向也就是主轴方向从左往右开始排列.</p><p>换行方向只可能有两个方向要么是朝下换行要么是朝上换行.</p><p>如果主轴方向是竖直方向,竖直向上或竖直向下时.</p><p>换行方向也只有两个,一个是向左一个是向右.</p><p><strong>所以元素的换行方向是可以由主轴方向决定的,并且最多有三个情况(包括不换行)</strong></p></blockquote><p>我们的换行方向用的单词叫做flex-wrap</p><p><strong>我们给换行方向取一个名字叫交叉轴</strong></p><p><strong>flex-wrap:nowrap(默认不换行.多出来元素挤在一堆)</strong></p><p><strong>wrap(正常换行,只有向右和向下)</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token comment">/*正常换行,主轴方向从左往右,朝下换行.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse<span class="token punctuation">;</span><span class="token comment">/*朝下换行,此时元素的排列方向为从左往右*/</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token comment">/*此时12345678的盒子按照正常方向进行换行*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token comment">/*此时每一行都进行了换行,换行方向是向右的,放不下的元素都朝右去进行排列*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span>column-reverse<span class="token punctuation">;</span><span class="token comment">/*依然是从左往右换行,只是主轴方向是从下面往上面*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>如果换行子元素的宽高大于父元素,则会超出父元素的边界显示</strong></p><p>但是还有一个值<strong>warp-rerverse(反向换行 只有向上或向左,具体由主轴进行决定)</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span>row<span class="token punctuation">;</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap-reverse<span class="token punctuation">;</span>
<span class="token comment">/*换行方向为反向,元素由原来的从上往下换行变为从下往上进行换行,元素自然而然往下排列进行向上的换行*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap-reverse<span class="token punctuation">;</span><span class="token comment">/*此时的换行方向变为由朝着右边换行变为朝着左边进行换行*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span>column-reverse<span class="token punctuation">;</span>
<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap-reverse<span class="token punctuation">;</span><span class="token comment">/*依然朝着左边进行换行,但是元素的排列方向也就是主轴是从下往上的*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>wrap具体的换行方向由主轴决定</strong></p><blockquote><p><strong>如果主轴方向是竖直方向</strong>(无论是向上还是向下),<strong>都会朝着右边进行换行,</strong></p><p><strong>主轴是水平方向</strong>(无论向右还是向左),<strong>换行方向是往下的</strong></p></blockquote><p><strong>flex-flow</strong></p><blockquote><p>flex-flow：flex-direction flex-wrap;(两个属性的简写)</p></blockquote><h3 id="主轴-元素排列方向-的布局方案" tabindex="-1"><a class="header-anchor" href="#主轴-元素排列方向-的布局方案" aria-hidden="true">#</a> 主轴(元素排列方向)的布局方案</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bigbox</span><span class="token punctuation">{</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    	<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token comment">/*这时候元素的排列方向从左往右,也就是主轴朝向从左往右,交叉轴去进行正常换行.
       我们先来说说主轴的布局方案*/</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span>100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span>1px solid black<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.smallbox</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
			<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px black inset<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	&lt;div class=<span class="token string">&quot;bigbox&quot;</span>&gt;
		&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;1&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;2&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;3&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;4&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;5&lt;/div&gt;
		&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;6&lt;/div&gt;
	&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>主轴上的元素布局方案 justify-content:</strong></p><p><strong>1.主轴的开始位置 flex-start:</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bigbox</span><span class="token punctuation">{</span><span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">/*默认值 ,朝着左边进行对齐,在主轴的开始位置*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.主轴的结束位置 flex-end;</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bigbox</span><span class="token punctuation">{</span><span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">/*右对齐,在主轴的结束位置*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果把元素的排列方向(主轴朝向)改变</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.bigbox</span><span class="token punctuation">{</span>
       <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
			<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
       <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        <span class="token comment">/*此时主轴方向从上向下,而不是从左向右.
          换行方向向右,主轴开始的位置在上边,主轴结束的位置在下边,此时元素在主轴的结束*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.元素在主轴上挤在一起居中 center</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token comment">/*上面四个元素作为整体留有空隙,下面两个元素作为整体留有空隙 
	现在无论增加或减少元素都能保证在主轴上面居中排列*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.散开</strong></p><blockquote><p><strong>1.space-around(around是环绕的意思,每个flex子元素两侧都有互不干扰的等宽空白间距.最终视觉上子元素之间的间距只有子元素到父元素间距的一半)</strong></p></blockquote><blockquote><p><strong>2.justify-content:space-between;(表现为两端对齐,between是中间的意思,只有子元素之间有空隙,并且均分)</strong></p></blockquote><blockquote><p><strong>3.justify-content: space-evenly;(evenly是匀称平等的意思,最终子元素和父元素,子元素和子元素间距都一样</strong></p></blockquote><h3 id="交叉轴-元素的换行方向-的布局方案" tabindex="-1"><a class="header-anchor" href="#交叉轴-元素的换行方向-的布局方案" aria-hidden="true">#</a> 交叉轴(元素的换行方向)的布局方案</h3><p><strong>弹性之一:不换行的时候元素在主轴会挤在一起</strong></p><p><strong>弹性之二:元素在交叉轴方向上其实是有弹性的,当我们不设置高度的时候元素的高度会按照行数均分</strong></p><p><strong>flex里的子元素不是普通的块元素,有自己的性质</strong></p><blockquote><p><strong>默认主轴方向的长度是包裹的.</strong></p><p><strong>交叉轴方向是等比例填充的.(align-items:stretch)</strong></p></blockquote><ul><li><p><strong>交叉轴上的元素的对齐方式</strong></p><p><strong>两种不同的场景</strong></p></li></ul><p><strong>1.我们将主轴方向上面的多行元素看成一个整体</strong></p><p><strong>此属性只在flex容器中有多行flex元素时才有作用.(使用flex-wrap)</strong></p><p>换了两行就相当于有两个元素,这两个元素是怎么对齐?这是我们需要讨论的第一个特点,</p><p><strong>整体与整体在交叉轴的对齐方式</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token property">flex-direction</span><span class="token punctuation">:</span>row<span class="token punctuation">;</span>
	<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
	<span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>
	<span class="token property">align-content</span><span class="token punctuation">:</span>stretch<span class="token punctuation">;</span>
<span class="token comment">/*默认交叉轴方向的长度是等比例填充的,如果元素换行后仍然有多余空间,元素会平分剩余空间
		如果子元素没有高度,元素则会拉伸到父元素的高度,每行平分父元素的高度*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span>flex-start<span class="token punctuation">;</span><span class="token comment">/*元素在交叉轴的开始位置排列*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span><span class="token comment">/*元素在交叉轴的结束位置排列,元素位于容器的结尾*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token comment">/*元素在交叉轴居中显示(结合justify-content:center可以水平垂直居中)*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>
<span class="token comment">/*结合justify-content:space-between.
各行在弹性盒容器中平均分布,子元素与子元素的间隙是相同的
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span>space-around<span class="token punctuation">;</span>
<span class="token comment">/*结合justify-content:space-around元素与元素之间的间隙都一样*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span>space-evenly<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.主轴每一个元素在交叉轴方向上的排列布局方式</strong></p><p>​ <strong>align-items</strong></p><blockquote><p><strong>strech(默认值) 自动把元素拉伸成容器的高度,</strong></p><p><strong>flex-start交叉轴的起点对齐。</strong></p><p><strong>flex-end 交叉轴的终点对齐</strong></p><p><strong>center交叉轴的中点对齐</strong></p><p><strong>baseline基线对齐</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">&lt;div class=&quot;bigbox&quot;&gt;
		&lt;div class=&quot;smallbox h130&quot;&gt;1&lt;/div&gt;
		&lt;div class=&quot;smallbox &quot;&gt;2&lt;/div&gt;
		&lt;div class=&quot;smallbox h150&quot;&gt;3&lt;/div&gt;
		&lt;div class=&quot;smallbox &quot;&gt;4&lt;/div&gt;
		&lt;div class=&quot;smallbox h200&quot;&gt;5&lt;/div&gt;
		&lt;div class=&quot;smallbox&quot;&gt;6&lt;/div&gt;
		&lt;div class=&quot;smallbox&quot;&gt;7&lt;/div&gt;
		&lt;div class=&quot;smallbox&quot;&gt;8&lt;/div&gt;
	&lt;/div&gt;
.bigbox</span><span class="token punctuation">{</span>
			<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
			<span class="token property">flex-direction</span><span class="token punctuation">:</span>row<span class="token punctuation">;</span>
			<span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
			<span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>
			<span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
			<span class="token property">align-items</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span>100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span>1px solid black<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.smallbox</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
			<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px black inset<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.h150</span><span class="token punctuation">{</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
			<span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.h130</span><span class="token punctuation">{</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 130px<span class="token punctuation">;</span>
			<span class="token property">font-size</span><span class="token punctuation">:</span>80px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.h200</span><span class="token punctuation">{</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结:</strong></p><p>​ <strong>弹性盒模型(父元素控制子元素的整体口号)</strong></p><p><strong>1.主轴 交叉轴</strong></p><p><strong>2,元素在主轴上的对齐方式 justify-content</strong></p><p><strong>3.多行元素看成一个整体,这个整体在交叉轴的方向上的对齐方式 align-content</strong></p><p><strong>4.单行主轴元素在交叉轴的对齐方式 align-items</strong></p><hr><h3 id="子元素的微调操作" tabindex="-1"><a class="header-anchor" href="#子元素的微调操作" aria-hidden="true">#</a> 子元素的微调操作</h3><p><strong>给子元素添加样式,作为子元素的微调</strong></p><ul><li><strong>1.序号,排列顺序 oreder</strong></li></ul><blockquote><p>我们之前学习前端的元素顺序时候1就是1,2就是2,1写在2前面就是写在2前面,没有办法修改,</p><p><strong>css控制html结构的顺序</strong>,</p></blockquote><p><strong>order值:,默认是0,</strong></p><blockquote><p><strong>值越小越前面越大越后面</strong></p><p><strong>order值一样根据代码书写顺序来,只能弹性盒子中</strong></p><p><em>取值 只能是整数 可以为负数 0是默认 数值越大在越后面</em></p></blockquote><p><strong>2.弹性盒子内的子元素的大小属性</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">&lt;div class=&quot;bigbox&quot;&gt;
		&lt;div class=&quot;smallbox&quot;&gt;1&lt;/div&gt;
		&lt;div class=&quot;smallbox&quot;&gt;2&lt;/div&gt;
		&lt;div class=&quot;smallbox&quot;&gt;3&lt;/div&gt;
		&lt;div class=&quot;smallbox&quot;&gt;4&lt;/div&gt;
	&lt;/div&gt;
.bigbox</span><span class="token punctuation">{</span>
			<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token comment">/*此时元素不换行,主轴默认朝右,右边有空余的区域,.
  		如果我们想这空出来的区域被这个盒子占满呢?*/</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span>100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span>1px solid black<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.smallbox</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
			<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px black inset<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>盒子的膨胀系数 flex-grow: 默认都是0,只有当有多余空间可分配可设置</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;smallbox grow&quot;&gt;1&lt;/div&gt;
.grow</span><span class="token punctuation">{</span>
			<span class="token property">flex-grow</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token comment">/*这地方写1默认把多出来的部分全部都分,写小数就相当于百分比,写2也相当于1*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;smallbox grow&quot;&gt;1&lt;/div&gt;
&lt;div class=&quot;smallbox grow&quot;&gt;2&lt;/div&gt;
.grow</span><span class="token punctuation">{</span>
			<span class="token property">flex-grow</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span><span class="token comment">/*这两家会均分*/</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;smallbox grow1&quot;&gt;1&lt;/div&gt;

&lt;div class=&quot;smallbox grow2&quot;&gt;2&lt;/div&gt;
grow1</span><span class="token punctuation">{</span>
	<span class="token property">flex-grow</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token selector">grow2</span><span class="token punctuation">{</span>
	<span class="token property">flex-grow</span><span class="token punctuation">:</span>7<span class="token punctuation">;</span><span class="token comment">/*这两家会按比例分配*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果份数和小于1,就按百分比分,如果大于1,就全部分</strong></p><p><strong>有富余才放大</strong></p><p><strong>默认是0 设置越大拉伸越多</strong></p><p>自己要多分的部分=总多出来的部分*(自己的份数/总份数)</p><ul><li><strong>盒子的压缩比例</strong></li></ul><p>​ <strong>flex-shrink 默认值是1;</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;div class=<span class="token string">&quot;smallbox&quot;</span>&gt;5&lt;/div&gt;<span class="token comment">/*多加一个盒子*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.shrink0</span><span class="token punctuation">{</span>
			<span class="token property">flex-shrink</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;smallbox shrink0&quot;</span>&gt;2&lt;/div&gt;
<span class="token comment">/*此时不会缩小.随着宽度减少,每个元素都变得很小,它就不会减少*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.shrink2</span><span class="token punctuation">{</span>
			<span class="token property">flex-shrink</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;smallbox shrink0&quot;</span>&gt;2&lt;/div&gt;	
<span class="token comment">/*此时shrink:2的元素会比shrnk1的元素收缩值大两倍*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自己的捐献的部分 = 总的缺失部分*(自己的捐献系数/总的捐献系数)</p><ul><li><p><strong>flex-basis属性定义了在分配多余空间之前,子元素占据的主轴空间</strong></p><blockquote><p><strong>用长度值来定义宽度。不允许负值</strong></p><p><strong>用百分比来定义宽度。不允许负值</strong></p><p><strong>content:基于内容自动计算宽度</strong></p><p><strong>auto:检索你是否设置了width/height值,没有就使用content</strong></p></blockquote></li></ul><p>这三个数膨胀和压缩系数和felx-basis基准值可以合并到一起</p><p><strong>flex属性是 flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。</strong></p><blockquote><p>auto: 计算值为 1 1 auto</p><p>initial: 计算值为 0 1 auto</p><p>none：计算值为 0 0 auto</p><p>inherit：从父元素继承</p></blockquote><p><strong>flex:none 当盒子变小时不会压缩,变大的话也不会拉伸,相当于我们物理学的刚体,不屈不挠,不会变通的一个盒子</strong></p><p><strong>flex:auto 缩小盒子时等比例缩小,放大盒子也会拉伸</strong></p><h3 id="align-self子元素覆盖的对齐方式" tabindex="-1"><a class="header-anchor" href="#align-self子元素覆盖的对齐方式" aria-hidden="true">#</a> align-self子元素覆盖的对齐方式</h3><blockquote><p>align-self用于设置单个弹性子元素在交叉轴上的对齐方式 可以覆盖align-items</p></blockquote><h3 id="flex兼容性" tabindex="-1"><a class="header-anchor" href="#flex兼容性" aria-hidden="true">#</a> flex兼容性</h3><p><strong>1.旧版本的flex写法只支持旧的语法书写</strong></p><ol><li>最早: display:box;</li><li>过渡: display:flex-box;</li><li>当今标准 display:flex;</li></ol><p><strong>2.为了兼容老版本的游览器</strong></p><p>需要添加游览器兼容前缀 如-webkit-</p>`,113),l=[p];function i(o,c){return s(),a("div",null,l)}const u=n(e,[["render",i],["__file","17.danxinghemoxing.html.vue"]]);export{u as default};
