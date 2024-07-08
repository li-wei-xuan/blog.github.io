import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},i=e(`<h2 id="节流和防抖的定义和区别" tabindex="-1"><a class="header-anchor" href="#节流和防抖的定义和区别"><span>节流和防抖的定义和区别</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>防抖：指触发事件后，在 n 秒后函数才会执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
节流：指连续触发事件，但是在 n 秒中只执行一次函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>防抖：多次触发，只执行最后一次
节流：规定时间内，只触发一次
相同点：
  都可以通过使用 setTimeout 实现
  目的都是，降低回调执行频率。节省计算资源
不同点：
  函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout和 setTimeout实现。
  函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能
  函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖和节流解决什么问题" tabindex="-1"><a class="header-anchor" href="#防抖和节流解决什么问题"><span>防抖和节流解决什么问题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在进行resize、scroll、keyup、keydown、mousedown、mousemove等事件操作时，
如果事件处理函数调用的频率无限制，会加重浏览器的负担，容易导致页面卡顿等影响用户的体验；
这时就可以通过debounce(防抖)和throttle(节流)函数来限制事件处理函数的调用频率，提升用户的体验，同时又不影响实际的效果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 节流</span>
<span class="token keyword">const</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">1500</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> lastTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> nowTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> lastTime <span class="token operator">&gt;</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            lastTime <span class="token operator">=</span> nowTime<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 防抖</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//清除上一次延时器</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//重新设置新的延时器</span>
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖和节流的应用场景" tabindex="-1"><a class="header-anchor" href="#防抖和节流的应用场景"><span>防抖和节流的应用场景</span></a></h2><h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖"><span>防抖</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖。
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多。
3. 文本编辑器实时保存，当无任何更改操作一秒后进行保存。
4. DOM 元素的拖拽功能实现。
5. 计算鼠标移动的距离。
6. Canvas 模拟画板功能。
7. 搜索联想。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流"><span>节流</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. scroll 事件，每隔一秒计算一次位置信息等。
2. 浏览器播放事件，每个一秒计算一次进度信息等。
3. input框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","jieliuhefangdou.html.vue"]]),r=JSON.parse('{"path":"/blogs/interview/jieliuhefangdou.html","title":"节流和防抖","lang":"zh-CN","frontmatter":{"title":"节流和防抖","date":"2022-10-09T00:00:00.000Z","tags":["interview"],"categories":["interview"]},"headers":[{"level":2,"title":"节流和防抖的定义和区别","slug":"节流和防抖的定义和区别","link":"#节流和防抖的定义和区别","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[]}]},{"level":2,"title":"防抖和节流解决什么问题","slug":"防抖和节流解决什么问题","link":"#防抖和节流解决什么问题","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"防抖和节流的应用场景","slug":"防抖和节流的应用场景","link":"#防抖和节流的应用场景","children":[{"level":3,"title":"防抖","slug":"防抖","link":"#防抖","children":[]},{"level":3,"title":"节流","slug":"节流","link":"#节流","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1713838176000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1},{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/interview/节流和防抖.md","readingTime":{"minutes":2.15,"words":644}}');export{d as comp,r as data};
