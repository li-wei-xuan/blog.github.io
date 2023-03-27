import{_ as n,p as a,q as s,Y as e}from"./framework-aa5c4115.js";const i={},t=e(`<h2 id="let关键字" tabindex="-1"><a class="header-anchor" href="#let关键字" aria-hidden="true">#</a> let关键字</h2><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>使用 <span class="token keyword">let</span> 声明的变量有几个特点：
  <span class="token number">1</span><span class="token punctuation">)</span> 不允许重复声明
  <span class="token number">2</span><span class="token punctuation">)</span> 块儿级作用域
  <span class="token number">3</span><span class="token punctuation">)</span> 不存在变量提升
  <span class="token number">4</span><span class="token punctuation">)</span> 不影响作用域链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> 关键字用来声明变量，用来代替<span class="token keyword">var</span><span class="token punctuation">,</span>以后声明变量使用 <span class="token keyword">let</span> 就对了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token number">1</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token number">2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>  <span class="token comment">//2</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const关键字" tabindex="-1"><a class="header-anchor" href="#const关键字" aria-hidden="true">#</a> const关键字</h2><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const 声明有以下特点
  1) 声明必须赋初始值
  2) 标识符一般为大写
  3) 不允许重复声明
  4) 值不允许修改
  5) 块儿级作用域

注意: 对象属性修改和数组元素变化不会出发 const 错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a> 应用场景</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> 关键字用来声明常量
声明对象类型使用 <span class="token keyword">const</span>，非对象类型声明选择 <span class="token keyword">let</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2,3,1]</span>
  <span class="token comment">//array = 1; // TypeError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2><h4 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>模板字符串（template string）是增强版的字符串，用反引号（\`）标识

1) 字符串中可以出现换行符
2) 可以使用 \${xxx} 形式输出变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用场景-2" tabindex="-1"><a class="header-anchor" href="#应用场景-2" aria-hidden="true">#</a> 应用场景</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>当遇到字符串与变量拼接的情况使用模板字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 变量拼接</span>
  <span class="token keyword">let</span> star <span class="token operator">=</span> <span class="token string">&#39;王宁&#39;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>star<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">在前几年离开了开心麻花</span><span class="token template-punctuation string">\`</span></span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">//王宁在前几年离开了开心麻花</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[t];function l(d,r){return a(),s("div",null,c)}const o=n(i,[["render",l],["__file","01.let、constguanjianzi.html.vue"]]);export{o as default};
