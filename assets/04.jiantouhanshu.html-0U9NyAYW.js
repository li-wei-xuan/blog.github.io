import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},p=t(`<h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用「箭头」（=&gt;）定义函数。

注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点"><span>注意点</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  1) 如果形参只有一个，则小括号可以省略
  2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
  3) 箭头函数 this 指向声明时所在作用域下 this 的值
  4) 箭头函数不能作为构造函数实例化
  5) 不能使用 arguments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token comment">// 正常写法</span>
    <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 3</span>

    <span class="token comment">// 如果形参只有一个，则小括号可以省略</span>
    <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token parameter">a</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>a
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 2</span>

    <span class="token comment">// 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果</span>
    <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token parameter">a</span> <span class="token operator">=&gt;</span>  a<span class="token operator">+</span>a
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 2</span>

    <span class="token comment">// 箭头函数 this 指向声明时所在作用域下 this 的值</span>
    <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//test</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","04.jiantouhanshu.html.vue"]]),r=JSON.parse('{"path":"/docs/ECMAScript/04.jiantouhanshu.html","title":"箭头函数","lang":"zh-CN","frontmatter":{"title":"箭头函数","date":"2022-12-08T00:00:00.000Z","tags":["ECMASript"]},"headers":[{"level":3,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]}],"git":{"createdTime":1720420551000,"updatedTime":1720420551000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/ECMAScript/04.箭头函数.md","readingTime":{"minutes":0.96,"words":289}}');export{d as comp,r as data};
