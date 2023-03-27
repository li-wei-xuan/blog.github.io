import{_ as a,p as s,q as e,w as i,Y as n}from"./framework-aa5c4115.js";const t={},l=n('<h2 id="bind、call、apply的作用" tabindex="-1"><a class="header-anchor" href="#bind、call、apply的作用" aria-hidden="true">#</a> bind、call、apply的作用</h2><p>关于<a href="#call%E7%9A%84%E7%94%A8%E6%B3%95">call</a>、<a href="#apply%E7%9A%84%E7%94%A8%E6%B3%95">apply</a>、<a href="#bind%E7%9A%84%E7%94%A8%E6%B3%95">bind</a>函数，它们主要用来改变this指向的。</p>',2),p=n(`<h3 id="call的用法" tabindex="-1"><a class="header-anchor" href="#call的用法" aria-hidden="true">#</a> call的用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn.call(thisArg, arg1, arg2, arg3, ...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>下面的代码中，我们obj1对象也想使用obj对象中的sayHello方法；我们就可以使用call方法调用obj.sayHello, 并将obj.sayHello中的this修改为obj1，把 ‘设计师’, ‘画画’ 这两个参数出给obj.sayHello。</strong></p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>    let obj = {
        name: &quot;xiaoming&quot;,
        age: 24,
        sayHello: function (job, hobby) {
            console.log(\`我叫\${this.name},今年\${this.age}岁。我的工作是: \${job}，我的爱好是: \${hobby}。\`);
        }
    }
    obj.sayHello(&#39;程序员&#39;, &#39;看美女&#39;); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: &quot;lihua&quot;,
        age: 30
    }
    obj1.sayHello(); // Uncaught TypeError: obj1.sayHello is not a function
    obj.sayHello.call(obj1, &#39;设计师&#39;, &#39;画画&#39;); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply的用法" tabindex="-1"><a class="header-anchor" href="#apply的用法" aria-hidden="true">#</a> apply的用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apply(thisArg, [argsArr])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>fn.apply的作用和call相同：修改this指向，并立即执行fn。区别在于传参形式不同，apply接受两个参数，第一个参数是要指向的this对象，第二个参数是一个数组，数组里面的元素会被展开传入fn,作为fn的参数。</strong></p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>    let obj = {
        name: &quot;xiaoming&quot;,
        age: 24,
        sayHello: function (job, hobby) {
            console.log(\`我叫\${this.name},今年\${this.age}岁。我的工作是: \${job}，我的爱好是: \${hobby}。\`);
        }
    }
    obj.sayHello(&#39;程序员&#39;, &#39;看美女&#39;); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: &quot;lihua&quot;,
        age: 30
    }

    obj.sayHello.apply(obj1, [&#39;设计师&#39;, &#39;画画&#39;]); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind的用法" tabindex="-1"><a class="header-anchor" href="#bind的用法" aria-hidden="true">#</a> bind的用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bind(thisArg, arg1, arg2, arg3, ...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>fn.bind的作用是只修改this指向，但不会立即执行fn；会返回一个修改了this指向后的fn。需要调用才会执行:bind(thisArg, arg1, arg2, arg3, ...)()。bind的传参和call相同。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
        <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">job<span class="token punctuation">,</span> hobby</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁。我的工作是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>job<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，我的爱好是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hobby<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">。</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">&#39;程序员&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;看美女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。</span>

    <span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;lihua&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span>

    obj<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token string">&#39;设计师&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;画画&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 无输出结果</span>
    obj<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token string">&#39;设计师&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;画画&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bind、call、apply的区别" tabindex="-1"><a class="header-anchor" href="#bind、call、apply的区别" aria-hidden="true">#</a> bind、call、apply的区别</h2><h3 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>三个都是用于改变this指向；
接收的第一个参数都是this要指向的对象；
都可以利用后续参数传参。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>call和bind传参相同，多个参数依次传入的；
apply只有两个参数，第二个参数为数组；
call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function o(c,d){return s(),e("div",null,[l,i(" https://blog.csdn.net/weixin_40856652/article/details/124293144 "),p])}const u=a(t,[["render",o],["__file"," bind、call、applyqubie.html.vue"]]);export{u as default};
