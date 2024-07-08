import{_ as n,o as s,c as e,a}from"./app-EaupiRXX.js";const t={},l=a(`<h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型"><span>基本类型</span></a></h3><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">例子</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">number</td><td style="text-align:center;">1, -33, 2.5</td><td style="text-align:center;">任意数字</td></tr><tr><td style="text-align:center;">string</td><td style="text-align:center;">&#39;hi&#39;, &quot;hi&quot;, <code>hi</code></td><td style="text-align:center;">任意字符串</td></tr><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">true、false</td><td style="text-align:center;">布尔值true或false</td></tr><tr><td style="text-align:center;">字面量</td><td style="text-align:center;">其本身</td><td style="text-align:center;">限制变量的值就是该字面量的值</td></tr><tr><td style="text-align:center;">any</td><td style="text-align:center;">*</td><td style="text-align:center;">任意类型</td></tr><tr><td style="text-align:center;">unknown</td><td style="text-align:center;">*</td><td style="text-align:center;">类型安全的any</td></tr><tr><td style="text-align:center;">void</td><td style="text-align:center;">空值（undefined）</td><td style="text-align:center;">没有值（或undefined）</td></tr><tr><td style="text-align:center;">never</td><td style="text-align:center;">没有值</td><td style="text-align:center;">不能是任何值</td></tr><tr><td style="text-align:center;">object</td><td style="text-align:center;">{name:&#39;孙悟空&#39;}</td><td style="text-align:center;">任意的JS对象</td></tr><tr><td style="text-align:center;">array</td><td style="text-align:center;">[1,2,3]</td><td style="text-align:center;">任意JS数组</td></tr><tr><td style="text-align:center;">tuple</td><td style="text-align:center;">[4,5]</td><td style="text-align:center;">元素，TS新增类型，固定长度数组</td></tr><tr><td style="text-align:center;">enum</td><td style="text-align:center;">enum{A, B}</td><td style="text-align:center;">枚举，TS中新增类型</td></tr></tbody></table><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明"><span>变量声明</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var [变量名] : [类型] = 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="类型使用" tabindex="-1"><a class="header-anchor" href="#类型使用"><span>类型使用</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// number</span>
<span class="token keyword">let</span> decimal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">let</span> hex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span>
<span class="token keyword">let</span> binary<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span>
<span class="token keyword">let</span> octal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o7654</span>
<span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">100n</span>

<span class="token comment">// string</span>
<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>

<span class="token comment">// boolean</span>
<span class="token keyword">let</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
bool <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// 字面量</span>
<span class="token keyword">let</span> color<span class="token operator">:</span> <span class="token string">&#39;green&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;red&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;yellow&#39;</span> 

<span class="token comment">// any</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span>
d <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
d <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// unknown</span>
<span class="token keyword">let</span> notsure<span class="token operator">:</span> unknow <span class="token operator">=</span> <span class="token number">4</span>
notsure <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

<span class="token comment">// void</span>
<span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// never</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// object</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// tuple</span>
<span class="token keyword">let</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span>

<span class="token comment">// enum</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
    Red <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
    Green<span class="token punctuation">,</span>
    Blue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[l];function p(i,r){return s(),e("div",null,o)}const d=n(t,[["render",p],["__file","02.shujuleixing.html.vue"]]),u=JSON.parse('{"path":"/docs/TypeScript/02.shujuleixing.html","title":"数据类型","lang":"zh-CN","frontmatter":{"title":"数据类型","date":"2024-07-04T00:00:00.000Z","tags":["TypeScript"]},"headers":[{"level":3,"title":"基本类型","slug":"基本类型","link":"#基本类型","children":[]},{"level":3,"title":"变量声明","slug":"变量声明","link":"#变量声明","children":[]},{"level":3,"title":"类型使用","slug":"类型使用","link":"#类型使用","children":[]}],"git":{"createdTime":1720420551000,"updatedTime":1720420551000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/TypeScript/02.数据类型.md","readingTime":{"minutes":0.9,"words":270}}');export{d as comp,u as data};
