import{_ as s,o as n,c as a,a as e}from"./app-EaupiRXX.js";const l={},p=e(`<h2 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符"><span>算数运算符</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">+</span> <span class="token operator">-</span> <span class="token operator">*</span> <span class="token operator">/</span> <span class="token operator">%</span> <span class="token operator">++</span> <span class="token operator">--</span> 
比较规则：
    转成原始类型
        <span class="token number">1.</span>转换为数字，然后运算
        <span class="token number">2.</span><span class="token literal-property property">特殊情况</span><span class="token operator">:</span> x <span class="token operator">+</span> y， x和y有一个是字符串。转换为字符串，然后拼接。
        <span class="token number">3.</span><span class="token literal-property property">特殊情况</span><span class="token operator">:</span> <span class="token number">NaN</span> 和任何类型运算得到的还是 <span class="token number">NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">&gt;=</span> <span class="token operator">&lt;=</span>
比较规则：
    转成原始类型
        <span class="token number">1.</span> 转成数字，然后比较。
        <span class="token number">2.</span> 特殊情况：两端全是字符串，比较字典顺序。
        <span class="token number">3.</span> 特殊情况：两端存在<span class="token number">NaN</span>，一定为<span class="token boolean">false</span>。
        
<span class="token operator">===</span>
比较规则：
        <span class="token number">1.</span> 类型和值必须都相同。
        <span class="token number">2.</span> <span class="token literal-property property">特殊情况</span><span class="token operator">:</span>两端存在 <span class="token number">NaN</span> ，一定为 <span class="token boolean">false</span>
        
<span class="token operator">==</span>
比较规则：
        <span class="token number">1.</span> 两端类型相同，比较值。
        <span class="token number">2.</span> 两端都是原始类型，转换成数字比较。
        <span class="token number">3.</span> 一端是原始类型，一端是对象类型，把对象转换成原始类型后比较
        <span class="token number">4.</span> <span class="token literal-property property">特殊情况</span><span class="token operator">:</span> <span class="token keyword">undefined</span> 和 <span class="token keyword">null</span> 只有与自身比较或者互相比较时，才会返回 <span class="token boolean">true</span>
        <span class="token number">5.</span> <span class="token literal-property property">特殊情况</span><span class="token operator">:</span> 两端存在 <span class="token number">NaN</span> ，一定为 <span class="token boolean">false</span>
        
<span class="token operator">!=</span> <span class="token operator">!==</span>
比较规则：
        <span class="token number">1.</span> 对相等取反。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算"><span>逻辑运算</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">!</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">||</span> <span class="token operator">?</span><span class="token operator">:</span>
比较规则：
    转换为boolean
        <span class="token number">1.</span> x <span class="token operator">&amp;&amp;</span> y<span class="token punctuation">,</span> x为 <span class="token boolean">false</span> ，返回x<span class="token punctuation">,</span> x为 <span class="token boolean">true</span> ，返回y
        <span class="token number">2.</span> x <span class="token operator">||</span> y<span class="token punctuation">,</span> x为 <span class="token boolean">false</span> ，返回y<span class="token punctuation">,</span> x为 <span class="token boolean">true</span> ，返回x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[p];function r(o,i){return n(),a("div",null,t)}const d=s(l,[["render",r],["__file","yunsuanfubijiao.html.vue"]]),u=JSON.parse('{"path":"/blogs/interview/yunsuanfubijiao.html","title":"运算符比较","lang":"zh-CN","frontmatter":{"title":"运算符比较","date":"2024-03-14T00:00:00.000Z","tags":["interview"],"categories":["interview"]},"headers":[{"level":2,"title":"算数运算符","slug":"算数运算符","link":"#算数运算符","children":[]},{"level":2,"title":"比较运算符","slug":"比较运算符","link":"#比较运算符","children":[]},{"level":2,"title":"逻辑运算","slug":"逻辑运算","link":"#逻辑运算","children":[]}],"git":{"createdTime":1710399064000,"updatedTime":1710399064000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/interview/运算符比较.md","readingTime":{"minutes":1.08,"words":324}}');export{d as comp,u as data};
