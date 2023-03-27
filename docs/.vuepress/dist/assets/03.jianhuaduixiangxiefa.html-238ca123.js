import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const t={},p=e(`<h3 id="简化对象写法" tabindex="-1"><a class="header-anchor" href="#简化对象写法" aria-hidden="true">#</a> 简化对象写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在大括号里面，直接写入变量和函数，作为对象的属性和方法。

注意：对象简写形式简化了代码，所以以后用简写就对了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;zhangsan&#39;</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span>
    <span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span>name<span class="token punctuation">,</span> <span class="token comment">//完整写法</span>
        age<span class="token punctuation">,</span> <span class="token comment">//简写</span>
        func<span class="token punctuation">,</span>
        <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// zhangsan</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">// 18</span>
    Obj<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
    Obj<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// change</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","03.jianhuaduixiangxiefa.html.vue"]]);export{d as default};
