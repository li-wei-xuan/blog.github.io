import{_ as e,o as s,c as a,a as n}from"./app-EaupiRXX.js";const t={},i=n(`<h3 id="什么是tpyesript" tabindex="-1"><a class="header-anchor" href="#什么是tpyesript"><span>什么是TpyeSript</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. TypeScript是JavaScript的超集。

2. 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。

3. TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。

4. TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。

5. 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；
TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；
TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；
同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装tpyesript" tabindex="-1"><a class="header-anchor" href="#安装tpyesript"><span>安装TpyeSript</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用tpyesript" tabindex="-1"><a class="header-anchor" href="#使用tpyesript"><span>使用TpyeSript</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>使用tsc对ts文件进行编译
    进入命令行
    进入ts文件所在目录
    执行命令：tsc xxx<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="书写tpyesript" tabindex="-1"><a class="header-anchor" href="#书写tpyesript"><span>书写TpyeSript</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">变量</span><span class="token operator">:</span> 类型<span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token literal-property property">变量</span><span class="token operator">:</span> 类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">参数</span><span class="token operator">:</span> 类型<span class="token punctuation">,</span> <span class="token literal-property property">参数</span><span class="token operator">:</span> 类型</span><span class="token punctuation">)</span><span class="token operator">:</span> 类型<span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[i];function r(l,c){return s(),a("div",null,p)}const o=e(t,[["render",r],["__file","01.kuaisurumen.html.vue"]]),u=JSON.parse('{"path":"/docs/TypeScript/01.kuaisurumen.html","title":"快速入门","lang":"zh-CN","frontmatter":{"title":"快速入门","date":"2024-07-04T00:00:00.000Z","tags":["TypeScript"]},"headers":[{"level":3,"title":"什么是TpyeSript","slug":"什么是tpyesript","link":"#什么是tpyesript","children":[]},{"level":3,"title":"安装TpyeSript","slug":"安装tpyesript","link":"#安装tpyesript","children":[]},{"level":3,"title":"使用TpyeSript","slug":"使用tpyesript","link":"#使用tpyesript","children":[]},{"level":3,"title":"书写TpyeSript","slug":"书写tpyesript","link":"#书写tpyesript","children":[]}],"git":{"createdTime":1720420551000,"updatedTime":1720420551000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/TypeScript/01.快速入门.md","readingTime":{"minutes":1.06,"words":318}}');export{o as comp,u as data};
