import{_ as e,o as i,c as n,a as t}from"./app-EaupiRXX.js";const l={},a=t(`<h2 id="浮动的简介" tabindex="-1"><a class="header-anchor" href="#浮动的简介"><span>浮动的简介</span></a></h2><p>在最初，浮动是用来实现文字环绕图片效果的，现在浮动是主流的页面布局方式之一。</p><h2 id="元素浮动后的特点" tabindex="-1"><a class="header-anchor" href="#元素浮动后的特点"><span>元素浮动后的特点</span></a></h2><ol><li>🤢脱离文档流。</li><li>😊不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开（尽可能小），而且可以设置宽高。</li><li>😊不会独占一行，可以与其他元素共用一行。</li><li>😊不会 margin 合并，也不会 margin 塌陷，能够完美的设置四个方向的 margin 和 padding 。</li><li>😊不会像行内块一样被当做文本处理（没有行内块的空白问题）。</li></ol><h2 id="解决浮动产生的影响" tabindex="-1"><a class="header-anchor" href="#解决浮动产生的影响"><span>解决浮动产生的影响</span></a></h2><h3 id="元素浮动后会有哪些影响" tabindex="-1"><a class="header-anchor" href="#元素浮动后会有哪些影响"><span>元素浮动后会有哪些影响</span></a></h3><p><strong>对兄弟元素的影响：</strong> 后面的兄弟元素，会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟无影响。</p><p><strong>对父元素的影响：</strong> 不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动的元素。</p><h3 id="解决浮动产生的影响-清除浮动" tabindex="-1"><a class="header-anchor" href="#解决浮动产生的影响-清除浮动"><span>解决浮动产生的影响（清除浮动）</span></a></h3><p><strong>解决方案：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. 方案一 
	给父元素指定高度。

2. 方案二
	给父元素也设置浮动，带来其他影响。

3. 方案三
	给父元素设置 overflow:hidden 。 

4. 方案四
	在所有浮动元素的最后面，添加一个块级元素，并给该块级元素设置 clear:both 。 

5. 方案五(推荐使用)
	给浮动元素的父元素，设置伪元素，通过伪元素清除浮动，原理与方案四相同。

布局中的一个原则：
	设置浮动的时候，兄弟元素要么全都浮动，要么全都不浮动。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关属性" tabindex="-1"><a class="header-anchor" href="#相关属性"><span>相关属性</span></a></h2><table><thead><tr><th>CSS 属性</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td>float</td><td>设置浮动</td><td>left : 设置左浮动<br>right : 设置右浮动<br>none ：不浮动，默认值</td></tr><tr><td>clear</td><td>清除浮动<br>清除前面兄弟元素浮动元素的响应</td><td>left ：清除前面左浮动的影响<br>right ：清除前面右浮动的影响<br>both ：清除前面左右浮动的影响</td></tr></tbody></table>`,13),d=[a];function s(r,c){return i(),n("div",null,d)}const o=e(l,[["render",s],["__file","05.CSSfudong.html.vue"]]),v=JSON.parse('{"path":"/docs/CSS/05.CSSfudong.html","title":"CSS浮动","lang":"zh-CN","frontmatter":{"title":"CSS浮动","date":"2023-06-08T00:00:00.000Z","tags":["CSS"]},"headers":[{"level":2,"title":"浮动的简介","slug":"浮动的简介","link":"#浮动的简介","children":[]},{"level":2,"title":"元素浮动后的特点","slug":"元素浮动后的特点","link":"#元素浮动后的特点","children":[]},{"level":2,"title":"解决浮动产生的影响","slug":"解决浮动产生的影响","link":"#解决浮动产生的影响","children":[{"level":3,"title":"元素浮动后会有哪些影响","slug":"元素浮动后会有哪些影响","link":"#元素浮动后会有哪些影响","children":[]},{"level":3,"title":"解决浮动产生的影响（清除浮动）","slug":"解决浮动产生的影响-清除浮动","link":"#解决浮动产生的影响-清除浮动","children":[]}]},{"level":2,"title":"相关属性","slug":"相关属性","link":"#相关属性","children":[]}],"git":{"createdTime":1686216381000,"updatedTime":1686216381000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/CSS/05.CSS浮动.md","readingTime":{"minutes":1.8,"words":539}}');export{o as comp,v as data};
