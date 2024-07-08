import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},p=e(`<h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型"><span>联合类型</span></a></h3><p>一个联合类型表示一个值的类型可以是几个类型中的一个。 我们用竖线（|）来分隔不同类型</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 联合类型</span>
<span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token operator">|</span> string <span class="token operator">|</span> boolean
num <span class="token operator">=</span> <span class="token number">10</span>
num <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
num <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 可区分联合</span>
type NetworkLoadingState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&quot;loading&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type NetworkFailedState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&quot;failed&quot;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type NetworkSuccessState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">summary</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个只代表上述类型之一的类型，但你还不确定它是哪个。</span>
type NetworkState <span class="token operator">=</span>
    <span class="token operator">|</span> NetworkLoadingState
    <span class="token operator">|</span> NetworkFailedState
    <span class="token operator">|</span> NetworkSuccessState<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型"><span>交叉类型</span></a></h3><p>交叉类型将多个类型合并为一个。 这允许你把现有的类型加在一起，得到一个具有你需要的所有功能的单个类型。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

type TestType <span class="token operator">=</span> Test <span class="token operator">&amp;</span> Test2

<span class="token keyword">const</span> <span class="token literal-property property">test</span><span class="token operator">:</span> TestType <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, I am Tom!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","04.lianheleixinghejiaochaleixing.html.vue"]]),d=JSON.parse('{"path":"/docs/TypeScript/04.lianheleixinghejiaochaleixing.html","title":"联合类型和交叉类型","lang":"zh-CN","frontmatter":{"title":"联合类型和交叉类型","date":"2024-07-05T00:00:00.000Z","tags":["TypeScript"]},"headers":[{"level":3,"title":"联合类型","slug":"联合类型","link":"#联合类型","children":[]},{"level":3,"title":"交叉类型","slug":"交叉类型","link":"#交叉类型","children":[]}],"git":{"createdTime":1720420551000,"updatedTime":1720420551000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/TypeScript/04.联合类型和交叉类型.md","readingTime":{"minutes":0.71,"words":214}}');export{u as comp,d as data};
