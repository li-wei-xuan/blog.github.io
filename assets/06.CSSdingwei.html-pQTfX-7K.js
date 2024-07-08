import{_ as n,o as s,c as i,a as e}from"./app-EaupiRXX.js";const a={},l=e(`<h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位"><span>相对定位</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>如何设置相对定位
  给元素设置 <span class="token property">position</span><span class="token punctuation">:</span>relative 即可实现相对定位。
  可以使用 left 、 right 、 top 、 bottom 四个属性调整位置。

相对定位的参考点在哪里 —— 相对自己原来的位置

相对定位的特点：
	1. 不会脱离文档流，元素位置的变化，只是视觉效果上的变化，不会对其他元素产生任何影响。
	2. 定位元素的显示层级比普通元素高，无论什么定位，显示层级都是一样的。
		默认规则是：
			<span class="token punctuation">(</span>a<span class="token punctuation">)</span>定位的元素会盖在普通元素之上。
			<span class="token punctuation">(</span>b<span class="token punctuation">)</span>都发生定位的两个元素，后写的元素会盖在先写的元素之上。
	3. left 不能和 right 一起设置， top 和 bottom 不能一起设置。
	4. 相对定位的元素，也能继续浮动，但不推荐这样做。
	5. 相对行为的元素，也能通过 margin 调整位置，但不推荐这样做。

注意：绝大多数情况下，相对定位，会与绝对定位配合使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位"><span>绝对定位</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>如何设置绝对定位
	给元素设置 <span class="token property">position</span><span class="token punctuation">:</span> absolute 即可实现绝对定位。
	可以使用 left 、 right 、 top 、 bottom 四个属性调整位置。

绝对定位的参考点在哪里 —— 参考它的包含块。

什么是包含块
	1. 对于没有脱离文档流的元素：包含块就是父元素；
	2. 对于脱离文档流的元素：包含块是第一个拥有定位属性的祖先元素（如果所有祖先都
没定位，那包含块就是整个页面）。

绝对定位元素的特点： 
	1. 脱离文档流，会对后面的兄弟元素、父元素有影响。
	2. left 不能和 right 一起设置， top 和 bottom 不能一起设置。
	3. 绝对定位、浮动不能同时设置，如果同时设置，浮动失效，以定位为主。
	4. 绝对定位的元素，也能通过 margin 调整位置，但不推荐这样做。
	5. 无论是什么元素（行内、行内块、块级）设置为绝对定位之后，都变成了定位元素。
	
何为定位元素 —— 默认宽、高都被内容所撑开，且能自由设置宽高。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="固定定位" tabindex="-1"><a class="header-anchor" href="#固定定位"><span>固定定位</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>如何设置为固定定位
	给元素设置 <span class="token property">position</span><span class="token punctuation">:</span> fixed 即可实现固定定位。
	可以使用 left 、 right 、 top 、 bottom 四个属性调整位置。

固定定位的参考点在哪里 —— 参考它的视口

什么是视口 —— 对于 PC 浏览器来说，视口就是我们看网页的那扇“窗户”。 

固定定位元素的特点
	1. 脱离文档流，会对后面的兄弟元素、父元素有影响。
	2. left 不能和 right 一起设置， top 和 bottom 不能一起设置。
	3. 固定定位和浮动不能同时设置，如果同时设置，浮动失效，以固定定位为主。
	4. 固定定位的元素，也能通过 margin 调整位置，但不推荐这样做。
	5. 无论是什么元素（行内、行内块、块级）设置为固定定位之后，都变成了定位元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="粘性定位" tabindex="-1"><a class="header-anchor" href="#粘性定位"><span>粘性定位</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>如何设置为粘性定位
	给元素设置 <span class="token property">position</span><span class="token punctuation">:</span>sticky 即可实现粘性定位。
	可以使用 left 、 right 、 top 、 bottom 四个属性调整位置，不过最常用的是 top 值。

粘性定位的参考点在哪里
	离它最近的一个拥有“滚动机制”的祖先元素，即便这个祖先不是最近的真实可滚动祖先。

粘性定位元素的特点
	1.不会脱离文档流，它是一种专门用于窗口滚动时的新的定位方式。
	2.最常用的值是 top 值。
	3.粘性定位和浮动可以同时设置，但不推荐这样做。
	4.粘性定位的元素，也能通过 margin 调整位置，但不推荐这样做。
	
粘性定位和相对定位的特点基本一致，不同的是：粘性定位可以在元素到达某个位置时将其固定。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定位层级" tabindex="-1"><a class="header-anchor" href="#定位层级"><span>定位层级</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>定位元素的显示层级比普通元素高，无论什么定位，显示层级都是一样的。
如果位置发生重叠，默认情况是：后面的元素，会显示在前面元素之上。
可以通过 css 属性 z-index 调整元素的显示层级。
z-index 的属性值是数字，没有单位，值越大显示层级越高。
只有定位的元素设置 z-index 才有效。
如果 z-index 值大的元素，依然没有覆盖掉 z-index 值小的元素，那么请检查其包含块的层级。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定位的特殊应用" tabindex="-1"><a class="header-anchor" href="#定位的特殊应用"><span>定位的特殊应用</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>注意：
	1. 发生固定定位、绝对定位后，元素都变成了定位元素，默认宽高被内容撑开，且依然可以设置宽高。
	2. 发生相对定位后，元素依然是之前的显示模式。
	3. 以下所说的特殊应用，只针对 绝对定位 和 固定定位 的元素，不包括相对定位的元素。
	
让定位元素的宽充满包含块 
    1. 块宽想与包含块一致，可以给定位元素同时设置 left 和 right 为 0 。 
    2. 高度想与包含块一致， top 和 bottom 设置为 0 。 

让定位元素在包含块中居中
    方案一：
        <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> 
        <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> 
        <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> 
        <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> 
        <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>

    方案二：
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> 
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> 
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 负的宽度一半<span class="token punctuation">;</span> 
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 负的高度一半<span class="token punctuation">;</span>

注意：该定位的元素必须设置宽高！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function t(c,v){return s(),i("div",null,d)}const u=n(a,[["render",t],["__file","06.CSSdingwei.html.vue"]]),p=JSON.parse('{"path":"/docs/CSS/06.CSSdingwei.html","title":"CSS定位","lang":"zh-CN","frontmatter":{"title":"CSS定位","date":"2023-06-13T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"相对定位","slug":"相对定位","link":"#相对定位","children":[]},{"level":2,"title":"绝对定位","slug":"绝对定位","link":"#绝对定位","children":[]},{"level":2,"title":"固定定位","slug":"固定定位","link":"#固定定位","children":[]},{"level":2,"title":"粘性定位","slug":"粘性定位","link":"#粘性定位","children":[]},{"level":2,"title":"定位层级","slug":"定位层级","link":"#定位层级","children":[]},{"level":2,"title":"定位的特殊应用","slug":"定位的特殊应用","link":"#定位的特殊应用","children":[]}],"git":{"createdTime":1686638874000,"updatedTime":1686638874000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/CSS/06.CSS定位.md","readingTime":{"minutes":4.7,"words":1410}}');export{u as comp,p as data};
